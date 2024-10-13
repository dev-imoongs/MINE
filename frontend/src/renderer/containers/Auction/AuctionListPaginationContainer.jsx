import React, { useEffect, useState, useCallback } from "react";
import Pagination from "../../components/Common/Pagination";

const itemsPerPage = 5; // 페이지당 아이템 수

const usePagenation = (setCurrentPage, totalPage) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const prev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const next = () => setCurrentPage((prev) => Math.min(prev + 1, totalPage));
  const paginate = (pageNum) => setCurrentPage(pageNum);

  const initPageNum = useCallback(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  return { pageNumbers, prev, next, paginate, initPageNum };
};

const AuctionListPaginationContainer = () => {
  const [totalCount, setTotalCount] = useState(0); // 총 아이템 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  // 임시로 아이템 만들었음
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  useEffect(() => {
    setTotalCount(items.length);
  }, [items]);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalCount / itemsPerPage); // 전체 페이지 수
  const { pageNumbers, prev, next, paginate } = usePagenation(
    setCurrentPage,
    totalPages
  );

  return (
    <div
      style={{ textAlign: "center" }}
      className="bottom-0 py-3 m-auto text-center bg-white lg:mb-2"
    >
      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <Pagination
          totalPage={totalPages}
          currentPage={currentPage}
          prev={prev}
          next={next}
          pageNumbers={pageNumbers}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default AuctionListPaginationContainer;
