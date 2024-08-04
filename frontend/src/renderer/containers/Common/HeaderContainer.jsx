import React from 'react';
import logo from "../../../assets/mine.png"

const HeaderContainer = () => {
    return (
        <header
          id="siteHeader"
          className="headerThree relative z-20 w-full h-16 sm:h-20 lg:h-36 xl:h-40 max-[480px]:mt-[73px] lg:mt-[60px]"
          style={{ marginTop: "0px" }}
        >
          <div
            id="header_items_wrapper"
            className="px-4 md:px-8 lg:px-0 h-16 sm:h-20 lg:h-36 xl:h-40 w-full transition duration-200 ease-in-out border-b border-jnGray-300 fixed z-20 text-gray-700 bg-white innerSticky body-font"
          >
            <div className="h-full lg:h-20 xl:h-24 px-0 lg:px-8 2xl:px-16 max-w-[1024px] min-[1600px]:max-w-[1280px] flex items-center mx-auto box-content justify-between relative before:absolute before:w-screen before:bg-[#F1F1F1] before:bottom-0">
              <div className="flex flex-1 ml-3 lg:ml-0 lg:max-w-[200px]">
                <a
                  style={{ width: "100px", height: "50px" }}
                  className="ga4_main_top_logo max-[1023px]:!w-[97px] max-[1023px]:!h-[16px] lg:w-full lg:flex-1 inline-flex focus:outline-none relative"
                  href="/"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <img
                      alt="mine"
                      src={logo}
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0",
                        height: "0",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </a>
              </div>
              <div className="relative hidden ms-7 me-7 xl:ms-9 lg:block flex-1">
                <form
                  role="search"
                  noValidate
                  className="w-full relative flex items-center h-10 overflow-hidden rounded-md bg-jnGray-200 px-3 py-[10px] lg:px-5 space-x-2"
                >
                  <label className="flex items-center py-0.5 flex-none w-4 h-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] text-[#9CA3AF]"
                    >
                      <path
                        d="M10.0278 19.0556C14.3233 19.0556 17.8056 15.5733 17.8056 11.2778C17.8056 6.98223 14.3233 3.5 10.0278 3.5C5.73223 3.5 2.25 6.98223 2.25 11.2778C2.25 15.5733 5.73223 19.0556 10.0278 19.0556Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent"
                      ></path>
                      <path
                        d="M21 21.8999L15.5 16.8999"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </label>
                  <input
                    id="search-box"
                    aria-label="search-box"
                    autoComplete="off"
                    placeholder="어떤 상품을 찾으시나요? 카페상품, 앱상품 모두 검색"
                    className="flex-auto text-sm text-heading bg-transparent placeholder-[#9CA3AF] overflow-hidden text-ellipsis whitespace-nowrap outline-none ga4_main_top_search"
                    name="search"
                  />
                </form>
                <div className="bg-white flex flex-col h-full max-h-64vh lg:max-h-[550px] w-full z-10 mt-0 rounded absolute h-auto shadow-header hidden mt-4">
                  <div className="flex w-full h-[52px] mt-2 font-medium">
                    <button className="flex items-center justify-center w-1/2 mx-5 py-2 text-jnGray-500 border-jnGray-500 hover:bg-[#EBEBEB] !text-jnGray-900 !border-jnGray-900 !border-b-[3px]">
                      상품
                    </button>
                    <button className="flex items-center justify-center w-1/2 mx-5 py-2 text-jnGray-500 border-jnGray-500 hover:bg-[#EBEBEB]">
                      가게
                    </button>
                  </div>
                  <div className="os-host os-host-foreign os-theme-thin os-host-flexbox os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
                    <div className="os-resize-observer-host observed">
                      <div
                        className="os-resize-observer"
                        style={{ left: "0px", right: "auto" }}
                      ></div>
                    </div>
                    <div
                      className="os-size-auto-observer observed"
                      style={{ height: "calc(100% + 1px)", float: "left" }}
                    >
                      <div className="os-resize-observer"></div>
                    </div>
                    <div
                      className="os-content-glue"
                      style={{ margin: "0px" }}
                    ></div>
                    <div className="os-padding">
                      <div className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid">
                        <div
                          className="os-content"
                          style={{
                            padding: "0px",
                            height: "100%",
                            width: "100%",
                          }}
                        >
                          <div className="h-full bg-white border rounded-md rounded-t-none border-gray-150">
                            <div className="flex justify-center items-center h-[528px]">
                              <svg
                                width="48px"
                                height="48px"
                                viewBox="0 0 49 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_1457_156476)">
                                  <path
                                    d="M3.05225 47.2382C1.9325 47.5436 0.905039 46.5161 1.21042 45.3964L5.82304 28.4835L19.9652 42.6256L3.05225 47.2382Z"
                                    fill="#DDE1E4"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.500005 24C0.500008 10.7452 11.2452 -1.37836e-06 24.5 -8.87953e-07C37.7548 -3.9755e-07 48.5 10.7452 48.5 24C48.5 37.2548 37.7548 48 24.5 48C11.2452 48 0.500002 37.2548 0.500005 24ZM17.5 23.9998C17.5 22.3438 16.156 20.9998 14.5 20.9998C12.844 20.9998 11.5 22.3438 11.5 23.9998C11.5 25.6558 12.844 26.9998 14.5 26.9998C16.156 26.9998 17.5 25.6558 17.5 23.9998ZM24.5 20.9998C26.156 20.9998 27.5 22.3438 27.5 23.9998C27.5 25.6558 26.156 26.9998 24.5 26.9998C22.844 26.9998 21.5 25.6558 21.5 23.9998C21.5 22.3438 22.844 20.9998 24.5 20.9998ZM37.5 23.9998C37.5 22.3438 36.156 20.9998 34.5 20.9998C32.844 20.9998 31.5 22.3438 31.5 23.9998C31.5 25.6558 32.844 26.9998 34.5 26.9998C36.156 26.9998 37.5 25.6558 37.5 23.9998Z"
                                    fill="#DDE1E4"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_1457_156476">
                                    <rect
                                      width="48"
                                      height="48"
                                      fill="white"
                                      transform="translate(48.5 48) rotate(-180)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                      <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div
                          className="os-scrollbar-handle"
                          style={{ transform: "translate(0px, 0px)" }}
                        ></div>
                      </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
                      <div className="os-scrollbar-track os-scrollbar-track-off">
                        <div
                          className="os-scrollbar-handle"
                          style={{ transform: "translate(0px, 0px)" }}
                        ></div>
                      </div>
                    </div>
                    <div className="os-scrollbar-corner"></div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex relative w-[300px]">
                <ul className="flex w-full text-sm font-medium list-none text-jnGray-900 break-keep">
                  <li className="flex items-center justify-center pr-3">
                    <button className="ga4_main_top_menu flex items-center justify-center">
                      <div className="relative cursor-pointer" id="채팅하기">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          id="채팅하기"
                          size="24"
                        >
                          <path
                            stroke="#141313"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M20.797 12.2c0 1.639-.438 3.175-1.204 4.5l.46 3.035a.9.9 0 0 1-1.23.968l-2.526-.708a9 9 0 1 1 4.5-7.796"
                            clipRule="evenodd"
                          ></path>
                          <path
                            fill="#141313"
                            stroke="#141313"
                            strokeWidth="0.15"
                            d="M8.864 12.2a1.075 1.075 0 1 0-2.15 0 1.075 1.075 0 0 0 2.15 0Zm4 0a1.075 1.075 0 1 0-2.15 0 1.075 1.075 0 0 0 2.15 0Zm4 0a1.075 1.075 0 1 0-2.15 0 1.075 1.075 0 0 0 2.15 0Z"
                          ></path>
                        </svg>
                      </div>
                      <p id="채팅하기" className="ml-1">
                        채팅하기
                      </p>
                    </button>
                  </li>
                  <li className='after:contents-[""] after:absolute after:w-[1px] after:h-4 after:bg-jnGray-300 after:right-0 before:contents-[""] before:absolute before:w-[1px] before:h-4 before:bg-jnGray-300 before:left-0 ga4_main_top_menu relative flex items-center justify-center px-3'>
                    <a
                      className="flex items-center justify-center [&amp;>p]:ml-1"
                      href=""
                    >
                      <svg
                        id="판매하기"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6859 20.6926H4.92323C3.88605 20.6926 3.08773 19.8241 3.20716 18.8409L4.49579 8.32142C4.5775 7.63983 5.18096 7.12109 5.89756 7.12109H15.8168C16.5334 7.12109 17.1369 7.6338 17.2186 8.32142L17.91 14.0701"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M8.35938 9.35156V9.5868C8.35938 10.7751 9.47828 11.7462 10.8486 11.7462C12.219 11.7462 13.3379 10.7751 13.3379 9.5868V9.35156"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.35938 7.72983V6.25112C7.35938 4.34555 8.90414 2.80078 10.8097 2.80078V2.80078C12.7153 2.80078 14.26 4.34555 14.26 6.25112V7.72983"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          d="M17.1179 22.4245C19.3694 22.4245 21.1968 20.5969 21.1968 18.347C21.1968 16.0972 19.3694 14.2695 17.1179 14.2695C14.8665 14.2695 13.0391 16.0972 13.0391 18.347C13.0391 20.5969 14.8665 22.4245 17.1179 22.4245Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17.1406 19.9298V16.7461"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M15.5312 18.3439H18.7149"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p id="판매하기">판매하기</p>
                    </a>
                  </li>
                  <li className="relative flex flex-1 pl-3">
                    <button className="flex items-center justify-center [&amp;>p]:ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        size="24"
                      >
                        <path
                          stroke="#141313"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M16.775 7.716a3.619 3.619 0 1 1-7.238.005 3.619 3.619 0 0 1 7.238-.005M13.15 13.371c-4.026 0-7.298 3.184-7.4 7.145h14.8c-.102-3.961-3.374-7.145-7.4-7.145"
                        ></path>
                      </svg>
                      <p>마이</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:px-8 2xl:px-16 lg:flex lg:h-16 items-center min-[1600px]:max-w-[1280px] max-w-[1024px] hidden headerBottom mx-auto box-content">
              <div className="relative flex-shrink-0 categoryMenu hidden lg:block">
                <div className="flex items-center justify-center gap-2 px-3.5 xl:px-4 text-sm relative before:absolute before:-bottom-2.5 before:h-2.5 before:w-full before:z-10 font-semibold text-white transition-colors rounded-md cursor-pointer h-11 bg-heading hover:bg-black">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  카테고리
                </div>
                <div className="absolute invisible bg-white opacity-0 subMenu shadow-header start-0">
                  <ul className="py-5 text-sm text-body max-h-[480px] overflow-y-scroll">
                    <li className="">
                      <a
                        className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                        href=""
                      >
                        수입명품
                      </a>
                      <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                        <div className="flex-shrink-0">
                          <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                            <div className="grid grid-cols-5 h-full">
                              <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                <li className="mb-1.5">
                                  <a
                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href=""
                                  >
                                    여성신발
                                  </a>
                                </li>
                                <li className="">
                                  <a
                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href=""
                                  >
                                    구두/로퍼
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <a
                        className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                        href=""
                      >
                        패션의류
                      </a>
                      <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                        <div className="flex-shrink-0">
                          <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                            <div className="grid grid-cols-5 h-full">
                              <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                <li className="mb-1.5">
                                  <a
                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href=""
                                  >
                                    여성의류
                                  </a>
                                </li>
                                <li className="">
                                  <a
                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href=""
                                  >
                                    티셔츠/캐쥬얼의류
                                  </a>
                                </li>
                                <li className="">
                                  <a
                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href=""
                                  >
                                    니트/스웨터/가디건
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="">
                      <a
                        className="flex items-center py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-heading hover:bg-gray-300"
                        href=""
                      >
                        패션잡화
                      </a>
                      <div className="absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] start-full">
                        <div className="flex-shrink-0">
                          <div className="scrollbar-show absolute h-[480px] overflow-y-scroll bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
                            <div className="grid grid-cols-5 h-full">
                              <ul className="pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7">
                                <li className="mb-1.5">
                                  <a
                                    className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href=""
                                  >
                                    운동화
                                  </a>
                                </li>
                                <li className="">
                                  <a
                                    className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                                    href="/search?category=1073"
                                  >
                                    런닝화/워킹화
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <nav className="headerMenu flex w-full relative hidden lg:flex ps-3.5 xl:ps-5 headerMenuStyle">
                <div className="menuItem group cursor-pointer">
                  <a
                    target="_self"
                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
                    href=""
                  >
                    동 네 거 래
                  </a>
                </div>
                <div className="menuItem group cursor-pointer">
                  <a
                    target="_blank"
                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
                    href=""
                  >
                    동 네 경 매
                  </a>
                </div>
                <div className="menuItem group cursor-pointer">
                  <a
                    target="_self"
                    className="ga4_main_gnb relative inline-flex items-center px-3 py-3 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
                    href=""
                  >
                    상 품 등 록
                  </a>
                </div>
              </nav>
            </div>
            <div
              id="progress_bar"
              className="w-full h-[2px] absolute bottom-0 left-0"
            ></div>
          </div>
        </header>
    );
};

export default HeaderContainer;
