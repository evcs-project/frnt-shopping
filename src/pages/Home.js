import React, { Component } from "react";
// import { useForm } from "react-hook-form";
import "../css/Home.css";
import Main from './Main'

class Home extends Component {
  inputRef = React.createRef();

  // componentDidUpdate() {
  //   console.log(this.selectRef.current.value);
  // }

  // changeSelect = (e) => {
  //   let select = "bookNm";
  //   const selectedValue = document.getElementById("bookType");
  //   select = selectedValue.options[selectedValue.selectedIndex].value;
  //   console.log(select);
  // };

  handleValueSet =() =>{
    let inputValue = this.inputRef.current.value;

    if(inputValue === ''){
      alert('검색 값을 입력해주세요')
      return;
    }

    let select = "bookNm";
    const selectedValue = document.getElementById("bookType");
    select = selectedValue.options[selectedValue.selectedIndex].value;
    this.props.onChange(select, inputValue)
  }

  render() {
    return (
      <>
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
            >
              <option value="bookNm">제목</option>
              <option value="publisher">출판사</option>
              <option value="writer">저자</option>
            </select>
            <input  onKeyPress= {e => {if(e.key ==='Enter'){this.handleValueSet()
              this.inputRef.current.value = ''
            }}} ref = {this.inputRef} type="text" id="search"></input>
            <button onClick = {this.handleValueSet} className="searchBtn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </header>
       <Main books = {this.props.books}/>
      </>
    );
  }
}

export default Home;
