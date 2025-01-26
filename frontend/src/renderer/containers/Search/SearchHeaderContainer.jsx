import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const SearchHeaderContainer = ({link, type, title, itemInfo}) => {
    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[6px] items-start mb-[10px] justify-between">
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-normal text-heading">
                    <strong className="font-semibold">{!title ? '' : title}   </strong> {type} 검색 결과
                    <span className="text-jnGray-700" style={{ fontSize: '20px', paddingLeft: '20px' }}> 총 {itemInfo.total_count || 0}개</span>
                </h3>
                <Link
                    className="flex items-center text-xs lg:text-sm xl:text-base text-jnGray-700 mt-0.5 lg:mt-1"
                    to={link}
                >
                    바로가기
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="10"
                        fill="none"
                        className="mx-1 rotate-180"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 1 1 5l5 4"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div tabIndex="0" aria-labelledby="product-list-price-title" style={{ margin: '20px 0px 35px 0px' }}>
                <div className="flex flex-col overflow-hidden lg:rounded-lg lg:flex-row lg:bg-jnGray-100">
                    <div
                        className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300 before:content-none"
                        aria-labelledby="product-item-price-title-1"
                        tabIndex="0"
                    >
                        <span
                            id="product-item-price-title-1"
                            className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
                        >
                            평균 가격
                        </span>
                        <span
                            tabIndex="0"
                            className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
                        >
                            {itemInfo.avg_price ? itemInfo.avg_price.toLocaleString()  : 0}원
                        </span>
                    </div>
                    <div
                        className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300"
                        aria-labelledby="product-item-price-title-2"
                        tabIndex="0"
                    >
                        <span
                            id="product-item-price-title-2"
                            className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
                        >
                            가장 높은 가격
                        </span>
                        <span
                            tabIndex="0"
                            className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
                        >
                            {itemInfo.max_price ? itemInfo.max_price.toLocaleString() : 0}원
                        </span>
                    </div>
                    <div
                        className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300"
                        aria-labelledby="product-item-price-title-3"
                        tabIndex="0"
                    >
                        <span
                            id="product-item-price-title-3"
                            className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
                        >
                            가장 낮은 가격
                        </span>
                        <span
                            tabIndex="0"
                            className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
                        >
                            {itemInfo.min_price ? itemInfo.min_price.toLocaleString():0}원
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(SearchHeaderContainer);
