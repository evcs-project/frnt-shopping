import React, { Component } from "react";
// import { useForm } from "react-hook-form";
import "../css/Home.css";

class Home extends Component {
  selectRef = React.createRef();

  componentDidMount() {
    console.log(this.selectRef.current.value);
  }

  // componentDidUpdate() {
  //   console.log(this.selectRef.current.value);
  // }

  changeSelect = (e) => {
    let select = "bookNm";
    const selectedValue = document.getElementById("bookType");
    select = selectedValue.options[selectedValue.selectedIndex].value;
    console.log(select);
  };
  render() {
    return (
      <header>
        <ul className="top-bar__menus">
          <li className="top-bar__menu">
            <a href="/Login">로그인</a>
          </li>
          <li className="top-bar__menu">회원가입</li>
          <li className="top-bar__menu">마이페이지</li>
        </ul>

        <div className="top-bar__searchBox">
          <i className="fas fa-book"></i>
          <div className="top-bar__searchBox__search">
            <select
              ref={this.selectRef}
              name="bookType"
              id="bookType"
              onChange={this.changeSelect}
            >
              <option value="bookNm">제목</option>
              <option value="publisher">출판사</option>
              <option value="writer">저자</option>
            </select>
            <input type="text" id="search"></input>
            <button className="searchBtn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </header>
    );

    const select = document.getElementById("bookType");

    const selectedValue = select.options[select.selectedIndex].value;

    console.log(selectedValue);
  }
}

export default Home;
