import React, { useState } from 'react';
import Pagination from '../../components/Common/Pagination';

const itemsPerPage = 4;

const AuctionListPaginationContainer = () => {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    // 임시로 아이템 만들었음
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        setCurrentPage(e.selected);
    };

    return (
        <div className="bottom-0 py-3 m-auto text-center bg-white lg:mb-2">
            {/* 페이지네이션 */}
            {pageCount > 1 && (
                <Pagination pageCount={pageCount} onPageChange={handlePageClick} currentPage={currentPage} />
            )}
        </div>
    );
};

export default AuctionListPaginationContainer;
