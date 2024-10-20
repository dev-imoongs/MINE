import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
    return (
        <ReactPaginate
            nextLabel={currentPage === pageCount - 1 ? '' : '>'}
            onPageChange={onPageChange}
            pageRangeDisplayed={6}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            previousLabel={currentPage === 0 ? '' : '<'}
            containerClassName="flex justify-center space-x-2 space-x-reverse"
            pageClassName="w-10 h-10 rounded-md shrink-0"
            pageLinkClassName="block leading-10"
            previousClassName="w-4 mr-2"
            previousLinkClassName="items-center h-full flex"
            nextClassName="w-4 mr-2"
            nextLinkClassName="items-center h-full flex"
            activeClassName="bg-jngreen/80 text-white"
            breakClassName="hidden"
            breakLabel="..." // break을 숨기고 싶다면 이 줄도 추가
            forcePage={currentPage}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
