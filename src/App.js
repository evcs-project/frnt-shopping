import { HashRouter, BrowserRouter, Route, Router,  useHistory, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import React, { useState, useEffect } from "react";
import BookDetail from "./pages/BookDetail";
import { url } from "./pages/api";
import Header from './pages/Header'
import Main from './pages/Main'

let queryLS = localStorage.getItem("query");
let selectLS = localStorage.getItem("select");

let totalElements;
let totalPages;

let currentPage = 0;
function App() {
  const [data, setData] = useState([]);
  const [point, setPoint] = useState({
      page: 0,
      start: 0,
      end: 10,
      increasePage: 0
    }
  );

  const [bookDetail, setBookDetail] = useState([]);
  const [searchWord, setSearchWord] = useState([]);

  function handlePageChange(page, start, end, increasePage) {
      // setData({ ...data, currentPage: page });
      let queryLS = localStorage.getItem("query");
      let selectLS = localStorage.getItem("select");
      currentPage = page - 1;
  
      const point = {
        start: start,
        end: end,
        increasePage: increasePage,
      };

      setPoint(point);
      console.log("point : ", point);
  
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch(
        url +
          `api/book/search?size=10&page=${currentPage}&${selectLS}=${queryLS}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          return result.content.map((item) => ({
            isbn: item.isbn,
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

  const search = (select, query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const point = {
      start: 0,
      end: 10,
      increasePage: 0,
    };

    setPoint(point);

    // if (select !== "" && query !== "") {
    //   fetch(
    //     url + `api/book/search?size=10&page=0&${select}=${query}`,
    //     requestOptions
    //   )
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log("search함수", result);
    //       // result.totalpage
    //       totalPages = result.totalPages;
    //       totalElements = result.totalElements;
    //       if (result.content.length === 0) {
    //         alert("찾으시는 책이 없습니다.");
    //       }
    //       return result.content.map((item) => ({
    //         isbn: item.isbn,
    //         id: item.bookId,
    //         title: item.bookNm,
    //         category: item.categoryName,
    //         price: item.price,
    //         publisher: item.publisher,
    //         img: item.thumbnailUrl,
    //         writer: item.writer,
    //       }));
    //     })
    //     .then((items) => {
    //       setData(items);
    //       console.log(items);
    //     })
    //     .catch((error) => console.log("error", error));
    // }
  };

  function handlePageChange(page, start, end, increasePage) {
    // setData({ ...data, currentPage: page });
    let queryLS = localStorage.getItem("query");
    let selectLS = localStorage.getItem("select");
    currentPage = page - 1;

    const point = {
      start: start,
      end: end,
      increasePage: increasePage,
    };

    setPoint(point);
    console.log("point : ", point);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      url +
        `api/book/search?size=10&page=${currentPage}&${selectLS}=${queryLS}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        pageNumber = result.number;

        return result.content.map((item) => ({
          isbn: item.isbn,
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

  const handleValueSet = (select, inputValue) => {

    search(select, inputValue);
    localStorage.setItem("query", inputValue);
    localStorage.setItem("select", select);
  };

  function handleBookId(bookId) {
    // const [bookDetail, setBookDetail] = useState([]);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url + `api/book/${bookId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .then((item) => {
        // item.section.replaceAll("\n", "\\n");

        setBookDetail(item);
        // let test = item.section.replaceAll("\n", "\\n");
        // console.log("test", test);
      })
      .catch((error) => console.log("error", error));
  }
  
  return (
    <BrowserRouter>
      <div className="App">
      <Header onChange={handleValueSet} />
        <Route path="/" exact={true}>
          <Home
            totalPages={totalPages}
            onChange={handleValueSet}
            onPageChange={handlePageChange}
            currentPage={currentPage}
            point={point}
            handleBookId={handleBookId}
            totalElements={totalElements}
            searchWord={searchWord}
          />
        </Route>
       <Route path = "/Main">
         <Main select = {selectLS} handleBookId={handleBookId} books={data} query = {queryLS}></Main>
       </Route>
        <Route path="/login" component={Login} exact={true}></Route>
        <Route path="/Signup" component={Signup} exact={true}></Route>
        <Route path = '/BookDetail'>
            <BookDetail bookDetail = {bookDetail} ></BookDetail>
        </Route>
        {/* <Route path="/BookCart" component={BookCart} exact={true}>
      
        </Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
