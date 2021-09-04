import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "../css/content.module.css";
import { Link, Route } from "react-router-dom";

<<<<<<< HEAD
<<<<<<< HEAD
function Content({ book, handleBookId }) {
 
  const onHandleBookId = () =>{
    handleBookId(book.id)
  }

  return (
    <>
      <Link
        to={{
          pathname: `/BookDetail/${book.id}`,
          state: {
            book: book,
          },
        }}
      >
        <li className={styles.li} onClick = {onHandleBookId}>
          <div className={styles.book_Img}>
            <img src={book.img}></img>
          </div>
          <div className={styles.book_Info}>
            <div className={styles.book_Info_title}>{book.title}</div>
            <div className={styles.book_Info_publisherwriter}>
              <div className={styles.book_Info_writer}>{book.writer} 저 ㅣ</div>
              <div className={styles.book_Info_publisher}>{book.publisher}</div>
=======
function Content({book}) {
    return (
      <>
=======
function Content({ book }) {
  return (
    <>
>>>>>>> 28eec9f3300a8d98b38996abfbc03891dae3e98d
      <li className={styles.li}>
        <div className={styles.book_Img}>
          <img src={book.img}></img>
        </div>
        <div className={styles.book_Info}>
          <div className={styles.book_Info_title}>{book.title}</div>
          <div className={styles.book_Info_publisherwriter}>
<<<<<<< HEAD
            <div className={styles.book_Info_writer}>
              {book.writer} 저 ㅣ
>>>>>>> doyeon
            </div>
=======
            <div className={styles.book_Info_writer}>{book.writer} 저 ㅣ</div>
>>>>>>> 28eec9f3300a8d98b38996abfbc03891dae3e98d
            <div className={styles.book_Info_category}>{book.category}</div>
            <div className={styles.book_Info_price}>
              {book.price}
              <span>원</span>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </li>
      </Link>
      </>
  );
=======
          <div className={styles.book_Info_category}>
            {book.category}
          </div>
=======
          <div className={styles.book_Info_category}>{book.category}</div>
>>>>>>> 28eec9f3300a8d98b38996abfbc03891dae3e98d
          <div className={styles.book_Info_price}>
            {book.price}
            <span>원</span>
          </div>
        </div>
      </li>
<<<<<<< HEAD
      </>
    );
>>>>>>> doyeon
=======
    </>
  );
>>>>>>> 28eec9f3300a8d98b38996abfbc03891dae3e98d
}

export default Content;
