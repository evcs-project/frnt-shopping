import React, { useState, Component, useEffect } from "react";
import Content from "./Content";
import styles from "../css/content.module.css";
import { url } from "./api";
import Pagination from "./Pagination";
import { Route, Link, useHistory, useLocation } from "react-router-dom";

// totalPages={totalPages}
//       currentPage={currentPage}
//       onPageChange={onPageChange}
//       setPoint={setPoint}
//       point={point}
function Main({
  select,
  query,
  handleBookId,
  totalElements,
  searchWord,
  totalPages,
  onPageChange,
  setPoint,
  point,
  currentPage,
}) {
  const location = useLocation();
  const history = useHistory();

  const [bookArray, setBookArray] = useState([]);
  let queryLS = localStorage.getItem("query");
  let selectLS = localStorage.getItem("select");

  useEffect(() => {
    let path = history.location.pathname;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    if (path === "/") {
      return;
    }

    fetch(
      url +
        `api/book/search?size=10&page=${currentPage}&${selectLS}=${queryLS}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("search함수", result);
        totalElements = result.totalElements;
        if (result.content.length === 0) {
          // alert("찾으시는 책이 없습니다.");
        }
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
        setBookArray(items);
        console.log(items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className={styles.mainConatiner}>
        <ul className={styles.ul}>
          <span>{/* {searchWord} 검색결과: {totalElements}건 */}</span>
          {bookArray.map((book, index) => (
            <Content key={index} book={book} handleBookId={handleBookId} />
          ))}
        </ul>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        setPoint={setPoint}
        point={point}
      ></Pagination>
    </>
  );
}
export default Main;
