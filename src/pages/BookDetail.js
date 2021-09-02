import React, { useState, useRef } from "react";
import "../css/bookDetail.css";
import Header from "./Header";
import { Link } from "react-router-dom";

function BookDetail({ bookDetail, onChange }) {
  console.log(bookDetail)
  const [inputvalue, inputValueSet] = useState();
  const inputRef = useRef();
  
  const handleInput = () =>{
    const inputValue = inputRef.current.value;
    inputValueSet(inputValue)
  }
  
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

        <div>
        <input 
        ref = {inputRef}
        onChange = {handleInput}
        type="number" id="tentacles" name="tentacles"
       min="0" max="100" />
        </div>

        <div className="bookInfo__cart">
          <Link
            to={{
              pathname: `/BookCart`,
              state: {
                count: inputvalue,
                bookDetail: bookDetail,
                bookid : bookDetail.bookid
              },
            }}
          >
            <div className="bookInfo__cart__goCart">
              <span>장바구니 넣기</span>
            </div>
          </Link>
          <div className="bookInfo__cart__buy">
            <span>바로 구매</span>
          </div>
        </div>
      </div>
      <div className="bookInfo__section">
        <div className="bookInfo__section__title">목차</div>
        {bookDetail.section != null
          ? bookDetail.section.split("\n").map((line) => {
              return (
                <>
                  {line != "" ? "-" : null} {line}
                  <br></br>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}

export default BookDetail;
