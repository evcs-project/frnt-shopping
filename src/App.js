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

const queryLS = localStorage.getItem("query");
const selectLS = localStorage.getItem("select");

console.log("query:", queryLS);
console.log("select:", selectLS);

function App() {
  const [data, setData] = useState([]);

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
        })
        .catch((error) => console.log("error", error));
    }
  };

  const pageSize = 4;
  const itemsCount = 100;
  const currentPage = 1;

  const pagedBooks = paginate(data, currentPage, pageSize);

  const handlePageChange = (page) => {
    // setData({ ...data, currentPage: page });
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `http://13.125.22.103:8080/api/book/search?size=5&page=${page}&${selectLS}=${queryLS}`,
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
      })
      .catch((error) => console.log("error", error));
  };

  const handleValueSet = (select, inputValue) => {
    search(select, inputValue);

    localStorage.setItem("query", inputValue);
    localStorage.setItem("select", select);
  };

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
