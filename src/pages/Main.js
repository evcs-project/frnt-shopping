import React, { Component } from "react";
import Content from "./Content";
import styles from "../css/content.module.css";

function Main({ books, handleBookId }) {
  return (
    <div className={styles.mainConatiner}>
      <ul className={styles.ul}>
        {
          books.map((book, index) => (
          <Content key={index} book={book} handleBookId = {handleBookId}/>
        ))}
      </ul>
    </div>
  );
}

export default Main;
