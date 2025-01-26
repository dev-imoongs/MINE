import React from "react";
import { Link } from 'react-router-dom'
import { titleCheck, getTimeAgo, getTimeRemaining } from "../../../services/commonService";

const MainProductListComponent = ({product}) => {
  return (
    <>
      <div className="max-w-[1024px] min-[1600px]:max-w-[1280px] m-auto">
        <div className="heightFull relative mb-10 xl:mb-20">
          <ItemProductTitle type={product.type} />
          <ProductList product={product.data}/>
        </div>
      </div>
    </>
  );
};
const ItemProductTitle = ({type}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
          {titleCheck(type)}
        </h3>
        <Link
          className="flex items-center text-xs lg:text-sm xl:text-base text-jnGray-700 mt-0.5 lg:mt-1"
          to={{
            pathname :'/product/list',
            search : '?type=' + type,
          }}
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
        </Link>
      </div>
    </>
  );
};

const ProductList = ({product}) => {
  const StImg = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: '0px',
    color: 'transparent',
  };
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
                          <Link
                            className="ga4_main_recommend_product group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                            title={item.itemId}
                            to={item.link}
                          >
                            <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                              <img
                                // alt={item.usedItemName ? item.usedItemName : item.auctionItemName}
                                alt={item.itemId}
                                referrerPolicy="no-referrer"
                                src={item.filePath}
                                decoding="async"
                                data-nimg="fill"
                                className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                                loading="lazy"
                                style={StImg}
                              />
                            </div>
                            <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                              <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base text-heading">
                                {item.itemName}
                              </h2>
                              <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                              {item.itemPrice}원
                              </div>
                              <div className="my-1">
                                <span className="text-sm text-gray-400">
                                {item.subInfo}
                                </span>
                                <span className="text-sm text-gray-400 mx-1">
                                  |
                                </span>
                                <span className="text-sm text-gray-400">
                                  {item.endTime}
                                </span>
                              </div>
                            </div>
                          </Link>
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
