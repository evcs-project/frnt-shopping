import React, { Component, useState, useRef } from "react";
import "../css/Signup.css";
import { url } from "./api";
function Signup() {
  let IDinputRef = useRef();
  let PWinputRef = useRef();
  let NameinputRef = useRef();
  let PW2inputRef = useRef();
  const [UseInputIDvalue, inputIDvalueSet] = useState();
  const [UseInputPWvalue, inputPWvalueSet] = useState();
  const [UseInputNamevalue, inputNamevalueSet] = useState();
  // const [UseInputPW2value, inputPW2valueSet] = useState();
  function handleIDValue() {
    const inputIDValue = IDinputRef.current.value;
    inputIDvalueSet(inputIDValue);
  }
  function handlePWValue() {
    const inputPWValue = PWinputRef.current.value;
    inputPWvalueSet(inputPWValue);
  }
  function handleNameValue() {
    const inputNameValue = NameinputRef.current.value;
    inputNamevalueSet(inputNameValue);
  }
  function SignUpApi(e) {
    e.preventDefault();
    if (PW2inputRef.current.value !== UseInputPWvalue) {
      alert("비밀번호가 맞지 않습니다.");
    }
    console.log(UseInputIDvalue, UseInputNamevalue, UseInputPWvalue);
    const requestOptions = {
      method: "POST",
      redirect: "follow",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify({
        email: UseInputIDvalue,
        name: UseInputNamevalue,
        password: UseInputPWvalue,
        // roleName: "USER",
      }),
    };
    fetch(
      // https://cors-anywhere.herokuapp.com/
      `http://13.125.22.103:8080/api/member/signup`,
      requestOptions
    )
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  }
  return (
    <>
      <div className="signUp-container">
        <div className="border2">
          <div className="contents">
            <form type="submit" id="signup_form" onSubmit={SignUpApi}>
              <h2 className="pages-sub2">회원가입</h2>
              <div className="input_box">
                <div className="name-box">
                  <label htmlFor="name">사용자 이름</label>
                </div>
                <input
                  onChange={handleNameValue}
                  ref={NameinputRef}
                  type="text"
                  id="signUpId"
                  className="signup_input"
                  maxLength="20"
                  placeholder="10자리 이내로 입력"
                />
              </div>
              <div className="input_box">
                <div className="name-box">
                  <label htmlFor="id">아이디</label>
                </div>
                <input
                  onChange={handleIDValue}
                  ref={IDinputRef}
                  type="text"
                  id="signUpId"
                  className="signup_input"
                  maxLength="20"
                  placeholder="10자리 이내로 입력"
                />
              </div>
              <div className="input_box">
                <div className="name-box">
                  <label htmlFor="pswd1">비밀번호</label>
                </div>
                <input
                  onChange={handlePWValue}
                  ref={PWinputRef}
                  type="password"
                  id="signUpPw"
                  className="signup_input"
                  maxLength="20"
                  placeholder="********"
                />
              </div>
              <div className="input_box">
                <div className="name-box">
                  <label htmlFor="pswd2">비밀번호 확인</label>
                </div>
                <input
                  ref={PW2inputRef}
                  type="password"
                  id="pswd2"
                  className="signup_input"
                  maxLength="20"
                  placeholder="********"
                />
              </div>
              <div className="signUp-btn__box"></div>
              <button className="signUp-button">회원가입</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;