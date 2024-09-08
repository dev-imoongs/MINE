import React from "react";

import styled from "styled-components";

import CountBox from "../../components/Layout/CountBox.jsx"
import TrustRating from "../../components/Layout/TrustRating.jsx"
const MypageMyInfo = ({data}) => {

    console.log("data", data);
  return (
      <div className="block mt-8 lg:mt-[72px] mb-5 lg:mb-0">
          <div className="relative w-full h-full col-span-2 text-black grid grid-cols-1 gap-y-4 gap-x-0 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 lg:min-w-[800px]">
              <MyNameInfo className="space-y-2">
                  <div className="flex items-center">
                      <div className="w-full">
                          <div className="w-full lg:flex lg:items-center">
                              <h2 className="mr-3 text-[22px] lg:text-[28px] leading-[39px] font-semibold cursor-pointer inline-block lg:block">
                                  중고나라#9013165
                              </h2>
                              <button
                                  type="button"
                                  aria-label="공유하기"
                                  className="inline-block text-jnGray-700 lg:order-last"
                              >
                                  <svg
                                      width={20}
                                      height={20}
                                      viewBox="2 2 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className=""
                                  >
                                      <path
                                          d="M19.5556 12.9408V18.9852C19.5556 19.5196 19.33 20.0321 18.9285 20.4099C18.5271 20.7878 17.9826 21 17.4148 21H5.64074C5.07298 21 4.52848 20.7878 4.12701 20.4099C3.72554 20.0321 3.5 19.5196 3.5 18.9852V7.90373C3.5 7.36937 3.72554 6.85689 4.12701 6.47904C4.52848 6.10119 5.07298 5.88892 5.64074 5.88892H12.063"
                                          stroke="#9CA3AF"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                      />
                                      <path
                                          d="M14.8334 4H20C20.2762 4 20.5 4.22386 20.5 4.5V9.66667"
                                          stroke="#9CA3AF"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                      />
                                      <path
                                          d="M11.0554 13.4444L20.0276 4.47217"
                                          stroke="#9CA3AF"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                      />
                                  </svg>
                              </button>
                              <div className="min-[480px]:relative flex space-x-[6px] mt-1 text-[#787E89] text-[12px] mb-[1px] flex-auto" />
                          </div>
                      </div>
                      <div className="flex items-center translate-x-3 lg:hidden">
                          <img
                              alt="profile-image"
                              src=""
                              width={60}
                              height={60}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] hidden"
                              loading="lazy"
                              style={{ color: "transparent" }}
                          />
                          <img
                              alt="profile-image"
                              src="https://img2.joongna.com/common/Profile/Default/profile_f.png"
                              width={60}
                              height={60}
                              decoding="async"
                              data-nimg={1}
                              className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] box-content border-4 border-white -translate-x-3"
                              loading="lazy"
                              style={{ color: "transparent" }}
                          />
                      </div>
                  </div>
                  <div className="flex items-start">
                      <p className="w-10 flex-auto text-[14px] text-jnGray-600 break-all">
                          <span className="w-fit max-w-[calc(100%+1px)] block text-ellipsis overflow-hidden whitespace-nowrap">
                            앱에서 가게 소개 작성하고 신뢰도를 높여 보세요.
                          </span>
                      </p>
                      <button
                          type="button"
                          className="min-w-[50px] underline text-jnGray-600 hidden"
                      >
                          더보기
                      </button>
                  </div>
              </MyNameInfo>
              <TrustRating></TrustRating>
              <CountBox></CountBox>
              <MyProductRegister>
                  <div className="w-10 lg:w-12 h-10 lg:h-12 mr-3 shrink-0 relative">
                      <img
                          alt="카페"
                          src="/_next/static/media/cafe.4ecb0d6e.webp"
                          decoding="async"
                          data-nimg="fill"
                          className=""
                          loading="lazy"
                          style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              inset: 0,
                              color: "transparent"
                          }}
                      />
                      <img
                          alt="채팅"
                          src="/_next/static/media/chat.8164dbdd.webp"
                          decoding="async"
                          data-nimg="fill"
                          className="hidden"
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
                  <div className="flex-auto">
                      <span className="block text-gray-900 font-bold text-[14px] lg:text-lg">
                      카페에 상품 자동 등록하기
                      </span>
                      <span className="text-[#787E89] text-[12px] lg:text-[14px] flex flex-col min-[1600px]:flex-row min-[1600px]:space-x-[6px] break-keep">
                      웹에서 상품 등록시 카페에도 자동 등록이 가능해요
                      </span>
                  </div>
                  <button className="ml-2 px-3 text-[12px] lg:text-[14px] shrink-0 font-medium leading-5 h-8 lg:h-9 min-w-[66px] lg:min-w-[74px] text-white bg-gray-900 rounded-[100px] transition-color ease-out duration-500">
                      등록하기
                  </button>
              </MyProductRegister>
          </div>
      </div>
  );
};

const MyNameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const MyProductRegister = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  background-color: #F7F9FA;
  border-radius: 0.5rem;

  @media (min-width: 1024px) {
    padding: 1.75rem 1.5rem;
  }
`;


export default MypageMyInfo;
