import React, { useState, useRef } from "react";
import "../css/bookDetail.css";
import Header from './Header';
import {Link} from 'react-router-dom'

function BookDetail({bookDetail, onChange}) {
 console.log(bookDetail)

  return <>
  <Header onChange = {onChange}/>
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
      <div className="bookInfo__description">{bookDetail.description}</div>
    </div>
  </div>
</>
}

export default BookDetail;
