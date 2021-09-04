import React from "react";
import _, { constant, lte, slice } from "lodash";
import "../css/page.css";

const Pagination = ({
  totalPages,
  onPageChange,
  currentPage,
  setPoint,
  point,
}) => {
  console.log(point)

  let pages =  _.range(1, totalPages + 1)

  console.log(pages)
  
  let startPage = point.start;
  let endPage = point.end;
  let slicePages = pages.slice(startPage, endPage);

  console.log("total Page:", totalPages);
  console.log("pages:", pages);
  
  if (pages.length > 10) {
    console.log("page개수 10보다 큼");
    pages = pages.slice(0, 10);
  }

  return (
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
    </nav>
  );
};

export default Pagination;
