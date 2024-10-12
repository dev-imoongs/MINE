import React, { useState } from 'react';
import Pagination from '../../components/Common/Pagination';

const itemsPerPage = 30;

const AuctionListPaginationContainer = () => {
    const [itemOffset, setItemOffset] = useState(0);

    // 임시로 아이템 만들었음
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="bottom-0 py-3 m-auto text-center bg-white lg:mb-2">
            {/* 페이지네이션 */}
            {pageCount > 0 && <Pagination pageCount={Math.max(1, pageCount - 1)} onPageChange={handlePageClick} />}
        </div>
    );
};

export default AuctionListPaginationContainer;
