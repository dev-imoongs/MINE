import React from "react";
import { useLocation, Link } from "react-router-dom";
import { titleCheck, getTimeAgo } from "../../services/commonService";
import { recommendProduct } from "../../services/productApiService";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductListPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");

  const {
    data,
    fetchNextPage, // 다음 페이지 데이터 요청
    hasNextPage, // 더 가져올 데이터가 있는지 여부
    isFetchingNextPage, // 다음 페이지 요청 중 여부
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(
    ["productList", type], // 캐싱 키
    ({ pageParam = 1 }) => recommendProduct(type, pageParam), // 서버 데이터 호출
    {
      getNextPageParam: (lastPage) => {
        // 마지막 페이지에서 다음 페이지 번호 계산
        const { currentPage, totalPage } = lastPage;
        return currentPage < totalPage ? currentPage + 1 : undefined;
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // 데이터 병합
  const productList = data.pages.flatMap((page) => page.items);

  return (
    <div className="border-t-1 border-borderBottom">
      <div className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]">
        <div className="bg-gray-200 rounded-md relative flex flex-row mb-7">
          <div className="relative h-auto md:h-full w-full flex flex-col justify-center items-center py-2 sm:py-3.5">
            <h2 className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-heading p-7 text-center w-full">
              {titleCheck(type)}
            </h2>
            <h3>{titleCheck(type).split("!")[0]} 모아보기</h3>
          </div>
        </div>

        <div className="pb-16 lg:pb-20 flex flex-col justify-center">
          <InfiniteScroll
            dataLength={productList.length} // 현재 데이터 개수
            next={fetchNextPage} // 스크롤 이벤트 발생 시 호출
            hasMore={hasNextPage} // 다음 페이지 존재 여부
            loader={<div className="text-center">Loading...</div>} // 로딩 표시
            endMessage={<div className="text-center">모든 데이터를 불러왔습니다.</div>}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
              <ProductList productList={productList} />
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ productList }) => {
  return (
    <>
      {productList.map((item, i) => (
        <Link
          key={i}
          className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
          to={`/product/${item.usedItemId}`}
        >
          <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
            <img
              alt={item.usedItemName}
              src={"/src/assets/temp_product.png"}
              className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
              loading="lazy"
              style={{ position: "absolute", height: "100%", width: "100%", inset: "0px" }}
            />
          </div>
          <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">{item.usedItemName}</h2>
            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
              {item.usedItemPrice}원
            </div>
            <div className="my-1 h-6">
              <span className="text-sm text-gray-400">{item.usedItemPlace}</span>
              <span className="mx-1 text-sm text-gray-400">|</span>
              <span className="text-sm text-gray-400">{getTimeAgo(item.updatedAt)}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductListPage;