import React, { Component } from "react";
import Content from "./Content";
import styles from "../css/content.module.css";

class Main extends Component {
  render() {
    return (
      <div className={styles.mainConatiner}>
        <ul className={styles.ul}>
          {this.props.books.map((book) => (
            <Content book={book} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
