import React, { Component, useRef } from "react";
// import { useForm } from "react-hook-form";
import "../css/Home.css";
import Header from "./Header";
import Main from "./Main";
import Pagination from "./Pagination";
import { Route } from "react-router-dom";

function Home({
  totalPages,
  point,
  setPoint,
  currentPage,
  onPageChange,
  books,
  onChange,
  handleBookId,
  totalElements,
  searchWord,
}) {
  return (
    <>
      <Header onChange={onChange} />
      <Main
        books={books}
        handleBookId={handleBookId}
        totalElements={totalElements}
        searchWord={searchWord}
      />
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
