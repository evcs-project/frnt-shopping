import React, { Component, useRef } from "react";
// import { useForm } from "react-hook-form";
import "../css/Home.css";
import BookDetail from "./BookDetail";
import Main from "./Main";
import Pagination from "./Pagination";

function Home({
  totalPages,
  point,
  setPoint,
  currentPage,
  onPageChange,
  books,
  onChange,
}) {
  const inputRef = useRef();

  const handleValueSet = () => {
    if (inputRef.current.value == "") {
      alert("검색어를 입력하세요.");
    }

    let select = "bookNm";
    const selectedValue = document.getElementById("bookType");
    select = selectedValue.options[selectedValue.selectedIndex].value;
    let inputValue = inputRef.current.value;

    onChange(select, inputValue);
    inputRef.current.value = "";
  };

  return (
    <>
      <header>
        <ul className="top-bar__menus">
          <li className="top-bar__menu">
            <a href="/Login">로그인</a>
          </li>
          <li className="top-bar__menu">
            <a href="/Signup">회원가입</a>
          </li>
          <li className="top-bar__menu">마이페이지</li>
        </ul>

        <div className="top-bar__searchBox">
          <div className="top-bar__search">
            <div className="top-bar__category">
              <select name="bookType" id="bookType">
                <option value="bookNm">제목</option>
                <option value="publisher">출판사</option>
                <option value="writer">저자</option>
              </select>
            </div>
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleValueSet();
                  inputRef.current.value = "";
                }
              }}
              ref={inputRef}
              type="text"
              id="search"
              maxLength="15"
              placeholder="for search"
            ></input>

            <button onClick={handleValueSet} id="searchBtn">
              <i className="fas fa-search fa-2x"></i>
            </button>
          </div>
        </div>
      </header>
      <Main books={books} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        setPoint={setPoint}
        point={point}
      ></Pagination>
    </>
  );
}

export default Home;
