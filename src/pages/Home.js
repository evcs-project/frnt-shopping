import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <header>
      <ul className="top-bar__menus">
        <li className="top-bar__menu"><a href = "/Login">로그인</a></li>
        <li className="top-bar__menu">회원가입</li>
        <li className="top-bar__menu">마이페이지</li>
      </ul>

      <div className="top-bar__searchBox">
        <i className="fas fa-book"></i>
        <div className="top-bar__searchBox__search">
          <select name="bookType" id="bookType">
            <option value="name">제목</option>
            <option value="name">저자</option>
            <option value="name">출판사</option>
            <option value="name">제목</option>
            <option value="name">제목</option>
          </select>
          <input type="text" id="search"></input>
          <button className="searchBtn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Home;
