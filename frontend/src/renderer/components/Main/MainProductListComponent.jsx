import React from "react";
import tempImg from "../../../assets/temp_product.png";

const MainProductListComponent = ({product, recommendTile}) => {
  return (
    <>
      <div className="max-w-[1024px] min-[1600px]:max-w-[1280px] m-auto">
        <div className="heightFull relative mb-10 xl:mb-20">
          <ItemProductTitle recommendTile={recommendTile}/>
          <ProductList product={product}/>
        </div>
      </div>
    </>
  );
};
const ItemProductTitle = ({recommendTile}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
          {recommendTile}
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
    </>
  );
};

const ProductList = ({product}) => {
  return (
    <>
      <div className="carouselWrapper relative jn-carousel recommend">
        <div className="carouselWrapper relative jn-carousel recommend">
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            dir="ltr"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide carouselItem swiper-slide-active">
                <div>
                  <div className="grid gap-x-2 gap-y-2 bg-white sm:gap-x-4 sm:gap-y-4 grid-cols-3 lg:grid-cols-6">
                    {product.map((item, i) => {
                      return (
                        <div className="relative" key={i}>
                          <a
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title={item.title}
                            href=""
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                alt=""
                                referrerPolicy="no-referrer"
                                src={item.img}
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
                                {item.title}
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                                {item.price}원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                  {item.address}
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
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default MainProductListComponent;
