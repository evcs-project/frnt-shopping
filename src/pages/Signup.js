import React, { Component } from 'react';
import '../css/Signup.css'

class Signup extends Component{
    render() {
        return (
            <>
    <ul className="top-bar__menus">
        <li className="top-bar__menu"><a href = "/">홈</a></li>
        <li className="top-bar__menu"><a href = "/Login">로그인</a></li>
        <li className="top-bar__menu">마이페이지</li>
      </ul>
    <div class="signUp-container">
      <form type="submit" id= "signup_form" >
        <h2 class="signUp_title">회원가입</h2>
      
        <div class="signup_formbox">
          <div class="input-frame">
            <div class="input_box">
              <label for="id">아이디</label>
              <input
                type="text"
                id="signUpId"
                class="signup_input"
                maxlength="20"
              />
            </div>
       
            <div class="input_box">
              <label for="pswd1">비밀번호</label>
              <input
                type="password"
                id="signUpPw"
                class="signup_input"
                maxlength="20"
              />
            </div>
        
            <div class="input_box">
              <label for="pswd2">비밀번호 확인</label>
              <input
                type="password"
                id="pswd2"
                class="signup_input"
                maxlength="20"
              />
            </div>
          </div>
          <div class="signUp-Box">
            <button id="signUp-button">회원가입</button>
          </div>
        </div>
      </form>
    </div>
    </>
    );
};
}
    export default Signup;