import React from "react";

function BookDetail(book) {
  console.log(book.location.state.book.id);
  const bookId = book.location.state.book.id;
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://13.125.22.103:8080/api/book/${bookId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .then((items) => {})
    .catch((error) => console.log("error", error));

  console.log(book);
  return <span></span>;
}

export default BookDetail;
