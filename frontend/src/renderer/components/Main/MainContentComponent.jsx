import React from "react";
import MainProductListComponent from "./MainProductListComponent"
import tempImg from "../../../assets/temp_product.png";

const mockData = [
  {
    id: 1,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 2,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 3,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 4,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 5,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 6,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 7,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 8,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 9,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 10,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 11,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
  {
    id: 12,
    title: "product 임시 데이터 입니다.",
    price: 10000,
    img: tempImg,
    address: "사당동",
  },
];
const recommendTile = ["당신을 위한 추천 경매!", "방금 등록된 상품! ", "실시간 인기상품!"]
const MainContentComponent = () => {
  return (
    <>
      <div
        className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]"
        style={{ height: "auto" }}
      >
         <MainProductListComponent product={mockData} recommendTile={recommendTile[0]}/>
         <MainProductListComponent product={mockData} recommendTile={recommendTile[1]}/>
         <MainProductListComponent product={mockData} recommendTile={recommendTile[2]}/>
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
