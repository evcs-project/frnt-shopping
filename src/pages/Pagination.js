import React from "react";
import _, { constant, lte } from "lodash";
import "../css/page.css";

<<<<<<< HEAD
const Pagination = ({
  totalPages,
  onPageChange,
  currentPage,
  setPoint,
  point,
}) => {
  // if (pageCount === 1) return null;
  let pages = _.range(1, totalPages + 1);

  let startPage = point.start;
  let endPage = point.end;
  let slicePages = pages.slice(startPage, endPage);
=======
const Pagination = ({ totalPage, onPageChange, currentPage }) => {
  const pageCount = totalPage;
  let pages = _.range(1, pageCount + 1);

  let start = 0;
  let end = 10;
  pages.slice(start, end)
  
  const showPage = (pageStart, pageEnd) => {
    console.log(pageStart)
    console.log(pageEnd)
    pages = pages.slice(pageStart, pageEnd)
    console.log(pages)
    onPageChange()
  }
>>>>>>> 6b7e7a661c39805a57d0d7c86c356404b116952e

  // pages = pages.slice(point.start, point.end)
  // let realPagesArr = pages;
  // console.log(realPagesArr);

  console.log("total Page:", totalPages);
  console.log("pages:", pages);
  if (pages.length > 10) {
    console.log("page개수 10보다 큼");
    pages = pages.slice(0, 10);
  }

  // let start = 10;
  // let end = 20;

  // let realPagesArr2 = new Array();

  // function showPage(pageStart, pageEnd) {
  //   console.log(pageStart, pageEnd, "자름");
  //   realPagesArr2 = realPagesArr.slice(pageStart, pageEnd);

  //   start += 10;
  //   end += 10;
  // }
  // console.log(realPagesArr2);
  return (
<<<<<<< HEAD
    <nav className="pageContainer">
      <button
        className={
          pages.length >= 10 && slicePages[0] !== 1
            ? "pageFirstBtn active"
            : "pageFirstBtn"
        }
        onClick={() => {
          point.increasePage = 0;
          onPageChange(
            point.increasePage * 10 + 1,
            point.increasePage * 10,
            point.increasePage * 10 + 10,
            point.increasePage
          );
        }}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
      <button
        className={
          pages.length >= 10 && slicePages[0] !== 1
            ? "pageBtn active"
            : "pageBtn"
        }
        onClick={() => {
          point.increasePage--;
          onPageChange(
            point.increasePage * 10 + 1,
            point.increasePage * 10,
            point.increasePage * 10 + 10,
            point.increasePage
          );
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <ul className={pages.length !== 1 ? "pagination" : "pagination hide"}>
        {slicePages.map((page) => (
          <li
            onClick={() =>
              onPageChange(page, point.start, point.end, point.increasePage)
            }
            key={page}
            className={
              page === currentPage + 1 ? "page-item active" : "page-item"
            }
            style={{ cursor: "pointer" }}
          >
            <a className="page-link">{page}</a>{" "}
            {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
          </li>
        ))}
      </ul>
      <button
        className={
          pages.length >= 10 && slicePages[slicePages.length - 1] !== totalPages
            ? "pageBtn active"
            : "pageBtn"
        }
        onClick={() => {
          point.increasePage++;
          onPageChange(
            point.increasePage * 10 + 1,
            point.increasePage * 10,
            point.increasePage * 10 + 10,
            point.increasePage
          );
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <button
        className={
          pages.length >= 10 && slicePages[slicePages.length - 1] !== totalPages
            ? "pageLastBtn active"
            : "pageLastBtn"
        }
        onClick={() => {
          point.increasePage = totalPages / 10 - 1;
          onPageChange(
            totalPages,
            point.increasePage * 10,
            point.increasePage * 10 + 10,
            point.increasePage
          );
        }}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
=======
    <nav>
      <ul className="pagination">
        {
          pages.map((page) => (
            <li
              key={page}
              className={page === currentPage ? "page-item active" : "page-item"}
              style={{ cursor: "pointer" }}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>{" "}
          </li>
        ))}
      </ul>
      <button onClick = {() => onPageChange(currentPage+10)}>버튼</button>
>>>>>>> 6b7e7a661c39805a57d0d7c86c356404b116952e
    </nav>
  );
};

export default Pagination;
