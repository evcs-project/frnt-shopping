import React from "react";
import _, { constant, lte } from "lodash";
import "../css/page.css";

const Pagination = ({
  totalPages,
  pageSize,
  onPageChange,
  itemsCount,
  currentPage,
  start,
  end
}) => {
  const pageCount = totalPages;
  console.log(start)
  console.log(end)
  // if (pageCount === 1) return null;
  let pages = _.range(1, pageCount + 1);

  console.log(pages)
  // let realPagesArr = pages;
  // console.log(realPagesArr);

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
  let increasePage = 1;
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
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
        className={pages.length === 10 ? "pageBtn active" : "pageBtn"}
        onClick={() => {
          onPageChange(increasePage * 10 + 1)
          increasePage++;
        }
        }>
        버튼
      </button>
    </nav>
  );
};

export default Pagination;
