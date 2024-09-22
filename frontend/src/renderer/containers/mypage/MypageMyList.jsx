import React from "react";

import styled from "styled-components";
const MypageMyList = ({data,isProduct}) => {
  return (
      <MyListCon>
          <MyListTitleWrap>
              <MyListTitle>
                  {isProduct ? "거래상품" : "경매상품"}
              </MyListTitle>
              <MyListSubTitle>
                  <ul className="colors flex flex-nowrap justify-between lg:justify-start -me-3 border-b border-[#DADEE5]">
                      <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-black border-b-[2px] border-black">
                          판매내역
                      </li>
                      <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-[#9CA3AF]">
                          판매완료
                      </li>
                      <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-[#9CA3AF]">
                          구매내역
                      </li>
                      <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-[#9CA3AF]">
                          찜한 상품
                      </li>
                  </ul>
              </MyListSubTitle>
              <MyListFilter>
                  <div className="flex-shrink-0 mb-1 text-sm text-body md:text-base pe-4 md:me-6 lg:block">
                      총 0 개
                  </div>
                  <ul className="flex space-x-3">
                      <li>
                          <button className="text-sm font-medium text-[#141313]">
                              최신순
                          </button>
                      </li>
                      <li>
                          <span className="inline-block mb-0 w-[1px] h-[10px] border border-[#DADEE5]" />
                      </li>
                      <li>
                          <button className="text-sm font-medium text-[#787E89]">
                              낮은가격순
                          </button>
                      </li>
                      <li>
                          <span className="inline-block mb-0 w-[1px] h-[10px] border border-[#DADEE5]" />
                      </li>
                      <li>
                          <button className="text-sm font-medium text-[#787E89]">
                              높은가격순
                          </button>
                      </li>
                  </ul>
              </MyListFilter>
          </MyListTitleWrap>
          {data ? (
              <MyListItemWrap>
                  {data.map((item, index) => (
                  isProduct ? (
                  <div className="my-item-con relative" key={index}>
                      <div className="my-content-con relative">
                          <a
                              className="my-content-link group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                              title={item.USED_ITEM_NAME}
                          >
                              <div
                                  className="my-img-con relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <img
                                      alt= {item.USED_ITEM_NAME}
                                      // referrerPolicy="no-referrer"
                                      src={item.IMG}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                      loading="lazy"
                                      style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          inset: 0,
                                          color: "transparent"
                                      }}
                                  />
                              </div>
                              <div className="my-text-con w-full overflow-hidden p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
                                  <h2 className="line-clamp-2 min-h-[10h] text-sm md:text-base text-heading">
                                      {item.USED_ITEM_NAME}
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                      {item.USED_ITEM_PRICE}원
                                  </div>
                                  <div className="my-1">
                                      <span className="text-sm text-gray-400">{item.USED_ITEM_PLACE}</span>
                                      <span className="text-sm text-gray-400 mx-1">|</span>
                                      <span className="text-sm text-gray-400">{item.USED_ITEM_REGISTER_TIME}</span>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div
                          className="function-con flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">
                          <div>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="none"
                                  className="text-white mr-2 w-8 h-8"
                              >
                                  <path
                                      fill="#fff"
                                      d="M16.003 17.803a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 9.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 26.202a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                                  />
                              </svg>
                          </div>
                      </div>
                  </div>
                  ) : (
                  <div className="my-item-con relative" key={index}>
                      <div className="my-content-con relative">
                          <a
                              className="my-content-link group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                              title={item.AUCTION_ITEM_NAME}
                          >
                              <div
                                  className="my-img-con relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                                  <img
                                      alt={item.AUCTION_ITEM_NAME}
                                      // referrerPolicy="no-referrer"
                                      src={item.IMG}
                                      decoding="async"
                                      data-nimg="fill"
                                      className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                      loading="lazy"
                                      style={{
                                          position: "absolute",
                                          height: "100%",
                                          width: "100%",
                                          inset: 0,
                                          color: "transparent"
                                      }}
                                  />
                              </div>
                              <div
                                  className="my-text-con w-full overflow-hidden p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0">
                                  <h2 className="line-clamp-2 min-h-[10h] text-sm md:text-base text-heading">
                                      {item.AUCTION_ITEM_NAME}
                                      <span className="text-sm text-gray-400 mx-1">|</span>
                                      <span>{item.AUCTION_ITEM_STATUS_NAME}</span>
                                  </h2>
                                  <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                      {item.AUCTION_ITEM_STATUS === 1
                                          ? `${item.AUCTION_ITEM_START_PRICE}원`
                                          : `${item.AUCTION_ITEM_HIGHEST_PRICE}원`}
                                      {item.AUCTION_ITEM_STATUS !== 1 &&
                                          <span className={"m-1"}>시작가: {item.AUCTION_ITEM_START_PRICE}</span>}
                                  </div>
                                  <div className="my-1">
                                      <span className="text-sm text-gray-400">{item.AUCTION_ITEM_STATUS === 1 ? '등록시간' : '종료시간'}</span>
                                      <span className="text-sm text-gray-400 mx-1">|</span>
                                      <span className="text-sm text-gray-400">{item.AUCTION_ITEM_STATUS === 1 ? item.AUCTION_ITEM_CREATE_TIME : item.AUCTION_ITEM_END_TIME}</span>
                                  </div>
                                  {item.AUCTION_ITEM_STATUS === 2 && (
                                      <div className="my-1">
                                          <span className="text-sm text-gray-400">남은시간</span>
                                          <span className="text-sm text-gray-400 mx-1">|</span>
                                          <span
                                              className="text-sm text-gray-400">01D 01H
                                      </span>
                                          <span
                                              className="text-sm text-gray-400">
                                          <span className={"m-1"}>입찰수</span>
                                          <span>{item.AUCTION_JOIN_COUNT}회</span>
                                      </span>
                                      </div>
                                  )}
                              </div>
                          </a>
                      </div>
                      <div
                          className="function-con flex flex-col space-y-2 items-end absolute cursor-pointer right-0 top-3 w-full h-auto">
                          <div>
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={32}
                                  height={32}
                                  fill="none"
                                  className="text-white mr-2 w-8 h-8"
                              >
                                  <path
                                      fill="#fff"
                                      d="M16.003 17.803a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 9.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.003 26.202a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                                  />
                              </svg>
                          </div>
                      </div>
                  </div>
                  )
                  ))}
              </MyListItemWrap>
          ) : (
              <p className="py-12 text-center">
                  선택된 조건에 해당하는 상품이 없습니다.
              </p>
          )}
      </MyListCon>
  );
};

const MyListCon = styled.div`
    padding-left: 0;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        margin-top: 60px;
    }
`

const MyListTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        margin-bottom: 1.25rem;
    }
`

const MyListTitle = styled.div`
    font-size: 1.125rem; /* text-lg */
    font-weight: bold;
    color: #141313;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`

const MyListSubTitle = styled.div`
    margin-top: 0.75rem;
    margin-right: 0;
    margin-bottom: 2.25rem;

    @media (min-width: 1024px) {
        margin-top: 0.5rem;
    }
`

const MyListFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
const MyListItemWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;

    @media (min-width: 640px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1.25rem;
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(5, 1fr);
        gap: 1.75rem;
    }

    gap-y: 0.75rem;

    @media (min-width: 1280px) {
        gap-y: 1.25rem;
    }

    @media (min-width: 1600px) {
        gap-y: 2rem;
    }
`

export default MypageMyList;
