import React, { useEffect, useState } from "react"
import { useLocation,Link } from "react-router-dom"
import {titleCheck} from '../../services/commonService'
import {recommendProduct} from "../../services/productApiService"
const ProductListPage = () => {
    const location = useLocation();
    const [productList, setProductList] = useState([]);
    const query = new URLSearchParams(location.search);
    const type = query.get('type');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await recommendProduct(); // 비동기 함수로 데이터 가져오기
                setProductList(response.data); // 가져온 데이터 상태로 설정
            } catch (error) {
                console.error("데이터를 가져오는 중 오류 발생:", error);
            }
        };

        fetchData(); // 데이터 가져오는 함수 호출
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행
    return (
        
        <>
            <div className="border-t-1 border-borderBottom">
                <div className="mx-auto px-4 md:px-8 2xl:px-16 box-content max-w-[1024px] min-[1600px]:max-w-[1280px]">
                    <div className="bg-gray-200 rounded-md relative flex flex-row mb-7">
                        <div className="relative h-auto md:h-full w-full flex flex-col justify-center items-center py-2 sm:py-3.5" >
                            <h2 className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-heading p-7 text-center w-full" >
                                {titleCheck(type)}
                            </h2>
                            <h3>{titleCheck(type).split('!')[0]} 모아보기</h3>
                        </div>
                    </div>
                    <div className="pb-16 lg:pb-20 flex flex-col justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                            <ProductList productList={productList} />
                        </div>
                        <button
                            data-variant="slim"
                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart mt-8 text-center xl:mt-14 mx-auto"
                        >
                            더보기
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProductList = ({productList}) => {
    if (!productList || productList.length === 0) {
        return <div>Loading...</div>; // productList가 비어 있을 때
    }
    return (
        <>
        {console.log(productList)}
          {productList.map((item, i) => (
                <Link key={i} className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                    to={"/product/"+i}>
                    <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5" >
                        <img
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            src={'/'+item.img}
                            decoding="async"
                            data-nimg="fill"
                            className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                            loading="lazy"
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent"
                            }}
                        />
                        <div className="absolute top-2 z-10 right-2 w-6 h-6">
                            <label className="relative cursor-pointer">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pointer-events-none w-6 h-6"
                                >
                                <path
                                    d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                                    strokeWidth="1.5"
                                    stroke="white"
                                    fill="#9ca3afb4"
                                ></path>
                                </svg>
                            </label >
                            <input id=":ram:" type="checkbox" className="a11yHidden" />
                        </div>
                    </div>
                    <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                        <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
                            {item.title}
                        </h2>
                        <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5" >
                            {item.price}
                        </div>
                        <div className="my-1 h-6">
                            <span className="text-sm text-gray-400">{item.address}</span>
                            <span className="mx-1 text-sm text-gray-400">|</span>
                            <span className="text-sm text-gray-400">5분 전</span>
                            {/* {item.time} */}
                        </div>
                    </div>
                </Link>
          ))}
        </>
    )
}

export default ProductListPage