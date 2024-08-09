import React from "react";
import HeaderContainer from "../containers/Common/HeaderContainer.jsx";
const MyPage = () => {
  return (
    <div className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px] justify-between lg:gap-10 flex">
        <div className="hidden lg:block [&_h3]:text-xl [&_ul]:mb-6 [&_li]:w-fit [&_li]:cursor-pointer [&_li]:mb-[10px] [&_li]:text-jnGray-800 [&_li]:text-sm flex-auto flex-shrink flex-grow-0 basis-[180px] mt-[72px]">
            <h2 className="mb-6 text-2xl font-semibold text-jnBlack">마이 페이지</h2>
            <h3 className="pt-0 mb-3 text-lg font-semibold border-none text-jnBlack">
                거래 정보
            </h3>
            <ul>
                <li>판매내역</li>
                <li>구매내역</li>
                <li>택배</li>
                <li>찜한 상품</li>
            </ul>
            <h3 className="mb-3 text-lg font-semibold border-t border-[#DADEE5] pt-6 text-jnBlack">
                내 정보
            </h3>
            <ul>
                <li>계좌 관리</li>
                <li>배송지 관리</li>
                <li>거래 후기</li>
                <li>탈퇴하기</li>
            </ul>
        </div>
        <div className="mx-auto box-content max-w-[1024px] min-[1600px]:max-w-[1280px] basis-[calc(100%-180px)] flex-grow px-0 md:px-0 2xl:px-0">
            <div className="block mt-8 lg:mt-[72px] mb-5 lg:mb-0">
                <div className="relative w-full h-full col-span-2 text-black grid grid-cols-1 gap-y-4 gap-x-0 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 lg:min-w-[800px]">
                    <div className="flex flex-col space-y-2 justify-start">
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
                    </div>
                    <div className="flex space-x-7 lg:pl-1 items-start">
                        <div className="flex-1 self-center">
                            <div className="flex justify-between items-center mb-2 text-[#0CB650] font-medium">
      <span>
        <span className="font-medium text-base">신뢰지수</span>
        <span className="font-bold inline-block ml-1 text-lg">146</span>
      </span>
                                <span className="text-[#9CA3AF] text-[14px] font-normal">
        1,000
      </span>
                            </div>
                            <div className="w-full h-2 bg-[#F1F4F6] rounded overflow-hidden">
                                <div className="h-full" style={{ width: "14.6%" }}>
                                    <div className="rounded bg-gradient-to-r from-[#0DCC5A] from-0% to-[#019FB1] to-107.5% w-full h-full animate-width" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center translate-x-3 hidden lg:flex">
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
                    <div className="relative flex justify-evenly w-full border border-gray-300 rounded-lg pl-[8px] pr-[15px] py-4 lg:py-6">
                        <dl className="flex justify-between items-center text-center text-jnGray-600 w-full m-0 [&_div]:w-full [&_div]:relative [&_div]:before:right-0 [&_div]:before:top-1/2 [&_div]:before:-translate-y-1/2 [&_div]:before:absolute [&_div]:before:w-[1px] [&_div]:before:h-[40px] [&_div]:before:bg-gray-300 [&_div_dt]:text-[12px] [&_div_dd]:text-[16px] lg:[&_div_dt]:text-[14px] lg:[&_div_dd]:text-[22px]">
                            <div>
                                <dt className="justify-center mt-0">안전거래</dt>
                                <dd className="font-semibold text-jnblack">0</dd>
                            </div>
                            <div className="cursor-pointer">
                                <dt className="justify-center mt-0">거래후기</dt>
                                <dd className="font-semibold underline text-jnblack">0</dd>
                            </div>
                            <div className="">
                                <dt className="justify-center mt-0">단골</dt>
                                <dd className="font-semibold text-jnblack">0</dd>
                            </div>
                            <div className="before:content-none block">
                                <dt className="ps-3 justify-center items-center gap-1 mt-0">
                                    <span>에코마일</span>
                                    <span className="-translate-y-[1px]">
          <div
              className="inline-block border-none"
              data-headlessui-state=""
          >
            <button
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:r0:"
            >
              <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  color="#C2C6CE"
                  className="inline-block text-center"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(194, 198, 206)" }}
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                </g>
              </svg>
            </button>
          </div>
        </span>
                                </dt>
                                <dd className="font-semibold text-jnblack">0 M</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="flex items-center py-4 px-5 lg:py-7 lg:px-6 bg-[#F7F9FA] rounded-lg">
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
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="w-100vw h-[6px] bg-[#F1F4F6] -mx-4 md:-mx-8 lg:hidden" />
                <div className="w-[100vw] -mx-4 md:-mx-8 lg:hidden">
                    <ul className="grid grid-cols-2 bg-[#F1F4F6] gap-[1px]">
                        <li className="bg-white text-center cursor-pointer flex items-center space-x-2 py-4 px-5">
                            <img
                                alt="판매내역"
                                src="https://img2.joongna.com/mystore/mypage/ios/20230411_Sale.png"
                                width={52}
                                height={52}
                                decoding="async"
                                data-nimg={1}
                                className="bg-white w-8 h-8"
                                loading="lazy"
                                style={{ color: "transparent" }}
                            />
                            <div className="md:text-lg">판매내역</div>
                        </li>
                        <li className="bg-white text-center cursor-pointer flex items-center space-x-2 py-4 px-5">
                            <img
                                alt="구매내역"
                                src="https://img2.joongna.com/mystore/mypage/ios/20230411_Buy.png"
                                width={52}
                                height={52}
                                decoding="async"
                                data-nimg={1}
                                className="bg-white w-8 h-8"
                                loading="lazy"
                                style={{ color: "transparent" }}
                            />
                            <div className="md:text-lg">구매내역</div>
                        </li>
                        <li className="bg-white text-center cursor-pointer flex items-center space-x-2 py-4 px-5">
                            <img
                                alt="택배"
                                src="https://img2.joongna.com/mystore/mypage/ios/20230411_Delivery.png"
                                width={52}
                                height={52}
                                decoding="async"
                                data-nimg={1}
                                className="bg-white w-8 h-8"
                                loading="lazy"
                                style={{ color: "transparent" }}
                            />
                            <div className="md:text-lg">택배</div>
                        </li>
                        <li className="bg-white text-center cursor-pointer flex items-center space-x-2 py-4 px-5">
                            <img
                                alt="찜한 상품"
                                src="https://img2.joongna.com/mystore/mypage/ios/20230411_Heart.png"
                                width={52}
                                height={52}
                                decoding="async"
                                data-nimg={1}
                                className="bg-white w-8 h-8"
                                loading="lazy"
                                style={{ color: "transparent" }}
                            />
                            <div className="md:text-lg">찜한 상품</div>
                        </li>
                    </ul>
                </div>
                <div className="w-100vw h-[6px] bg-[#F1F4F6] -mx-4 md:-mx-8 lg:hidden" />
            </div>
            <div className="px-0 mt-8 lg:mt-[60px]">
                <div className="flex flex-col w-full mb-4 lg:mb-5">
                    <h3 className="text-lg font-bold md:text-[22px] text-jnBlack">
                        내 상품
                    </h3>
                    <div className="mt-3 mr-0 mb-9 lg:mt-2">
                        <ul className="colors flex flex-nowrap justify-between lg:justify-start -me-3 border-b border-[#DADEE5]">
                            <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-black border-b-[2px] border-black">
                                전체
                            </li>
                            <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-[#9CA3AF]">
                                판매중
                            </li>
                            <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-[#9CA3AF]">
                                예약중
                            </li>
                            <li className="shrink grow lg:grow-0 cursor-pointer py-4 basis-[84px] lg:basis-[160px] flex justify-center items-center font-medium transition duration-200 ease-in-out text-[#9CA3AF]">
                                판매완료
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
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
                    </div>
                </div>
                <p className="py-12 text-center">
                    선택된 조건에 해당하는 상품이 없습니다.
                </p>
            </div>
        </div>
    </div>
  );
};

export default MyPage;
