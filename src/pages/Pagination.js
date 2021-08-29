import React from "react";
import _, { constant, lte } from "lodash";
import "../css/page.css";

const Pagination = ({
  totalPages,
  pageSize,
  onPageChange,
  itemsCount,
  currentPage,
}) => {
  const pageCount = totalPages;

  // if (pageCount === 1) return null;
  let pages = _.range(1, pageCount + 1);

  let realPagesArr = pages;
  console.log(realPagesArr);

  if (pages.length > 10) {
    console.log("page개수 10보다 큼");
    pages = pages.slice(0, 10);
  }

  // let currentShowingPage = pages.length;

  // console.log(currentShowingPage);

  // let currentShowingPageArr = [];

  // function showPage(currentShowingPage) {
  //   for (let i = 1; i <= 10; i++) {
  //     currentShowingPageArr.push(currentShowingPage + i);
  //   }
  //   console.log(currentShowingPageArr);
  // }
  let start = 10;
  let end = 20;

  // 34

  let realPagesArr2 = new Array();

  function showPage(pageStart, pageEnd) {
    console.log(pageStart, pageEnd, "자름");
    realPagesArr2 = realPagesArr.slice(pageStart, pageEnd);

    start += 10;
    end += 10;
  }
  console.log(realPagesArr2);

  return (
    <nav>
      <ul className="pagination">
        {realPagesArr2.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>{" "}
            {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
          </li>
        ))}
      </ul>
      <button
        onClick={() => showPage(start, end)}
        className={pages.length === 10 ? "pageBtn active" : "pageBtn"}
      >
        버튼
      </button>
    </nav>
  );
};

export default Pagination;
