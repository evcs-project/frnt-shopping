import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styles from "../css/content.module.css";
import { Link, Route } from "react-router-dom";

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
      <li className={styles.li}>
        <div className={styles.book_Img}>
          <img src={book.img}></img>
        </div>
        <div className = {styles.book_Info}>
          <div className={styles.book_Info_title}>{book.title}</div>
          <div className={styles.book_Info_publisherwriter}>
            <div className={styles.book_Info_writer}>
              {book.writer} 저 ㅣ
>>>>>>> doyeon
            </div>
            <div className={styles.book_Info_category}>{book.category}</div>
            <div className={styles.book_Info_price}>
              {book.price}
              <span>원</span>
            </div>
          </div>
<<<<<<< HEAD
        </li>
      </Link>
      </>
  );
=======
          <div className={styles.book_Info_category}>
            {book.category}
          </div>
          <div className={styles.book_Info_price}>
            {book.price}
            <span>원</span>
          </div>
        </div>
      </li>
      </>
    );
>>>>>>> doyeon
}

export default Content;
