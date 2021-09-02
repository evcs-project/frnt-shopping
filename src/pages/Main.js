import React, { Component } from "react";
import Content from "./Content";
import styles from "../css/content.module.css";

function Main({ books, handleBookId, totalElements, searchWord }) {
  console.log("searchWord:", searchWord);
  return (
    <div className={styles.mainConatiner}>
      <ul className={styles.ul}>
        <span>
          {searchWord} 검색결과: {totalElements}건
        </span>
        {books.map((book, index) => (
          <Content key={index} book={book} handleBookId={handleBookId} />
        ))}
      </ul>
    </div>
  );
}

export default Main;
