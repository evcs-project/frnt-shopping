import React, { Component } from "react";

function BookDetailRender({ bookDetail }) {
  return (
    <div className="bookInfo__container">
      <div className="bookInfo__img">
        <img src={bookDetail.thumbnailUrl}></img>
      </div>
      <div className="bookInfo__texts">
        <div className="bookInfo__title">{bookDetail.bookNm}</div>
        <div className="bookInfo__writer">{bookDetail.writer}</div>
        <div className="bookInfo__publisher">{bookDetail.publisher}</div>
        <div className="bookInfo__price">{bookDetail.price}</div>
        <div className="bookInfo__category">{bookDetail.categoryName}</div>
      </div>
    </div>
  );
}

export default BookDetailRender;
