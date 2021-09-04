import React, { Component, useRef } from "react";
// import { useForm } from "react-hook-form";
import "../css/Home.css";
import Main from "./Main";
import Pagination from "./Pagination";
function Home({
  totalPages,
  point,
  setPoint,
  currentPage,
  onPageChange,
  books,
  handleBookId,
  totalElements,
  searchWord,
}) {
  return (
    <>
      <Main
        books={books}
        handleBookId={handleBookId}
        totalElements={totalElements}
        searchWord={searchWord}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        setPoint={setPoint}
        point={point}
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