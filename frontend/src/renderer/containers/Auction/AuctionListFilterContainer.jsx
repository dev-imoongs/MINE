import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";
import { useInput } from "../../../hooks/useInput";

const AuctionListFilterContainer = ({ itemsCount }) => {
  // 검색해서 경매 들어왔는지 여부
  const [isSearch, setIsSearch] = useState(true);

  const [isOpen, toggleOpen] = useToggle(false);
  const [inputMinPrice, handleMinPriceChange, clearInputMinPrice] =
    useInput("");
  const [inputMaxPrice, handleMaxPriceChange, clearInputMaxPrice] =
    useInput("");
  // 결과 내 검색 상태제어
  const [inputSearchQuery, handleSearchChange, clearInputSearchQuery] =
    useInput("");

  // 필터 상태 초기값
  const [filters, setFilters] = useState({
    category: "전체",
    priceRange: { minPrice: "", maxPrice: "" },
    searchQuery: "",
  });

  // 전체적으로 게시글을 다시 가져오기 위해 백에 재요청을 해야하기 때문에
  // 이후 함수 내부 수정이 필요합니다.

  const setCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      category,
    }));
  };

  // 필터 상태 가격 범위 설정
  const setPriceRange = (inputMinPrice, inputMaxPrice) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { minPrice: inputMinPrice, maxPrice: inputMaxPrice },
    }));
  };

  // 필터 상태 결과 내 검색
  const setSearchQuery = (inputSearchQuery) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: inputSearchQuery,
    }));
  };

  // 선택한 필터 제거
  const removeFilter = (filterKey) => {
    const initialState = {
      category: "전체",
      priceRange: { minPrice: "", maxPrice: "" },
      searchQuery: "",
    };

    setFilters((prev) => ({
      ...prev,
      ...(filterKey === "initialize"
        ? initialState
        : { [filterKey]: initialState[filterKey] }),
    }));

    // 입력 필드 초기화
    if (filterKey === "priceRange" || filterKey === "initialize") {
      clearInputMinPrice();
      clearInputMaxPrice();
    }

    if (filterKey === "searchQuery" || filterKey === "initialize") {
      clearInputSearchQuery();
    }
  };

  // 반복을 위한, 선택한 필터 현재 상태를 받고있는 배열
  const filterItems = [
    { key: "category", value: filters.category },
    {
      key: "priceRange",
      value:
        filters.priceRange.minPrice || filters.priceRange.maxPrice
          ? `${filters.priceRange.minPrice} ~ ${filters.priceRange.maxPrice}`
          : "",
    },
    { key: "searchQuery", value: filters.searchQuery },
  ];

  //카테고리 배열
  const categories = [
    { id: "1", name: "디지털 기기" },
    { id: "2", name: "가구/인테리어" },
    { id: "3", name: "도서" },
    { id: "4", name: "뷰티/미용" },
    { id: "5", name: "취미/게임/음반" },
    { id: "6", name: "생활 가전" },
    { id: "7", name: "생활주방" },
    { id: "8", name: "의류" },
    { id: "9", name: "스포츠/레저" },
    { id: "10", name: "상품권/모바일티켓" },
    { id: "11", name: "식물" },
    { id: "12", name: "식품" },
  ];

  return (
    <div className="relative">
      <h1 className="a11yHidden">
        수입명품 중고거래 | 중고나라 카페에서 운영하는 공식 사이트
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center gap-[6px] items-start mb-[10px]">
        <h1 className="a11yHidden">
          아이폰12미니 중고거래 | 중고나라 카페에서 운영하는 공식 사이트
        </h1>
        <h2 className="text-2xl lg:text-[28px] font-normal w-[calc(100%-30px)] lg:w-auto text-jnBlack">
          {isSearch && (
            <strong className="font-semibold">'아이폰12미니' </strong>
          )}
          검색 결과
        </h2>
        {isSearch && <p className="text-jnGray-700">총 {itemsCount}개</p>}
      </div>
      <table className="filterTable hidden lg:table w-full">
        <tbody>
          <tr>
            <td className="flex items-center justify-between">
              <p>카테고리</p>
              <button onClick={toggleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    stroke="#9CA3AF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    d={isOpen ? "M2 8h12" : "M8 2v12M2 8h12"}
                  ></path>
                </svg>
              </button>
            </td>
            <td>
              <div className="flex items-center w-full">
                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                  {filters.category ? (
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                      <Link
                        className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                        to="/search?category=1"
                      >
                        {filters.category}
                      </Link>
                    </li>
                  ) : (
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                      <Link
                        className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                        to="/search"
                      >
                        전체
                      </Link>
                    </li>
                  )}
                </ol>
              </div>
            </td>
          </tr>
          {isOpen && (
            <tr>
              <td className="no-border"></td>
              <td className="!py-2">
                <ul className="grid grid-cols-6 text-sm">
                  {categories.map((categoryList) => {
                    return (
                      <li
                        className="flex justify-start items-center !mt-0 p-2 pl-0 w"
                        key={categoryList.id}
                      >
                        <Link
                          to="#"
                          onClick={() => {
                            setCategory(categoryList.name);
                            toggleOpen();
                          }}
                        >
                          {categoryList.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          )}

          <tr>
            <td>가격</td>
            <td className="price-filter">
              <input
                type="text"
                className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                placeholder="최소 가격"
                data-idx="0"
                value={inputMinPrice}
                onChange={handleMinPriceChange}
              />
              <span className="mx-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="4"
                  fill="none"
                  className="inline"
                >
                  <path
                    fill="#5A616B"
                    d="M7.895.628 9.297.62q0 .651-.182 1.205-.182.545-.515.947-.326.401-.788.628-.454.22-1 .22-.636 0-1.129-.25-.484-.258-1.045-.773a3.5 3.5 0 0 0-.652-.507 1.25 1.25 0 0 0-.651-.182.94.94 0 0 0-.584.182 1.14 1.14 0 0 0-.378.5 2 2 0 0 0-.137.757H.796q0-.659.183-1.197.18-.545.507-.931.333-.395.788-.606a2.3 2.3 0 0 1 1-.213q.636 0 1.144.266.516.265 1.046.757.363.349.659.523.295.174.628.174a1 1 0 0 0 .599-.19q.257-.196.401-.537a1.95 1.95 0 0 0 .144-.765"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                placeholder="최대 가격"
                data-idx="1"
                value={inputMaxPrice}
                onChange={handleMaxPriceChange}
              />
              <button
                data-routerlink="true"
                className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
                onClick={() => {
                  setPriceRange(inputMinPrice, inputMaxPrice);
                }}
              >
                적용
              </button>
            </td>
          </tr>

          <tr>
            <td>결과 내 검색</td>
            <td className="price-filter">
              <input
                type="text"
                className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                placeholder="검색 키워드"
                data-idx="0"
                value={inputSearchQuery}
                onChange={handleSearchChange}
              />
              <button
                data-routerlink="true"
                className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
                onClick={() => {
                  setSearchQuery(inputSearchQuery);
                }}
              >
                적용
              </button>
            </td>
          </tr>
          <tr>
            <td>선택한 필터</td>
            <td>
              <div className="flex items-center justify-between w-full h-full border-none">
                <div className="flex flex-wrap">
                  {filterItems.map(
                    (filter) =>
                      filter.value && (
                        <div
                          key={filter.key}
                          className="flex items-center flex-shrink-0 py-2 pl-3 mb-2 mr-2 text-sm font-medium border rounded lg:m-0 lg:border-none lg:p-0 lg:text-base border-jnGray-300 text-jnBlack"
                        >
                          <span className="truncate">{filter.value}</span>
                          {filter.value && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="none"
                              className="flex-shrink-0 w-4 text-sm cursor-pointer ms-1 me-3 text-body fill-jnGray-600"
                              onClick={() => removeFilter(filter.key)}
                            >
                              <g
                                stroke="#787E89"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                clipPath="url(#close-icon_svg__a)"
                              >
                                <path d="M13 3 3 13M3 3l10 10"></path>
                              </g>
                              <defs>
                                <clipPath id="close-icon_svg__a">
                                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                        </div>
                      )
                  )}
                </div>
                <button
                  data-routerlink="true"
                  className="text-sm underline text-jnGray-700 whitespace-nowrap"
                  onClick={() => removeFilter("initialize")}
                >
                  초기화
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuctionListFilterContainer;
