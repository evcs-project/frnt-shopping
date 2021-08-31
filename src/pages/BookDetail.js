import React, { useState, useRef } from "react";
import "../css/bookDetail.css";
import Header from "./Header";
import { Link } from "react-router-dom";

function BookDetail({ bookDetail, onChange }) {
  console.log(bookDetail);

  return (
    <>
      <Header onChange={onChange} />
      <div className="bookInfo__container">
        <div className="bookInfo__img">
          <img src={bookDetail.thumbnailUrl}></img>
        </div>
        <div className="bookInfo__texts">
          <div className="bookInfo__title">{bookDetail.bookNm}</div>
          <div className="bookInfo__writerPublish">
            <div className="bookInfo__writer">{bookDetail.writer}저</div>
            <div className="bookInfo__publisher">{bookDetail.publisher}</div>
          </div>
          <div className="bookInfo__price">{bookDetail.price}원</div>
          <div className="bookInfo__category">{bookDetail.categoryName}</div>
          <div className="bookInfo__description">{bookDetail.description}</div>
        </div>
        <div className="bookInfo__cart">
          <div className="bookInfo__cart__goCart">
            <span>장바구니 넣기</span>
          </div>
          <div className="bookInfo__cart__buy">
            <span>바로 구매</span>
          </div>
        </div>
      </div>
      <div className="bookInfo__section">
        <div className="bookInfo__section__title">목차</div>
        {bookDetail.section}
      </div>
    </>
  );
}

export default BookDetail;
