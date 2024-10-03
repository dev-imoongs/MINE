import React, { useEffect, useState } from "react";
import AuctionListFilterContainer from "../containers/Auction/AuctionListFilterContainer";
import AuctionListSortContainer from "../containers/Auction/AuctionListSortContainer";
import AuctionListItemContainer from "../containers/Auction/AuctionListItemContainer";
import AuctionListPaginationContainer from "../containers/Auction/AuctionListPaginationContainer";
import AuctionListPriceInfoContainer from "../containers/Auction/AuctionListPriceInfoContainer";
import { auctionItems } from "../../services/auctionApiService";
import { useQuery } from "react-query";

const AuctionListPage = () => {
  const destinationType = 2;
  const [itemsInfo, setItemsInfo] = useState(null);

  const items = useQuery({
    queryKey: "auctionItemsData",
    queryFn: auctionItems,
  });

  useEffect(() => {
    if (items.data) {
      setItemsInfo(items.data);
    }
  }, [items.data]);

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
      {itemsInfo && (
        <div
          className="mx-auto px-4 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]"
          style={{ height: "auto !important" }}
        >
          <div
            className="w-full 2xl:-ms-9"
            style={{ height: "auto !important" }}
          >
            <AuctionListFilterContainer itemsCount={itemsInfo.length} />
            <AuctionListPriceInfoContainer />
            <AuctionListSortContainer onSortChange={handleSortChange} />
            <AuctionListItemContainer
              itemsInfo={itemsInfo}
              destinationType={destinationType}
            />
            <AuctionListPaginationContainer />
          </div>
        </div>
      )}
      <div className="Toastify"></div>
    </main>
  );
};

export default AuctionListPage;
