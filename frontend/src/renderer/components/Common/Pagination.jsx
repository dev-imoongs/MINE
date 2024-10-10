import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            nextLabel=">"
            onPageChange={onPageChange}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName="flex justify-center space-x-2 space-x-reverse"
            pageClassName="w-10 h-10 rounded-md shrink-0"
            pageLinkClassName="block leading-10"
            previousClassName="w-4 mr-2"
            previousLinkClassName="items-center h-full flex"
            nextClassName="w-4 mr-2"
            nextLinkClassName="items-center h-full flex"
            activeClassName="bg-jngreen/80 text-white"
            breakClassName="w-4"
            breakLinkClassName="items-center h-full flex"
        />
    );
};

export default Pagination;
