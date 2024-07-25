import React from 'react';

const SwipeImgComponent = ({ StImg }) => {
    const imageData = [
        {
            id: 1,
            alt: '아디다스 아디오스 아디제로--0',
            src: 'https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_000_pdAUa_main.jpg?impolicy=resizeWatermark3&amp;isSecret=false',
        },
        {
            id: 2,
            alt: '아디다스 아디오스 아디제로--1',
            src: 'https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_001_iRiu4.jpg?impolicy=resizeWatermark3&amp;isSecret=false',
        },
        {
            id: 3,
            alt: '아디다스 아디오스 아디제로--2',
            src: 'https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_002_VssNl.jpg?impolicy=resizeWatermark3&amp;isSecret=false',
        },
        {
            id: 4,
            alt: '아디다스 아디오스 아디제로--3',
            src: 'https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_003_y2XLP.jpg?impolicy=resizeWatermark3&amp;isSecret=false',
        },
        {
            id: 5,
            alt: '아디다스 아디오스 아디제로--4',
            src: 'https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322790_004_HPwbV.jpg?impolicy=resizeWatermark3&amp;isSecret=false',
        },
    ];

    const StSwipe = {
        transform: 'translate3d(0px, 0px, 0px)',
    };
    return (
        <div className="carouselWrapper relative product-gallery swiperThumbnail product-gallery-slider dotsCircle">
            <div
                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                dir="ltr"
            >
                <div className="swiper-wrapper" style={StSwipe}>
                    <div className="swiper-slide swiper-slide-active w-604">
                        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 min-w-[200px] min-h-[200px] w-full relative pt-[100%] dim rounded-2xl">
                            <img
                                alt="아디다스 아디오스 아디제로--0"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_000_pdAUa_main.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover lg:w-[520px] lg:h-[520px] w-[335px] h-[335px] rounded-2xl top-1/2 left-1/2"
                                style={StImg}
                            />
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide-next w-604">
                        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 min-w-[200px] min-h-[200px] w-full relative pt-[100%] dim rounded-2xl">
                            <img
                                alt="아디다스 아디오스 아디제로--1"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_001_iRiu4.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover lg:w-[520px] lg:h-[520px] w-[335px] h-[335px] rounded-2xl top-1/2 left-1/2"
                                style={StImg}
                            />
                        </div>
                    </div>
                    <div className="swiper-slide w-604">
                        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 min-w-[200px] min-h-[200px] w-full relative pt-[100%] dim rounded-2xl">
                            <img
                                alt="아디다스 아디오스 아디제로--2"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_002_VssNl.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover lg:w-[520px] lg:h-[520px] w-[335px] h-[335px] rounded-2xl top-1/2 left-1/2"
                                style={StImg}
                            />
                        </div>
                    </div>
                    <div className="swiper-slide w-604">
                        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 min-w-[200px] min-h-[200px] w-full relative pt-[100%] dim rounded-2xl">
                            <img
                                alt="아디다스 아디오스 아디제로--3"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322789_003_y2XLP.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover lg:w-[520px] lg:h-[520px] w-[335px] h-[335px] rounded-2xl top-1/2 left-1/2"
                                style={StImg}
                            />
                        </div>
                    </div>
                    <div className="swiper-slide w-604">
                        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90 min-w-[200px] min-h-[200px] w-full relative pt-[100%] dim rounded-2xl">
                            <img
                                alt="아디다스 아디오스 아디제로--4"
                                referrerPolicy="no-referrer"
                                src="https://img2.joongna.com/cafe-article-data/live/2024/06/22/1062585033/1719019322790_004_HPwbV.jpg?impolicy=resizeWatermark3&amp;isSecret=false"
                                decoding="async"
                                data-nimg="fill"
                                className="object-cover lg:w-[520px] lg:h-[520px] w-[335px] h-[335px] rounded-2xl top-1/2 left-1/2"
                                style={StImg}
                            />
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
            <button
                className="w-7 h-7 text-black flex items-center justify-center absolute z-10 transition duration-250 transform -translate-y-1/2 top-1/2 focus:outline-none rounded-full text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl max-[1023px]:hidden left-4 bg-transparent shadow-transparent hover:bg-transparent hover:text-black !text-white !text-6xl swiper-button-disabled"
                id="product-gallery-slider-prev"
                aria-label="prev-button"
                disabled=""
            >
                <svg
                    width="26"
                    height="28"
                    viewBox="0 0 26 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[0deg]"
                >
                    <g filter="url(#filter0_d_19461_8348)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z"
                            fill="white"
                        ></path>
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_19461_8348"
                            x="0.505707"
                            y="0.75"
                            width="19.7443"
                            height="26.5"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                            ></feColorMatrix>
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_19461_8348"
                            ></feBlend>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_19461_8348"
                                result="shape"
                            ></feBlend>
                        </filter>
                    </defs>
                </svg>
            </button>
            <button
                className="w-7 h-7 text-black flex items-center justify-center absolute z-10 transition duration-250 transform -translate-y-1/2 top-1/2 focus:outline-none rounded-full text-sm md:text-base lg:w-9 lg:h-9 lg:text-xl xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 3xl:text-2xl max-[1023px]:hidden right-4 bg-transparent shadow-transparent hover:bg-transparent hover:text-black !text-white !text-6xl"
                id="product-gallery-slider-next"
                aria-label="next-button"
            >
                <svg
                    width="26"
                    height="28"
                    viewBox="0 0 26 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[180deg]"
                >
                    <g filter="url(#filter0_d_19461_8348)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8122 5.34218C16.4517 6.0669 16.3825 7.17278 15.6578 7.81224L8.645 14L15.6578 20.1878C16.3825 20.8273 16.4517 21.9331 15.8122 22.6579C15.1727 23.3826 14.0669 23.4517 13.3421 22.8122L5.26706 15.6872C4.25192 14.7914 4.25192 13.2086 5.26706 12.3129L13.3421 5.1878C14.0669 4.54835 15.1727 4.61747 15.8122 5.34218Z"
                            fill="white"
                        ></path>
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_19461_8348"
                            x="0.505707"
                            y="0.75"
                            width="19.7443"
                            height="26.5"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            ></feColorMatrix>
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
                            ></feColorMatrix>
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_19461_8348"
                            ></feBlend>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_19461_8348"
                                result="shape"
                            ></feBlend>
                        </filter>
                    </defs>
                </svg>
            </button>
        </div>
    );
};

export default SwipeImgComponent;
