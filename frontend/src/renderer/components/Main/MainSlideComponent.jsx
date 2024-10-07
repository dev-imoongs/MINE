import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import banner2 from "../../../assets/banner2.png";
const MainSlideComponent = () => {
  return (
    <>
      <div className="relative mb-8 mx-auto max-w-[1024px] overflow-hidden box-content md:mb-20 md:px-8 md:max-h-[542px] lg:mt-10 lg:max-h-[444px] 2xl:px-16 min-[1600px]:max-w-[1280px]">
        <div className="carouselWrapper relative mx-0 jn-carousel main-banner-carousel pagination-center">
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
            dir="ltr"
          >
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay 설정 추가
              modules={[Navigation, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-duplicate carouselItem"
                  data-swiper-slide-index="0"
                >
                  <div>
                      <img
                        alt="240729_glo_MCS (1번 / 3500)"
                        src={banner2}
                        decoding="async"
                        data-nimg="fill"
                      />
                      <div className="absolute z-10 top-0 text-white w-full h-full flex flex-col p-6 justify-end drop-shadow-[1px_1px_1px_rgba(0,0,0,0.12)]">
                        <h2 className="text-[32px] leading-[40px] font-bold">
                          하이퍼 프로 혜택가
                        </h2>
                        <h2 className="text-[32px] leading-[40px] font-bold">
                          39,000원
                        </h2>
                        <h3 className="text-[18px] leading-[24px] mt-4">
                          최대 3만원 할인 받기 &gt;
                        </h3>
                      </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-duplicate carouselItem"
                  data-swiper-slide-index="0"
                >
                  <div>
                      <img
                        alt="240729_glo_MCS (1번 / 3500)"
                        src={banner2}
                        decoding="async"
                        data-nimg="fill"
                      />
                      <div className="absolute z-10 top-0 text-white w-full h-full flex flex-col p-6 justify-end drop-shadow-[1px_1px_1px_rgba(0,0,0,0.12)]">
                        <h2 className="text-[32px] leading-[40px] font-bold">
                          하이퍼 프로 혜택가
                        </h2>
                        <h2 className="text-[32px] leading-[40px] font-bold">
                          39,000원
                        </h2>
                        <h3 className="text-[18px] leading-[24px] mt-4">
                          최대 3만원 할인 받기 &gt;
                        </h3>
                      </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide-duplicate carouselItem"
                  data-swiper-slide-index="0"
                >
                  <div>
                      <img
                        alt="240729_glo_MCS (1번 / 3500)"
                        src={banner2}
                        decoding="async"
                        data-nimg="fill"
                      />
                      <div className="absolute z-10 top-0 text-white w-full h-full flex flex-col p-6 justify-end drop-shadow-[1px_1px_1px_rgba(0,0,0,0.12)]">
                        <h2 className="text-[32px] leading-[40px] font-bold">
                          하이퍼 프로 혜택가
                        </h2>
                        <h2 className="text-[32px] leading-[40px] font-bold">
                          39,000원
                        </h2>
                        <h3 className="text-[18px] leading-[24px] mt-4">
                          최대 3만원 할인 받기 &gt;
                        </h3>
                      </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlideComponent;
