import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React, { useState } from "react";
import _ from "lodash";

function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize; // 자를 배열의 시작점

  return _(items)
    .slice(startIndex) // 시작점부터 배열을 자르되
    .take(pageSize) // pageSize만큼의 배열을 취함
    .value(); // lodash wrapper 객체를 regular 배열로 변환
}

let queryLS = localStorage.getItem("query");
let selectLS = localStorage.getItem("select");

console.log("query:", queryLS);
console.log("select:", selectLS);

let totalElements;

function App() {
  const [data, setData] = useState([]);

  let currentPage;

  const search = (select, query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    console.log(select, query);

    if (select !== "" && query !== "") {
      fetch(
        `http://13.125.22.103:8080/api/book/search?size=5&page=0&${select}=${query}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.totalElements);
          totalElements = result.totalElements;
          if (result.content.length === 0) {
            alert("찾으시는 책이 없습니다.");
          }

          return result.content.map((item) => ({
            id: item.bookId,
            title: item.bookNm,
            category: item.categoryName,
            price: item.price,
            publisher: item.publisher,
            img: item.thumbnailUrl,
            writer: item.writer,
          }));
        })
        .then((items) => {
          setData(items);
        })
        .catch((error) => console.log("error", error));
    }
  };

  const pageSize = 5;
  const itemsCount = totalElements;

  console.log("전역: ", currentPage);

  const pagedBooks = paginate(data, currentPage, pageSize);

  const handlePageChange = (page) => {
    // setData({ ...data, currentPage: page });

    currentPage = page;

    console.log("지역: ", currentPage);
    let queryLS = localStorage.getItem("query");
    let selectLS = localStorage.getItem("select");
    let pageNum = page - 1;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `http://13.125.22.103:8080/api/book/search?size=5&page=${pageNum}&${selectLS}=${queryLS}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.content.length === 0) {
          alert("찾으시는 책이 없습니다.");
        }

        return result.content.map((item) => ({
          id: item.bookId,
          title: item.bookNm,
          category: item.categoryName,
          price: item.price,
          publisher: item.publisher,
          img: item.thumbnailUrl,
          writer: item.writer,
        }));
      })
      .then((items) => {
        setData(items);
        console.log(items);
      })
      .catch((error) => console.log("error", error));
  };

  const handleValueSet = (select, inputValue) => {
    search(select, inputValue);

    localStorage.setItem("query", inputValue);
    localStorage.setItem("select", select);
  };

  console.log("리턴직전: ", currentPage);
  return (
    <div className="App">
      <Route path="/" exact={true}>
        <Home
          books={pagedBooks}
          onChange={handleValueSet}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          itemsCount={itemsCount}
          currentPage={currentPage}
        />
      </Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/Signup" component={Signup}></Route>
    </div>
  );
}

export default App;
