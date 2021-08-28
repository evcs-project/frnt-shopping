import React, { Component } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../css/content.module.css";

class Content extends Component {
  render() {
    return (
      <li className={styles.li}>
        <div className={styles.book_Img}>
          <img src={this.props.book.img}></img>
        </div>
        <div className={styles.book_Info}>
          <div className={styles.book_Info_title}>{this.props.book.title}</div>
          <div className={styles.book_Info_publisherwriter}>
            <div className={styles.book_Info_writer}>
              {this.props.book.writer} 저 ㅣ
            </div>
            <div className={styles.book_Info_publisher}>
              {this.props.book.publisher}
            </div>
          </div>
          <div className={styles.book_Info_category}>
            {this.props.book.category}
          </div>
          <div className={styles.book_Info_price}>
            {this.props.book.price}
            <span>원</span>
          </div>
        </div>
      </li>
    );
  }
}

export default Content;
