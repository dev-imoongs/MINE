import React from "react";

const AuctionListPriceInfoContainer = () => {
  return (
    <div tabIndex="0" aria-labelledby="product-list-price-title">
      <h4 className="mb-2 text-lg font-semibold lg:mt-[52px] lg:mb-4">
        <span className="relative">
          <span id="product-list-price-title" className="relative text-jnBlack">
            현재 페이지의 상품 가격을 비교해봤어요
          </span>
        </span>
      </h4>
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
            401,913원
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
            3,100,000원
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
            10,000원
          </span>
        </div>
      </div>
    </div>
  );
};
export default AuctionListPriceInfoContainer;
