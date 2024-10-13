import React, { useCallback } from "react";

const usePagenation = (setCurrentPage, totalPage) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const prev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const next = () => setCurrentPage((prev) => Math.min(prev + 1, totalPage));

  const paginate = (pageNum) => setCurrentPage(pageNum);

  // 검색 혹은 초기화, 리스트 개수 변경 시 1번 페이지로 set
  const initPageNum = useCallback(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  return { pageNumbers, prev, next, paginate, initPageNum };
};

export default usePagenation;
