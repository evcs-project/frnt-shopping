import React from "react";
import _, { constant, lte } from "lodash";
import "../css/page.css";

const Pagination = ({
  totalPages,
  onPageChange,
  currentPage,
  setPoint,
  point
}) => {
  // if (pageCount === 1) return null;
  let pages =  _.range(1, totalPages + 1)
  
  console.log(pages)
  
  let startPage = point.start;
  let endPage = point.end;
  let slicePages = pages.slice(startPage, endPage)
  console.log(slicePages)
  console.log(slicePages[slicePages.length - 1])

  // pages = pages.slice(point.start, point.end)
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

    console.log(point.increasePage)

  return (
    <nav>
      <button 
        className={pages.length >= 10 && slicePages[0] !== 1 ? "pageBtn active" : "pageBtn"}
        onClick={() => {
          point.increasePage--;
          onPageChange(point.increasePage * 10 + 1, point.increasePage * 10, point.increasePage * 10 + 10, point.increasePage)
        }
      }
      >
        뒤로
      </button>
      <ul className="pagination">
        {slicePages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            style={{ cursor: "pointer" }}
          >
            <a className="page-link" onClick={() => onPageChange(page, point.start, point.end, point.increasePage)}>
              {page}
            </a>{" "}
            {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
          </li>
        ))}
      </ul>
      <button
        className={pages.length >= 10 && slicePages[slicePages.length - 1] !== totalPages ? "pageBtn active" : "pageBtn"}
        onClick={() => {
          point.increasePage++;
          onPageChange(point.increasePage * 10 + 1, point.increasePage * 10, point.increasePage * 10 + 10, point.increasePage)
        }
        }>
        버튼
      </button>
    </nav>
  );
};

export default Pagination;
