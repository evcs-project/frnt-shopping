import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <header>
      <ul class="top-bar__menus">
        <li class="top-bar__menu">로그인</li>
        <li class="top-bar__menu">회원가입</li>
        <li class="top-bar__menu">마이페이지</li>
      </ul>

      <div class="top-bar__searchBox">
        <i class="fas fa-book"></i>
        <div class="top-bar__searchBox__search">
          <select name="bookType" id="bookType">
            <option value="name">제목</option>
            <option value="name">저자</option>
            <option value="name">출판사</option>
            <option value="name">제목</option>
            <option value="name">제목</option>
          </select>
          <input type="text" id="search"></input>
          <button class="searchBtn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Home;
