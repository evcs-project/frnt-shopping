import React, { useEffect,useState, useRef } from "react";
import "../css/bookDetail.css";
import { Route, Link, useHistory ,useLocation } from "react-router-dom";
import { url } from './api'

function BookDetail({ bookDetail }){
  const [inputvalue, inputValueSet] = useState();
  const [bookdetail, bookdetailSet] = useState([]);

  let inputRef = useRef();
  const location = useLocation()
  const history = useHistory()

  console.log(bookdetail)
  const book = bookdetail;

  useEffect(() => {
    
    const bookId = history.location.pathname.replaceAll("/BookDetail/", "");

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
        console.log(item)
        bookdetailSet(item)
      })
      .catch((error) => console.log("error", error));
  })

  function handleInputValue() {
    const inputValue = inputRef.current.value;
    inputValueSet(inputValue);
  }

  return (
    <>
      <div className="bookInfo__container">
        <div className="bookInfo__img">
          <img src={book.thumbnailUrl}></img>
        </div>
        <div className="bookInfo__texts">
          <div className="bookInfo__title">{book.bookNm}</div>
          <div className="bookInfo__writerPublish">
            <div className="bookInfo__writer">{book.writer}저</div>
            <div className="bookInfo__publisher">{book.publisher}</div>
          </div>
          <div className="bookInfo__price">{book.price}원</div>
          <div className="bookInfo__category">{book.categoryName}</div>
          <div className="bookInfo__description">{book.description}</div>
        </div>

        <div>
        <input 
        ref = {inputRef}
        onChange = {handleInputValue}
        type="number" id="tentacles" name="tentacles"
       min="0" max="100" />
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
                id: book.bookId,
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
        {book.section != null
          ? book.section.split("\n").map((line) => {
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
