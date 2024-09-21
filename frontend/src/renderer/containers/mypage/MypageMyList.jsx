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
          <MyListItemWrap>
              {data ? (
                  data.map((item, index) => (
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
                                      <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                          {item.USED_ITEM_NAME}
                                      </h2>
                                      <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                          {item.USED_ITEM_PRICE}
                                      </div>
                                      <div className="my-1">
                                          <span className="text-sm text-gray-400">{item.USED_ITEM_PLACE}</span>
                                          <span className="text-sm text-gray-400 mx-1">|</span>
                                          <span className="text-sm text-gray-400">{item.USED_ITEM_REGISTER_TIME}</span>
                                      </div>
                                      <div className="flex items-center">
                                          <svg
                                              width={30}
                                              height={17}
                                              viewBox="0 0 30 17"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                          >
                                              <rect
                                                  y="-0.00012207"
                                                  width={30}
                                                  height="16.2857"
                                                  rx="2.25"
                                                  fill="#0DCC5A"
                                              />
                                              <path
                                                  d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                                  fill="white"
                                              />
                                          </svg>
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
                  ))
              ) : (
                  <p className="py-12 text-center">
                    선택된 조건에 해당하는 상품이 없습니다.
                  </p>
              )
              }
          </MyListItemWrap>
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
