import React, { Component } from 'react';
import '../css/Login.css'

class Login extends Component {
  render() {
    return (
      <>
      {/* <ul className="top-bar__menus">
        <li className="top-bar__menu"><a href = "/">홈</a></li>
        <li className="top-bar__menu"><a href = "/Signup">회원가입</a></li>
        <li className="top-bar__menu">마이페이지</li>
      </ul> */}

      <div className = "container">
        <div className="border">
      <div className="contents">
        <form type = "submit" id = "login_form" class = "login_form">
          <h2 className="pages-sub">로그인</h2>
          
          <div className = "input_container">
            <label htmlFor = "userId"></label>
            <input type = "text" class = "same_input" id = "userId" placeholder = "아이디"/>
          </div>
          <div className = "input_container">
            <label htmlFor = "password"></label>
            <input type ="password" class = "same_input" id = "password" placeholder = "비밀번호" />
          </div>
          <div className = "login_container"> 
          </div>
          <button className = "login_button">로그인</button>
          <div id="nota-sign">
          <p>회원이 아니신가요? <a href="/Signup" className="sign-go">회원가입하기</a></p>
          </div>
        </form></div>
      </div>
      </div>
      </>
    );
  }
}

export default Login;