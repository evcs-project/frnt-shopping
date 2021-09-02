import React from "react";

function BookCart(props) {
  console.log(props)
  return <span>{props.location.state.count}</span>;
}

export default BookCart;
