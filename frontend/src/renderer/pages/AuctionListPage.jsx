import React from "react";
import AuctionListFilterContainer from "../containers/Auction/AuctionListFilterContainer";
import AuctionListSortContainer from "../containers/Auction/AuctionListSortContainer";
import AuctionListItemContainer from "../containers/Auction/AuctionListItemContainer";
import AuctionListPaginationContainer from "../containers/Auction/AuctionListPaginationContainer";

const AuctionListPage = () => {
  const destinationType = 2;

  const itemsInfo = [
    {
      id: "1",
      image: "tempimgurl",
      title: "(정품) 프라다 버킷백",
      price: "500,000원",
      elapsedTime: "49분 전",
      likes: "3",
      chats: "0",
    },
    {
      id: "2",
      image: "tempimgurl",
      title: "(정품) 프라다 버킷백2",
      price: "200,000원",
      elapsedTime: "1시간 전",
      likes: "7",
      chats: "2",
    },
    {
      id: "3",
      image: "tempimgurl",
      title: "(정품) 프라다 버킷백3",
      price: "75,000원",
      elapsedTime: "2시간 전",
      likes: "1",
      chats: "5",
    },
  ];

  // sort 정렬 기준 0: 좋아요순, 1: 최신순, 2: 낮은 가격순, 3: 높은 가격순

  // 데이터 불러오는 예시
  const fetchAuctions = async (sort) => {
    console.log("버튼을 눌렀을때 sort값", sort);
    // const response = await axios.get(`/auction/?sort=${sort}`);
    // return response.data;
  };

  const handleSortChange = (criteria) => {
    fetchAuctions(criteria);
  };

  return (
    <main
      className="relative flex-grow border-b-2"
      style={{ minHeight: "0px !important; height: auto !important" }}
    >
      <div
        className="mx-auto px-4 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]"
        style={{ height: "auto !important" }}
      >
        <div className="w-full 2xl:-ms-9" style={{ height: "auto !important" }}>
          <AuctionListFilterContainer itemsCount={itemsInfo.length} />
          <div tabIndex="0" aria-labelledby="product-list-price-title">
            <h4 className="mb-2 text-lg font-semibold lg:mt-[52px] lg:mb-4">
              <span className="relative">
                <span
                  id="product-list-price-title"
                  className="relative text-jnBlack"
                >
                  현재 페이지의 상품 가격을 비교해봤어요
                </span>
              </span>
            </h4>
            <div className="flex flex-col overflow-hidden lg:rounded-lg lg:flex-row lg:bg-jnGray-100">
              <div
                className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300 before:content-none"
                aria-labelledby="product-item-price-title-1"
                tabIndex="0"
              >
                <span
                  id="product-item-price-title-1"
                  className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
                >
                  평균 가격
                </span>
                <span
                  tabIndex="0"
                  className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
                >
                  401,913원
                </span>
              </div>
              <div
                className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300"
                aria-labelledby="product-item-price-title-2"
                tabIndex="0"
              >
                <span
                  id="product-item-price-title-2"
                  className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
                >
                  가장 높은 가격
                </span>
                <span
                  tabIndex="0"
                  className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
                >
                  3,100,000원
                </span>
              </div>
              <div
                className="relative flex flex-1 justify-between items-center py-[18px] px-6 !mt-0 mb-2 rounded-lg bg-jnGray-100 lg:px-12 lg:py-6 lg:bg-none lg:mb-0 before:-left-0.5 before:block before:absolute before:w-[1px] before:h-8 before:bg-jnGray-300"
                aria-labelledby="product-item-price-title-3"
                tabIndex="0"
              >
                <span
                  id="product-item-price-title-3"
                  className="font-medium text-sm text-jnGray-800 lg:text-base min-[1600px]:text-lg"
                >
                  가장 낮은 가격
                </span>
                <span
                  tabIndex="0"
                  className="font-bold text-lg text-jnGray-800 lg:text-xl min-[1600px]:text-2xl"
                >
                  10,000원
                </span>
              </div>
            </div>
          </div>
          <AuctionListSortContainer onSortChange={handleSortChange} />
          <AuctionListItemContainer
            itemsInfo={itemsInfo}
            destinationType={destinationType}
          />
          <AuctionListPaginationContainer />
          <div className="flex justify-end">
            <button
              className="rounded-[30px] bg-white/90 border border-jnGray-300 fixed z-10 bottom-10 2xl:translate-x-20"
              id="keyword-notice"
              style={{
                filter:
                  "drop-shadow(rgba(0, 0, 0, 0.06) 2px 2px 12px); opacity: 1",
              }}
            >
              <div className="font-semibold my-[13px] ml-5 mr-[60px] text-sm md:my-[15px] md:ml-5 md:mr-[72px] md:text-lg text-jnBlack">
                키워드 알림 받기
              </div>
              <div className="w-12 h-12 absolute -top-[1px] -right-[1px] md:w-[60px] md:h-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  className="w-full h-auto"
                >
                  <circle cx="30" cy="30" r="30" fill="#0DCC5A"></circle>
                  <path
                    d="M33.7258 41.8266C35.1672 41.8266 35.9287 43.5329 34.9672 44.606C34.3426 45.305 33.5774 45.864 32.7216 46.2465C31.8659 46.629 30.9389 46.8264 30.0016 46.8256C29.0642 46.8264 28.1373 46.629 27.2816 46.2465C26.4258 45.864 25.6606 45.305 25.036 44.606C24.1162 43.5796 24.7727 41.9749 26.0924 41.8383L26.2757 41.8283L33.7258 41.8266Z"
                    fill="white"
                  ></path>
                  <path
                    d="M30 13.5001C32.2629 13.5001 34.1758 15.0048 34.7907 17.0677L34.8673 17.3526L34.8807 17.4243C36.7176 18.4606 38.2829 19.9173 39.4484 21.6751C40.6139 23.4329 41.3464 25.4417 41.5859 27.5372L41.6326 28.0154L41.6643 28.497V33.3809L41.6992 33.6076C41.9274 34.8353 42.6068 35.9333 43.6038 36.6853L43.8821 36.8802L44.1521 37.0452C45.5851 37.8567 45.0852 39.9879 43.5239 40.1512L43.3306 40.1612H16.6695C14.9565 40.1612 14.3583 37.8883 15.848 37.0452C16.4829 36.6859 17.0315 36.192 17.4552 35.5981C17.879 35.0042 18.1676 34.3248 18.3008 33.6076L18.3358 33.3693L18.3375 28.4203C18.4391 26.2439 19.0726 24.1256 20.1826 22.2507C21.2925 20.3759 22.8451 18.8017 24.7045 17.6659L25.1177 17.4226L25.1344 17.351C25.3701 16.3546 25.9058 15.4544 26.6692 14.7721C27.4326 14.0897 28.387 13.658 29.4035 13.5351L29.7068 13.5068L30 13.5001Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="Toastify"></div>
    </main>
  );
};

export default AuctionListPage;
