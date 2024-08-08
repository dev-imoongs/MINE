import React from 'react';

const ProductInfoContainer = ({ StImg }) => {
    return (
        <div>
            <div className="flex items-center w-full chawkbazarBreadcrumb pt-5 lg:py-2 pb-[10px]">
                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                        <a className="text-jnGray-500" href="/">
                            홈
                        </a>
                    </li>
                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-[0deg]"
                        >
                            <path
                                d="M5.6665 14.1667L10.9796 8.85363C11.1749 8.65837 11.1749 8.34179 10.9796 8.14653L5.6665 2.83341"
                                stroke="#9CA3AF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </li>
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                        <a className="capitalize text-jnGray-500" href="/search?category=2">
                            패션의류
                        </a>
                    </li>
                    <li className="pl-0 mx-2 mt-0 text-sm leading-5 text-jnGray-500 lg:mt-0">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rotate-[0deg]"
                        >
                            <path
                                d="M5.6665 14.1667L10.9796 8.85363C11.1749 8.65837 11.1749 8.34179 10.9796 8.14653L5.6665 2.83341"
                                stroke="#9CA3AF"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </li>
                    <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                        <a className="capitalize text-jnblack" href="/search?category=112">
                            남성의류
                        </a>
                    </li>
                </ol>
            </div>
            <div>
                <div className="flex items-center justify-between mb-1">
                    <h1 className="text-lg font-semibold leading-6 md:text-2xl md:leading-[28.64px] text-jnblack mr-2">
                        아디다스 아디오스 아디제로
                    </h1>
                    <button type="button" aria-label="공유하기">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                        >
                            <path
                                d="M19.5556 12.9408V18.9852C19.5556 19.5196 19.33 20.0321 18.9285 20.4099C18.5271 20.7878 17.9826 21 17.4148 21H5.64074C5.07298 21 4.52848 20.7878 4.12701 20.4099C3.72554 20.0321 3.5 19.5196 3.5 18.9852V7.90373C3.5 7.36937 3.72554 6.85689 4.12701 6.47904C4.52848 6.10119 5.07298 5.88892 5.64074 5.88892H12.063"
                                stroke="#141313"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M14.8334 4H20C20.2762 4 20.5 4.22386 20.5 4.5V9.66667"
                                stroke="#141313"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M11.0554 13.4444L20.0276 4.47217"
                                stroke="#141313"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center mb-2 lg:mb-3">
                    <div className="font-bold md:text-[32px] mr-2 text-[26px] leading-9 md:leading-[38.19px] text-heading">
                        80,000원
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4 text-xs font-normal">
                    <span className="text-jnGray-500 leading-[15px]">12분 전 · 조회 19 · 채팅 0 · 찜 0</span>
                    <a
                        className="ga4_product_detail_price"
                        href="/search-price/%EC%95%84%EB%94%94%EB%8B%A4%EC%8A%A4%20%EC%95%84%EB%94%94%EC%98%A4%EC%8A%A4%20%EC%95%84%EB%94%94%EC%A0%9C%EB%A1%9C?seq=173331721&amp;actionDetailType=MARKET_PRICE_PRODUCT_DETAIL"
                    >
                        <span className="leading-4 underline underline-offset-4 text-jnGray-700">시세조회</span>
                    </a>
                </div>
            </div>
            <div className="fixed left-0 z-20 w-full bg-white px-4 py-3 shadow-[0_35px_60px_-20px_rgba(0,0,0,0.3)] justify-between lg:hidden hidden top-[var(--header-height)] sm:top-[var(--sm-header-height)] lg:top-[var(--lg-header-height)] xl:top-[var(--xl-header-height)] top-[136px]">
                <div className="flex flex-col mr-2 w-[calc(100%-56px)]">
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap font-bold text-heading w-full">
                        아디다스 아디오스 아디제로
                    </span>
                    <span>
                        80,000<span className="text-base">원</span>
                    </span>
                </div>
                <div className="relative inline-block w-12 h-12 overflow-hidden rounded">
                    <img
                        alt="아디다스 아디오스 아디제로--0"
                        referrerPolicy="no-referrer"
                        src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_000_pdAUa_main.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover"
                        loading="lazy"
                        style={StImg}
                    />
                </div>
            </div>
            <ul className="box-border flex text-center border border-gray-300 rounded items-center py-6 mb-6">
                <li className="flex flex-col flex-1 basis-[25%] px-3 sm:px-4 relative after:absolute [&amp;:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&amp;:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                    <span className="text-xs font-normal text-jnGray-600 break-keep">입찰건수</span>
                    <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                        0회
                    </button>
                </li>
                <li className="flex flex-col flex-1 basis-[25%] px-3 sm:px-4 relative after:absolute [&amp;:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&amp;:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                    <span className="text-xs font-normal text-jnGray-600 break-keep">남은시간</span>
                    <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                        6일 7시간 20분 42초
                    </button>
                </li>
                <li className="flex flex-col flex-1 basis-[25%] px-3 sm:px-4 relative after:absolute [&amp;:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&amp;:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                    <span className="text-xs font-normal text-jnGray-600 break-keep">종료시간</span>
                    <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                        2024.08.10 04:43:58
                    </button>
                </li>
            </ul>
            <ul>
                <li className="">
                    <div className="sm:mb-5 sm:flex block mb-4 items-start justify-start">
                        <div className="flex items-center mr-5 min-w-[95px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <rect x="4.5" y="4.5" width="3" height="3" fill="#141313"></rect>
                            </svg>
                            <span className="text-xs text-jnGray-700 ml-[6px]">제품상태</span>
                        </div>
                        <div className="">
                            <ul className="pt-1 pl-[18px] sm:items-start sm:flex-col sm:flex sm:p-0">
                                <li>
                                    <p className="text-xs font-medium text-jnblack tracking-[0.2px]">새상품</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="sm:mb-5 sm:flex block mb-4 items-start justify-start">
                        <div className="flex items-center mr-5 min-w-[95px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <rect x="4.5" y="4.5" width="3" height="3" fill="#141313"></rect>
                            </svg>
                            <span className="text-xs text-jnGray-700 ml-[6px]">거래방식</span>
                        </div>
                        <div className="">
                            <ul className="pt-1 pl-[18px] sm:items-start sm:flex-col sm:flex sm:p-0">
                                <li>
                                    <a
                                        target="_blank"
                                        className="block text-xs font-medium text-jnblack tracking-[0.2px]"
                                        href="https://web.joongna.com/event/detail/1261"
                                    >
                                        안전거래
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="sm:mb-5 sm:flex block mb-4 items-start justify-start">
                        <div className="flex items-center mr-5 min-w-[95px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <rect x="4.5" y="4.5" width="3" height="3" fill="#141313"></rect>
                            </svg>
                            <span className="text-xs text-jnGray-700 ml-[6px]">배송비</span>
                        </div>
                        <div className="">
                            <ul className="pt-1 pl-[18px] sm:items-start sm:flex-col sm:flex sm:p-0">
                                <li>
                                    <a
                                        target="_blank"
                                        className="block text-xs font-medium text-jnblack tracking-[0.2px]"
                                        href="https://web.joongna.com/event/detail/1261"
                                    >
                                        별도
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="flex items-center space-s-4 pt-4 max-[479px]:fixed max-[479px]:bottom-0 max-[479px]:left-0 max-[479px]:z-20 max-[479px]:w-full max-[479px]:px-4 max-[479px]:pb-4 max-[479px]:bg-white">
                <div className="w-8 h-8">
                    <label htmlFor=":r0:" className="relative">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="pointer-events-none w-8 h-8"
                        >
                            <path
                                d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                                strokeWidth="1.5"
                                stroke="#9CA3AF"
                                fill="transparent"
                            ></path>
                        </svg>
                    </label>
                    <input id=":r0:" type="checkbox" className="a11yHidden" />
                </div>
                <button
                    data-variant="slim"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 py-2 transform-none normal-case hover:shadow-cart ga4_product_detail_bottom w-full bg-white hover:bg-white/90 text-jnblack hover:text-jnblack border-[1px] border-jnblack"
                >
                    채팅하기
                </button>
                <button
                    data-variant="slim"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 text-white py-2 transform-none normal-case hover:text-white hover:shadow-cart w-full ga4_product_detail_bottom bg-jnblack hover:bg-jnblack/90"
                >
                    입찰하기
                </button>
            </div>
        </div>
    );
};

export default ProductInfoContainer;
