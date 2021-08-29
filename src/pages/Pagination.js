import React from "react";
import _ from "lodash";
import "../css/page.css";

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

  return (
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
    </nav>
  );
};

export default Pagination;
