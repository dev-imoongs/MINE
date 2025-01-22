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
        const { currentPage, totalPages } = lastPage.pageNation;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // 데이터 병합
  const productList = data.pages.flatMap((page) => page.items);
  // console.log(data.pages[0].flatMap((page) => page.items))
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
              <ProductList productList={productList} type ={type}/>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ productList, type }) => {
  return (
    <>
      {productList.map((item, i) => (

        <Link
          key={i}
          className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
          to={type !== 'recommend' ? `/product/${item.usedItemId}` : `/auction/${item.auctionItemId}`}
        >
          <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
            <img
              alt={type !== 'recommend' ? item.usedItemName : item.auctionItemName}
              // src={"/src/assets/temp_product.png"}
                src={`/api/files/display?filePath=${item.filePath}`}
              className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
              loading="lazy"
              style={{ position: "absolute", height: "100%", width: "100%", inset: "0px" }}
            />
          </div>
          {type !== 'recommend' ? (
              <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                <h2 className="line-clamp-2 min-sh-[2lh] text-sm md:text-base">{item.usedItemName}</h2>
                <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                  {item.usedItemPrice}원
                </div>
                <div className="my-1 h-6">
                  <span className="text-sm text-gray-400">{item.usedItemPlace}</span>
                  <span className="mx-1 text-sm text-gray-400">|</span>
                  <span className="text-sm text-gray-400">{getTimeAgo(item.updatedAt)}</span>
                </div>
              </div>
          ) : (
              <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                <h2 className="line-clamp-2 min-sh-[2lh] text-sm md:text-base">{item.auctionItemName}</h2>
                <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                  {item.auctionItemHighestPrice}원
                </div>
                <div className="item-info_wrap">
                  <div>
                    <span>입찰 </span>
                    <span>{!!item.bidCount ? item.bidCount : 0}회</span>
                  </div>
                  <span className="bar"></span>
                  <div className="item-info time">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                    >
                      <path
                          d="M13.5443 3.2199C13.7953 2.9243 13.757 2.48076 13.4591 2.23252L11.311 0.442462C11.0169 0.19744 10.5804 0.235108 10.3327 0.526876C10.0817 0.822472 10.12 1.26601 10.4179 1.51425L12.566 3.30431C12.8601 3.54933 13.2966 3.51167 13.5443 3.2199ZM3.57846 1.5113C3.87485 1.26442 3.91379 0.823528 3.66526 0.528522C3.41887 0.23606 2.98262 0.197294 2.68853 0.441729L0.541829 2.22593C0.243509 2.47388 0.204934 2.91764 0.455997 3.21334C0.703548 3.50491 1.13978 3.54259 1.43367 3.2978L3.57846 1.5113ZM7.35 4.79312C7.35 4.50317 7.11495 4.26812 6.825 4.26812C6.53505 4.26812 6.3 4.50317 6.3 4.79312V7.87071C6.3 8.22307 6.48544 8.54942 6.78814 8.72978L9.20096 10.1674C9.43606 10.3075 9.74008 10.2326 9.88328 9.99943C10.0298 9.76086 9.95196 9.44852 9.71067 9.30655L7.84289 8.20758C7.5375 8.0279 7.35 7.70003 7.35 7.3457V4.79312ZM7 1.48759C3.521 1.48759 0.7 4.28898 0.7 7.74379C0.7 11.1986 3.514 14 7 14C10.479 14 13.3 11.1986 13.3 7.74379C13.3 4.28898 10.479 1.48759 7 1.48759ZM7 12.6097C4.291 12.6097 2.1 10.434 2.1 7.74379C2.1 5.05363 4.291 2.87786 7 2.87786C9.709 2.87786 11.9 5.05363 11.9 7.74379C11.9 10.434 9.709 12.6097 7 12.6097Z"
                          fill="#626262"
                      />
                    </svg>
                    <span className="pl-[8px]">7일 00시간 </span>
                  </div>
                </div>
              </div>
          )}

        </Link>
      ))}
    </>
  );
};

export default ProductListPage;