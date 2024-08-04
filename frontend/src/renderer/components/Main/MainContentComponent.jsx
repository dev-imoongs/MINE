import React from "react";

const MainContentComponent = () => {
  return (
    <>
      <div
        className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]"
        style={{ height: "auto" }}
      >
        <div className="max-w-[1024px] min-[1600px]:max-w-[1280px] m-auto">
          <div className="heightFull relative mb-10 xl:mb-20">
            <div className="flex items-center justify-between mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
              <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                당신을 위한 추천상품!
              </h3>
              <a
                className="flex items-center text-xs lg:text-sm xl:text-base text-jnGray-700 mt-0.5 lg:mt-1"
                href="/product/list?type=recommend"
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
              </a>
            </div>
            <div className="carouselWrapper relative jn-carousel recommend">
              <div
                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                dir="ltr"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide carouselItem swiper-slide-active">
                    <div>
                      <div className="grid gap-x-2 gap-y-2 bg-white sm:gap-x-4 sm:gap-y-4 grid-cols-3 lg:grid-cols-6">
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="플스5 ps5 디스크에디션 플레이스테이션5 1118a"
                            href="/product/178718546"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="플스5 ps5 디스크에디션 플레이스테이션5 1118a"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/07/31/1722395640371vTU_f9M6U.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                플스5 ps5 디스크에디션 플레이스테이션5 1118a
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                436,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  상갈동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="PS5 / PS4 페르소나5"
                            href="/product/178163544"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="PS5 / PS4 페르소나5"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/07/27/1722037856173wHS_ccimp.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                PS5 / PS4 페르소나5
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                5,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  신월5동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="ps5 리모콘"
                            href="/product/179201503"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="ps5 리모콘"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/03/1722692628755Y1j_EgVE7.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                ps5 리모콘
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                20,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  철산1동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="ps5 evil dead 팝니다"
                            href="/product/179294366"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="ps5 evil dead 팝니다"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/08/04/1069760518/1722758724148_000_LLQc1_main.JPG?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                ps5 evil dead 팝니다
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                15,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400"></span>
                                <span className="text-sm text-gray-400 mx-1 hidden">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center"></div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="ps5용 fifa 24팝니다."
                            href="/product/179297627"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="ps5용 fifa 24팝니다."
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/1722760067349qBa_2EDUf.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                ps5용 fifa 24팝니다.
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                35,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  동문1동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center"></div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="ps4 ps5 엘든링 초회특전 미사용"
                            href="/product/179293877"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="ps4 ps5 엘든링 초회특전 미사용"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/1722758471960TIy_pT9tE.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                ps4 ps5 엘든링 초회특전 미사용
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                40,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  연희동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide carouselItem swiper-slide-next">
                    <div>
                      <div className="grid gap-x-2 gap-y-2 bg-white sm:gap-x-4 sm:gap-y-4 grid-cols-3 lg:grid-cols-6">
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="호그와트 레거시 ps5 (코드 미사용)"
                            href="/product/179295674"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="호그와트 레거시 ps5 (코드 미사용)"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/1722759286815EJT_ECzPK.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                호그와트 레거시 ps5 (코드 미사용)
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                45,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  반포2동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="플스5 슬림 타이틀3개팔아요"
                            href="/product/179297526"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="플스5 슬림 타이틀3개팔아요"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/1722760124803laF_iJZ7d.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                플스5 슬림 타이틀3개팔아요
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                600,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  불현동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="ps5 파이널판타지16 파판16 팝니다"
                            href="/product/179298788"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="ps5 파이널판타지16 파판16 팝니다"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/1722760843698CF9_WGgiI.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                ps5 파이널판타지16 파판16 팝니다
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                35,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  오치1동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="ps4 ps5 엘든링 초회특전 미사용"
                            href="/product/179293877"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="ps4 ps5 엘든링 초회특전 미사용"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/1722758471960TIy_pT9tE.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                ps4 ps5 엘든링 초회특전 미사용
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                40,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  연희동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide carouselItem">
                    <div>
                      <div className="grid gap-x-2 gap-y-2 bg-white sm:gap-x-4 sm:gap-y-4 grid-cols-3 lg:grid-cols-6">
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="아디다스 아기 신발"
                            href="/product/179297399"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="아디다스 아기 신발"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/media/original/2024/08/04/17227602031914cn_yuJfh.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                아디다스 아기 신발
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                15,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  서초4동
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="야마하 오디오"
                            href="/product/177407844"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="야마하 오디오"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/07/21/1067476478/1721550922022_000_uTJSw_main.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                야마하 오디오
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                490,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  비전2동
                                </span>
                                <span className="text-sm text-gray-400 mx-1 hidden">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center"></div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="200. 아디다스 운동화"
                            href="/product/177968397"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="200. 아디다스 운동화"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/07/25/1068156897/1721899745102_000_PWKn7_main.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                200. 아디다스 운동화
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                25,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400"></span>
                                <span className="text-sm text-gray-400 mx-1 hidden">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center"></div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="아디다스 가방 백팩"
                            href="/product/176073257"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="아디다스 가방 백팩"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/07/11/1065854605/1720691447662_000_mTbB0_main.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                아디다스 가방 백팩
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                20,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400"></span>
                                <span className="text-sm text-gray-400 mx-1 hidden">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center"></div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="아디다스 슈퍼스타 240-245"
                            href="/product/177246017"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="아디다스 슈퍼스타 240-245"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/07/08/1065311860/1720417477156_000_y9GvC_main.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                아디다스 슈퍼스타 240-245
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                39,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400"></span>
                                <span className="text-sm text-gray-400 mx-1 hidden">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  width="30"
                                  height="17"
                                  viewBox="0 0 30 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    y="-0.00012207"
                                    width="30"
                                    height="16.2857"
                                    rx="2.25"
                                    fill="#0DCC5A"
                                  ></rect>
                                  <path
                                    d="M11.6626 6.31356V6.28956C11.6626 4.57356 10.4506 3.38556 8.44665 3.38556H5.01465V11.7856H6.86265V9.26556H8.26665C10.1506 9.26556 11.6626 8.25756 11.6626 6.31356ZM9.79065 6.34956C9.79065 7.06956 9.25065 7.62156 8.32665 7.62156H6.86265V5.05356H8.29065C9.21465 5.05356 9.79065 5.49756 9.79065 6.32556V6.34956Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M18.2531 11.7856V8.05356C18.2531 6.31356 17.3771 5.28156 15.3851 5.28156C14.2931 5.28156 13.5971 5.48556 12.8891 5.79756L13.3451 7.18956C13.9331 6.97356 14.4251 6.84156 15.1211 6.84156C16.0331 6.84156 16.5011 7.26156 16.5011 8.01756V8.12556C16.0451 7.96956 15.5771 7.86156 14.9291 7.86156C13.4051 7.86156 12.3371 8.50956 12.3371 9.91356V9.93756C12.3371 11.2096 13.3331 11.9056 14.5451 11.9056C15.4331 11.9056 16.0451 11.5816 16.4891 11.0896V11.7856H18.2531ZM16.5251 9.51756C16.5251 10.1776 15.9491 10.6456 15.0971 10.6456C14.5091 10.6456 14.1011 10.3576 14.1011 9.86556V9.84156C14.1011 9.26556 14.5811 8.95356 15.3611 8.95356C15.8051 8.95356 16.2131 9.04956 16.5251 9.19356V9.51756Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7083 5.35356H23.8123L22.4083 9.73356L20.9443 5.35356H19.0123L21.5323 11.8096C21.3763 12.1336 21.2083 12.2296 20.8963 12.2296C20.6563 12.2296 20.3563 12.1216 20.1163 11.9776L19.5043 13.2976C19.9723 13.5736 20.4643 13.7416 21.1243 13.7416C22.2163 13.7416 22.7443 13.2496 23.2363 11.9416L25.7083 5.35356Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="relative">
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title="스파이더 운동화 나이키 아디다스"
                            href="/product/179294864"
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt="스파이더 운동화 나이키 아디다스"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/08/04/1069761073/1722758923992_006_EfrNp_main.jpg?impolicy=thumb&amp;size=150"
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={{
                                  position: "absolute",
                                  height: "100%",
                                  width: "100%",
                                  inset: "0px",
                                  color: "transparent",
                                }}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                스파이더 운동화 나이키 아디다스
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                20,000원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400"></span>
                                <span className="text-sm text-gray-400 mx-1 hidden">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  2시간 전
                                </span>
                              </div>
                              <div className="flex items-center"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                  <span className="swiper-pagination-bullet"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative aspect-[375/590] min-[761px]:aspect-[2560/680] bg-no-repeat bg-cover bg-center bg-app-down-main-mobile min-[761px]:bg-app-down-main-pc mb-12 md:mb-14 xl:mb-16 max-w-[1024px] min-[1600px]:max-w-[1280px] -mx-4 md:mx-auto">
          <div className="justify-start flex absolute space-x-2 w-[81.5%] aspect-[311/48] top-[27.63%] left-[8.5%] min-[761px]:w-[31.5%] min-[761px]:aspect-[392/52] min-[761px]:top-[58%] min-[761px]:left-[15.625%]">
            <a
              className="w-[49%] min-[761px]:w-[41%] relative"
              href="https://tracking.joongna.com/lowerbanner_aos"
            >
              <img
                alt="구글 플레이스토어"
                src="https://common.joongna.com/image/appdownload/btn_google_web_240219.webp"
                decoding="async"
                data-nimg="fill"
                className="max-[760px]:hidden"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <img
                alt="구글 플레이스토어"
                src="https://common.joongna.com/image/appdownload/btn_google_mobile_240219.webp"
                decoding="async"
                data-nimg="fill"
                className="min-[761px]:hidden"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </a>
            <a
              className="w-[49%] min-[761px]:w-[39%] relative"
              href="https://tracking.joongna.com/lowerbanner_ios"
            >
              <img
                alt="앱 스토어"
                src="https://common.joongna.com/image/appdownload/btn_apple_web_240219.webp"
                decoding="async"
                data-nimg="fill"
                className="max-[760px]:hidden"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <img
                alt="앱 스토어"
                src="https://common.joongna.com/image/appdownload/btn_apple_mobile_240219.webp"
                decoding="async"
                data-nimg="fill"
                className="min-[761px]:hidden"
                loading="lazy"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </a>
            <img
              alt="QR code"
              src="https://common.joongna.com/image/appdownload/app_qr_code_240219.webp"
              width="66"
              height="66"
              decoding="async"
              data-nimg="1"
              className="max-[760px]:hidden basis-[12%]"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default MainContentComponent;
