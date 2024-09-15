import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../../../hooks/useToggle';

const AuctionListFilterContainer = () => {
    const [isOpen, toggleOpen] = useToggle();
    const [isSearch, setIsSearch] = useState(true);

    const [filters, setFilters] = useState({
        category: '',
        priceRange: { minPrice: '', maxPrice: '' },
        searchQuery: '',
    });

    // 카테고리는 재검색을 해야하기 때문에 스테이트로 하기보다는
    // Link에 쿼리스트링으로 넘기는게 좋기때문에 이후 수정해야합니다.
    const setCategory = (category) => {
        setFilters((prev) => ({
            ...prev,
            category,
        }));
    };

    const setPriceRange = (minPrice, maxPrice) => {
        setFilters((prev) => ({
            ...prev,
            priceRange: { minPrice, maxPrice },
        }));
    };

    const setSearchQuery = (query) => {
        setFilters((prev) => ({
            ...prev,
            searchQuery: query,
        }));
    };

    return (
        <div className="relative">
            <h1 className="a11yHidden">수입명품 중고거래 | 중고나라 카페에서 운영하는 공식 사이트</h1>
            <div className="flex flex-col lg:flex-row lg:items-center gap-[6px] items-start mb-[10px]">
                <h1 className="a11yHidden">아이폰12미니 중고거래 | 중고나라 카페에서 운영하는 공식 사이트</h1>
                <h2 className="text-2xl lg:text-[28px] font-normal w-[calc(100%-30px)] lg:w-auto text-jnBlack">
                    {isSearch && <strong className="font-semibold">'아이폰12미니' </strong>}
                    검색 결과
                </h2>
                {isSearch && <p className="text-jnGray-700">총 157,523개</p>}
            </div>
            <table className="filterTable hidden lg:table w-full">
                <tbody>
                    <tr>
                        <td className="flex items-center justify-between">
                            <p>카테고리</p>
                            <button onClick={toggleOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                    <path
                                        stroke="#9CA3AF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.2"
                                        d={isOpen ? 'M8 8h12' : 'M8 2v12M2 8h12'}
                                    ></path>
                                </svg>
                            </button>
                        </td>
                        <td>
                            <div className="flex items-center w-full">
                                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <Link
                                            className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                                            to="/search"
                                        >
                                            전체
                                        </Link>
                                    </li>
                                    {filters.category && (
                                        <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                                            &gt;
                                        </li>
                                    )}
                                    {filters.category && (
                                        <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                            <Link
                                                className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                                                to="/search?category=1"
                                            >
                                                수입명품
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
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">디지털 기기</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">가구/인테리어</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">도서</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">뷰티/미용</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">취미/게임/음반</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">생활 가전</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">생활주방</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">의류</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">스포츠/레저</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">상품권/모바일티켓</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">식물</Link>
                                    </li>
                                    <li className="flex justify-start items-center !mt-0 p-2 pl-0 w">
                                        <Link to="#">식품</Link>
                                    </li>
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
                            />
                            <button
                                data-routerlink="true"
                                className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
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
                            />
                            <button
                                data-routerlink="true"
                                className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
                            >
                                적용
                            </button>
                        </td>
                    </tr>

                    {/*
                    // 
                    <tr>
                        <td>옵션</td>
                        <td>
                            <ul className="flex undefined">
                                <li className="mr-5">
                                    <label
                                        data-routerlink="true"
                                        htmlFor="productFilterType"
                                        className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="2 2 20 20"
                                            fill="#0DCC5A"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-1 pointer-events-none"
                                            data-routerlink="true"
                                        >
                                            <path
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke="#0DCC5A"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M16 9L10.5 14.5L8 12"
                                                stroke="#fff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        <span data-routerlink="true" className="text-base ps-1">
                                            카페상품 포함
                                        </span>
                                    </label>
                                    <input id="productFilterType" className="hidden" type="checkbox" value="ALL" />
                                </li>
                                <li className="mr-5">
                                    <label
                                        data-routerlink="true"
                                        htmlFor="saleYn"
                                        className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="2 2 20 20"
                                            fill="#C2C6CE"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-1 pointer-events-none"
                                            data-routerlink="true"
                                        >
                                            <path
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke="#C2C6CE"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M16 9L10.5 14.5L8 12"
                                                stroke="#FFFFFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        <span data-routerlink="true" className="text-base ps-1">
                                            판매완료 상품 포함
                                        </span>
                                    </label>
                                    <input id="saleYn" className="hidden" type="checkbox" value="SALE_N" />
                                </li>
                            </ul>
                        </td>
                    </tr>
                    
                    */}
                    <tr>
                        <td>선택한 필터</td>
                        <td>
                            <div className="flex items-center justify-between w-full h-full border-none">
                                <div className="flex flex-wrap">
                                    <div className="flex items-center flex-shrink-0 py-2 pl-3 mb-2 mr-2 text-sm font-medium border rounded lg:m-0 lg:border-none lg:p-0 lg:text-base border-jnGray-300 text-jnBlack">
                                        <span className="truncate">수입명품</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            data-routerlink="true"
                                            className="flex-shrink-0 w-4 text-sm cursor-pointer ms-1 me-3 text-body fill-jnGray-600"
                                            size="16"
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
                                    </div>
                                    <div className="flex items-center flex-shrink-0 py-2 pl-3 mb-2 mr-2 text-sm font-medium border rounded lg:m-0 lg:border-none lg:p-0 lg:text-base border-jnGray-300 text-jnBlack">
                                        <span className="truncate">카페상품 포함</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            data-routerlink="true"
                                            className="flex-shrink-0 w-4 text-sm cursor-pointer ms-1 me-3 text-body fill-jnGray-600"
                                            size="16"
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
                                    </div>
                                </div>
                                <button
                                    data-routerlink="true"
                                    className="text-sm underline text-jnGray-700 whitespace-nowrap"
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
