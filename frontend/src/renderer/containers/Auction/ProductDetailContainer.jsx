import React from 'react';

const ProductDetailContainer = () => {
    return (
        <div className="block lg:flex lg:min-h-[591px] space-y-12 lg:space-y-0 mb-12">
            <ProductDescription />
            <StoreInfo />
        </div>
    );
};

const ProductDescription = () => {
    return (
        <div name="product-description" className="w-full lg:mr-[72px] lg:w-[680px] flex flex-col flex-auto false">
            <h3 className="md:text-[22px] lg:pb-5 w-full border-b border-gray-300 basis-[48px] font-bold pb-3 text-jnblack text-lg">
                상품 정보
            </h3>
            <div className="flex-1 basis-[465px] lg:basis-[475px] flex flex-col overflow-visible">
                <div className="flex flex-col h-auto">
                    <article className="flex flex-col flex-1">
                        <p className="flex-1 py-5 text-base font-normal break-words break-all whitespace-pre-line text-jnGray-900">
                            새제품 아이폰 이어폰 택배착불입니다 4,500 반값 편의점 택배 가능합니다
                        </p>
                        <div className="pb-5">
                            <p className="text-xs font-normal text-jnGray-700 tracking-[0.2px] mb-0">거래희망지역</p>
                            <div>
                                <div className="basis-[100%]">
                                    <div className="carouselWrapper relative">
                                        <div
                                            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                                            dir="ltr"
                                        >
                                            <div
                                                className="swiper-wrapper"
                                                style={{
                                                    transitionDuration: '0ms',
                                                    transform: 'translate3d(0px, 0px, 0px)',
                                                }}
                                            >
                                                <div className="swiper-slide swiper-slider-search-price swiper-slide-active margin8">
                                                    <button className="inline-flex gap-1 text-xs text-jnblack items-center px-3 py-[7px] mr-2 rounded bg-jnGray-200 mt-2">
                                                        <svg
                                                            width="10"
                                                            height="10"
                                                            viewBox="0 0 10 10"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className=""
                                                        >
                                                            <g id="ico_location">
                                                                <g id="Group 7574">
                                                                    <path
                                                                        id="Subtract"
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M0.500572 4.33686C0.461335 2.03812 2.44609 0.0664601 4.87009 0.00172047C7.41486 -0.0659179 9.5 1.86951 9.5 4.2668C9.5 5.53695 8.91145 6.67425 7.98201 7.45595L5.51062 9.79962C5.22883 10.0668 4.77124 10.0668 4.48945 9.79962L2.01755 7.45595C1.10543 6.68874 0.521464 5.57899 0.500572 4.33686ZM6.29884 3.7499C5.88477 3.03268 4.96724 2.7871 4.25008 3.2012C3.53291 3.61529 3.28683 4.53237 3.70141 5.2501C4.11548 5.96732 5.03249 6.2129 5.74966 5.7988C6.46734 5.38471 6.7129 4.46763 6.29884 3.7499Z"
                                                                        fill="#787E89"
                                                                    ></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        관저1동
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="swiper-button-prev swiper-button-disabled swiper-button-lock"></div>
                                            <div className="swiper-button-next swiper-button-disabled swiper-button-lock"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-1 detail-regular-12 text-jnGray-700">AI 추천 태그</div>
                        <ul className="flex gap-2 mb-8 body-regular-14 text-jnSuccessBlue">
                            <li>
                                <div>
                                    <a
                                        className="ga4_product_detail_hashtag"
                                        href="/search/%EC%95%84%EC%9D%B4%ED%8F%B0"
                                    >
                                        #아이폰
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a
                                        className="ga4_product_detail_hashtag"
                                        href="/search/%EC%9D%B4%EC%96%B4%ED%8F%B0"
                                    >
                                        #이어폰
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a
                                        className="ga4_product_detail_hashtag"
                                        href="/search/%EC%9D%B4%EC%96%B4%ED%8F%B0%20%EC%83%88%EC%83%81%ED%92%88"
                                    >
                                        #새상품
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
            <button className="w-full py-4 border border-gray-400 rounded hidden">더 보기</button>
        </div>
    );
};

