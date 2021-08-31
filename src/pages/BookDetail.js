import React, { useState } from "react";
import "../css/bookDetail.css";
import BookDetailRender from "./BookDetailRender";

function BookDetail(book) {
  console.log("bookDetail함수");
  const [bookDetail, setBookDetail] = useState([]);

  const bookId = book.location.state.book.id;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://13.125.22.103:8080/api/book/${bookId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      return result;
    })
    .then((items) => {
      setBookDetail(items);
      console.log(items);
    })
    .catch((error) => console.log("error", error));

  return <BookDetailRender bookDetail={bookDetail}></BookDetailRender>;
}

export default BookDetail;
