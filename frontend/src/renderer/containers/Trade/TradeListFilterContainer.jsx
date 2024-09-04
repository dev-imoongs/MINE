import React from 'react';

const TradeListFilterContainer = () => {
    return (
        <div className="relative">
            <h1 className="a11yHidden">수입명품 중고거래 | 중고나라 카페에서 운영하는 공식 사이트</h1>
            <h2 className="text-[28px] font-normal mb-[10px]"><strong>"사당동"</strong> 검색 결과</h2>
            <button className="absolute right-1 top-2 lg:hidden">
                <svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line
                        x1="0.7"
                        y1="2.85664"
                        x2="19.3"
                        y2="2.85664"
                        stroke="#141313"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    ></line>
                    <line
                        x1="0.7"
                        y1="9.99922"
                        x2="19.3"
                        y2="9.99922"
                        stroke="#141313"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    ></line>
                    <line
                        x1="0.7"
                        y1="17.1438"
                        x2="19.3"
                        y2="17.1437"
                        stroke="#141313"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    ></line>
                    <circle
                        cx="13.2552"
                        cy="2.83333"
                        r="1.83333"
                        fill="white"
                        stroke="#141313"
                        strokeWidth="1.4"
                    ></circle>
                    <circle
                        cx="13.2552"
                        cy="17.2335"
                        r="1.83333"
                        fill="white"
                        stroke="#141313"
                        strokeWidth="1.4"
                    ></circle>
                    <circle
                        cx="6.11458"
                        cy="10.0326"
                        r="1.83333"
                        fill="white"
                        stroke="#141313"
                        strokeWidth="1.4"
                    ></circle>
                </svg>
            </button>
            <table className="hidden lg:table filterTable w-full">
                <tbody>
                    <tr>
                        <td className="flex items-center justify-between">
                            <p>카테고리</p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                    <path
                                        stroke="#9CA3AF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.2"
                                        d="M8 2v12M2 8h12"
                                    ></path>
                                </svg>
                            </button>
                        </td>
                        <td>
                            <div className="flex items-center w-full chawkbazarBreadcrumb">
                                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <a
                                            className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                                            href="/search"
                                        >
                                            전체
                                        </a>
                                    </li>
                                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">&gt;</li>
                                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                        <a
                                            className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                                            href="/search?category=1"
                                        >
                                            수입명품
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </td>
                    </tr>
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

export default TradeListFilterContainer;