const StoreInfo = () => {
    const StProfileImg = {
        color: 'transparent',
    };

    const StWidth = {
        width: '41.9%',
    };

    const StSwiperWrap = {
        transform: 'translate3d(0px, 0px, 0px)',
    };

    const StSwiper = {
        width: '132px',
        marginRight: '12px',
    };

    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    return (
        <div className="basis-[420px]">
            <div name="product-store" className="w-full lg:w-[420px]">
                <a
                    className="flex items-center justify-between w-full pb-3 border-b border-gray-300 lg:pb-5"
                    href="/store/9088766"
                >
                    <h3 className="md:text-[22px] font-bold text-jnBlack text-lg">가게 정보</h3>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                </a>
                <div className="flex flex-col">
                    <div>
                        <div className="flex">
                            <a
                                className="flex items-center justify-between w-full pt-5 lg:pt-[28px] lg:pb-5"
                                href="/store/9088766"
                            >
                                <p className="text-[22px] font-semibold text-jnGray-900">중고나라#90889...</p>
                                <div className="flex items-center translate-x-4">
                                    <img
                                        alt="프로파일"
                                        src="https://img2.joongna.com/common/Profile/Default/profile_f.png"
                                        width="60"
                                        height="60"
                                        decoding="async"
                                        data-nimg="1"
                                        className="rounded-full max-w-none h-[60px] box-content border-4 border-white -translate-x-4"
                                        loading="lazy"
                                        style={StProfileImg}
                                    />
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="flex justify-between mt-2 text-[#0CB650]">
                                <p className="text-base font-medium">
                                    신뢰지수<span className="ml-1 text-lg font-semibold">419</span>
                                </p>
                                <span className="text-sm text-jnGray-500">1,000</span>
                            </div>
                            <div className="w-full h-2 bg-[#F1F4F6] rounded overflow-hidden">
                                <div className="h-full" style={StWidth}>
                                    <div className="rounded bg-gradient-to-r from-[#0DCC5A] from-0% to-[#019FB1] to-107.5% w-full h-full animate-width"></div>
                                </div>
                            </div>
                        </div>
                        <ul className="box-border flex text-center border border-gray-300 rounded items-center py-[18px] mt-5">
                            <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                <span className="text-xs font-normal text-jnGray-600 break-keep">안전거래</span>
                                <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                                    0
                                </button>
                            </li>
                            <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                <span className="text-xs font-normal text-jnGray-600 break-keep">거래후기</span>
                                <button className="block text-sm font-semibold text-jnblack mt-1 underline underline-offset-[3px]">
                                    2
                                </button>
                            </li>
                            <li className="flex flex-col flex-1 basis-[33%] px-3 sm:px-4 relative after:absolute [&:not(:first-child)]:after:content-[''] after:bg-gray-300 after:h-[20px] [&:not(:first-child)]:after:w-[1px] after:left-0 justify-center items-center">
                                <span className="text-xs font-normal text-jnGray-600 break-keep">단골</span>
                                <button disabled="" className="block text-sm font-semibold text-jnblack mt-1">
                                    0
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="2xl:pt-2 mt-2 lg:pt-0">
                        <div className="carouselWrapper relative">
                            <div
                                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                                dir="ltr"
                            >
                                <div className="swiper-wrapper" style={StSwiperWrap}>
                                    <div className="swiper-slide swiper-slide-active" style={StSwiper}>
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                title="다이얼 잠금 가죽 서류가방 (새제품)"
                                                href="/product/171411448"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3">
                                                    <img
                                                        alt="다이얼 잠금 가죽 서류가방 (새제품)"
                                                        referrerPolicy="no-referrer"
                                                        src="https://img2.joongna.com/media/original/2024/06/09/1717875091603vnP_IIrhQ.jpg"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                        loading="lazy"
                                                        style={StImg}
                                                    />
                                                </div>
                                                <div className="w-full overflow-hidden md:px-2.5 [&>h2]:text-sm [&>h2]:font-normal [&>h2]:text-jnGray-900 text-start p-0 xl:px-0 [&:first-of-type>div]:text-base">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                                        다이얼 잠금 가죽 서류가방 (새제품)
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        80,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400"></span>
                                                        <span className="text-sm text-gray-400 mx-1 hidden">|</span>
                                                        <span className="text-sm text-gray-400"></span>
                                                    </div>
                                                    <div className="flex items-center"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" style={StSwiper}>
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                title="코바트블루정장구두 힐구두 킬구두 (새상품)"
                                                href="/product/171410787"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3">
                                                    <img
                                                        alt="코바트블루정장구두 힐구두 킬구두 (새상품)"
                                                        referrerPolicy="no-referrer"
                                                        src="https://img2.joongna.com/media/original/2024/06/09/171787370138655D_NOLvE.jpg"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                        loading="lazy"
                                                        style={StImg}
                                                    />
                                                </div>
                                                <div className="w-full overflow-hidden md:px-2.5 [&>h2]:text-sm [&>h2]:font-normal [&>h2]:text-jnGray-900 text-start p-0 xl:px-0 [&:first-of-type>div]:text-base">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                                        코바트블루정장구두 힐구두 킬구두 (새상품)
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        35,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400"></span>
                                                        <span className="text-sm text-gray-400 mx-1 hidden">|</span>
                                                        <span className="text-sm text-gray-400"></span>
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
                                    <div className="swiper-slide" style={StSwiper}>
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                title="얇은 시원한소재 집업자켓 골프자켓 여름자켓"
                                                href="/product/171410227"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3">
                                                    <img
                                                        alt="얇은 시원한소재 집업자켓 골프자켓 여름자켓"
                                                        referrerPolicy="no-referrer"
                                                        src="https://img2.joongna.com/media/original/2024/06/09/1717872461737g1L_oD82C.jpg"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                        loading="lazy"
                                                        style={StImg}
                                                    />
                                                </div>
                                                <div className="w-full overflow-hidden md:px-2.5 [&>h2]:text-sm [&>h2]:font-normal [&>h2]:text-jnGray-900 text-start p-0 xl:px-0 [&:first-of-type>div]:text-base">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                                        얇은 시원한소재 집업자켓 골프자켓 여름자켓
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        30,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400"></span>
                                                        <span className="text-sm text-gray-400 mx-1 hidden">|</span>
                                                        <span className="text-sm text-gray-400"></span>
                                                    </div>
                                                    <div className="flex items-center"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" style={StSwiper}>
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                title="잠금 장치 손가방 남성핸드백 (새상품)"
                                                href="/product/171410542"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3">
                                                    <img
                                                        alt="잠금 장치 손가방 남성핸드백 (새상품)"
                                                        referrerPolicy="no-referrer"
                                                        src="https://img2.joongna.com/media/original/2024/06/09/1717873118253Xd1_TxvTh.jpg"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                        loading="lazy"
                                                        style={StImg}
                                                    />
                                                </div>
                                                <div className="w-full overflow-hidden md:px-2.5 [&>h2]:text-sm [&>h2]:font-normal [&>h2]:text-jnGray-900 text-start p-0 xl:px-0 [&:first-of-type>div]:text-base">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                                        잠금 장치 손가방 남성핸드백 (새상품)
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        40,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400"></span>
                                                        <span className="text-sm text-gray-400 mx-1 hidden">|</span>
                                                        <span className="text-sm text-gray-400"></span>
                                                    </div>
                                                    <div className="flex items-center"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" style={StSwiper}>
                                        <div className="relative">
                                            <a
                                                className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                                                title="잠금 장치 손가방 남성핸드백 (새상품)"
                                                href="/product/171410068"
                                            >
                                                <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3">
                                                    <img
                                                        alt="잠금 장치 손가방 남성핸드백 (새상품)"
                                                        referrerPolicy="no-referrer"
                                                        src="https://img2.joongna.com/media/original/2024/06/09/1717871634734N1g_VRF4z.jpg"
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                                        loading="lazy"
                                                        style={StImg}
                                                    />
                                                </div>
                                                <div className="w-full overflow-hidden md:px-2.5 [&>h2]:text-sm [&>h2]:font-normal [&>h2]:text-jnGray-900 text-start p-0 xl:px-0 [&:first-of-type>div]:text-base">
                                                    <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                                        잠금 장치 손가방 남성핸드백 (새상품)
                                                    </h2>
                                                    <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                                        50,000원
                                                    </div>
                                                    <div className="my-1">
                                                        <span className="text-sm text-gray-400"></span>
                                                        <span className="text-sm text-gray-400 mx-1 hidden">|</span>
                                                        <span className="text-sm text-gray-400"></span>
                                                    </div>
                                                    <div className="flex items-center"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-prev swiper-button-disabled"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailContainer;
