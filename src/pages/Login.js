import React, { Component, useState, useRef } from "react";
import "../css/Login.css";

function Login() {
  let IDinputRef = useRef();
  let PWinputRef = useRef();

  const [UseInputIDvalue, inputIDvalueSet] = useState();
  const [UseInputPWvalue, inputPWvalueSet] = useState();

  function handleIDValue() {
    const inputIDValue = IDinputRef.current.value;
    inputIDvalueSet(inputIDValue);
  }
  function handlePWValue() {
    const inputPWValue = PWinputRef.current.value;
    inputPWvalueSet(inputPWValue);
  }

  function LoginApi(e) {
    console.log(UseInputIDvalue, UseInputPWvalue);
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      // redirect: "follow",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify({
        email: UseInputIDvalue,
        password: UseInputPWvalue,
        // roleName: "USER",
      }),
    };
    fetch(
      // https://cors-anywhere.herokuapp.com/
      `http://13.125.22.103:8080/api/token/authenticate`,
      requestOptions
    )
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  }

  {
    return (
      <>
        <div className="container">
          <div className="border">
            <div className="contents">
              <form type="submit" id="login_form" className="login_form">
                <h2 className="pages-sub">로그인</h2>

                <div className="input_container">
                  <label htmlFor="userId"></label>
                  <input
                    onChange={handleIDValue}
                    ref={IDinputRef}
                    type="text"
                    className="same_input"
                    id="userId"
                    placeholder="아이디"
                  />
                </div>
                <div className="input_container">
                  <label htmlFor="password"></label>
                  <input
                    onChange={handlePWValue}
                    ref={PWinputRef}
                    type="password"
                    className="same_input"
                    id="password"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="login_container"></div>
                <button className="login_button" onClick={LoginApi}>
                  로그인
                </button>
                <div id="nota-sign">
                  <p>
                    회원이 아니신가요?{" "}
                    <a href="/Signup" className="sign-go">
                      회원가입하기
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
