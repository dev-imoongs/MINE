import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalPage,
  currentPage,
  prev,
  next,
  pageNumbers,
  paginate,
}) => {
  return (
    <ul
      style={{ textAlign: "center" }}
      className="flex justify-center space-x-2 space-x-reverse"
    >
      {currentPage === 1 ? null : (
        <button className="w-4 mr-2" onClick={prev}>
          &lt;
        </button>
      )}
      {pageNumbers.map((num) => (
        <li
          className={`w-10 h-10 rounded-md shrink-0  ${
            currentPage === num ? "bg-jngreen/80 text-white" : ""
          }`}
          key={num}
        >
          <button className="block leading-10" onClick={() => paginate(num)}>
            {num}
          </button>
        </li>
      ))}
      {currentPage === totalPage ? null : (
        <button className="w-4 mr-2" onClick={next}>
          &gt;
        </button>
      )}
    </ul>
  );
};

export default Pagination;
