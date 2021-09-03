import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { url } from "./api";

function BookCart({ onChange }) {
  const location = useLocation();
  console.log(location.state);

  fetch(url + `api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bookid: location.state.id,
      count: location.state.count,
    }),
  }).then((response) => console.log(response));

  //   const requestOptions = {
  //     method: "POST",
  //     redirect: "follow",
  //   };

  //   fetch(url + `api/cart`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       return result;
  //     })
  //     .then((item) => {})
  //     .catch((error) => console.log("error", error));

  return (
    <>
      <Header onChange={onChange} />
      <span>안녕</span>
    </>
  );
}

export default BookCart;
