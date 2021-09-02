import React, { useState, useRef } from "react";
import "../css/bookDetail.css";
import Header from "./Header";
import { Route, Link } from "react-router-dom";

function BookDetail({ bookDetail, onChange }) {
  const [inputvalue, inputValueSet] = useState();

  let inputRef = useRef();
  console.log();

  function handleInputValue() {
    const inputValue = inputRef.current.value;
    inputValueSet(inputValue);
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
        <div className="bookInfo__cart">
          <div className="bookInfo__cart__numberBtn">
            <span>수량</span>
            <input
              onChange={handleInputValue}
              ref={inputRef}
              type="number"
              id="bookNumberBtn"
              name="bookNumberBtn"
              min="1"
              max="100"
            />
          </div>
          <Link
            to={{
              pathname: `/BookCart`,
              state: {
                count: inputvalue,
                id: bookDetail.bookId,
              },
            }}
          >
            <div className="bookInfo__cart__goCart" onClick={handleInputValue}>
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
