import React, { Component } from 'react';
import '../css/Login.css'

class Login extends Component {
  render() {
    return (
      <>
      <ul className="top-bar__menus">
        <li className="top-bar__menu"><a href = "/">홈</a></li>
        <li className="top-bar__menu">회원가입</li>
        <li className="top-bar__menu">마이페이지</li>
      </ul>

      <div className = "container">
        <form type = "submit" id = "login_form" class = "login_form">
          <div className = "userId_container">
              <label htmlFor = "userId"></label>
              <input type = "text" class = "same_input" id = "userId" placeholder = "아이디"/>
            </div>

            <div className = "password_container">
              <label htmlFor = "password"></label>
              <input type ="password" class = "same_input" id = "password" placeholder = "비밀번호" />
            </div>
            <div className = "login_container">
            
    
            </div>
            <button id = "login_button"><span>로그인</span></button>
        </form>
      </div>
      </>
    );
  }
}

export default Login;