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
                    to="/product/182541754">
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
                        <div className="flex items-center [&amp;>*:not(:last-child)]:mr-1.5">
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
                                ></path></svg>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                >
                                <g clipPath="url(#pickup-badge_svg__a)">
                                    <path
                                        fill="#147350"
                                        d="M10.602 11.69c.205 0 .37.17.37.38s-.165.383-.37.383a.375.375 0 0 1-.368-.383c0-.21.164-.38.368-.38m0 .688c.162 0 .29-.134.29-.308 0-.173-.128-.306-.29-.306s-.289.133-.289.306c0 .174.127.308.29.308m-.046-.103h-.077v-.415h.14c.08 0 .138.056.138.13a.13.13 0 0 1-.09.123l.092.163h-.088l-.085-.155h-.03zm.052-.223q.069-.002.07-.06-.001-.063-.07-.064h-.053v.124zM12.395 8.526c-.2 0-.34.091-.467.196l-.092.13-.033-.024.112-.186v-.116h-.712v2.326h.647V9.376c0-.24.163-.316.274-.33.106-.013.243.045.243.176v1.63h.646V9.248c0-.495-.227-.722-.617-.722M5.174 10.352h.68v.5H4.527V8.526h.647zM2.973 10.852h1.326v-.457h-.68v-.52h.68v-.437h-.68v-.437h.68v-.475H2.973zM6.078 10.852h1.327v-.457h-.68v-.52h.68v-.437h-.68v-.437h.68v-.475H6.078zM9.648 10.852h1.327v-.457h-.68v-.52h.68v-.437h-.68v-.437h.68v-.475H9.648zM8.808 8.526l-.25 1.475-.018.254-.002.023h-.023l-.002-.023L8.495 10l-.25-1.474v-.001h-.651l.537 2.326h.792l.537-2.326z"
                                    ></path>
                                    <path
                                        fill="#FF6C00"
                                        d="M11.4 1.406H2.973v3.3H7.42a9.67 9.67 0 0 1 3.98-3.3"
                                    ></path>
                                    <path
                                        fill="#EC0F2A"
                                        d="M6.324 14.6h3.344l.004-3.298H6.33zM13.017 4.713V1.4c-3.194.866-5.686 3.403-6.45 6.599h3.421a5.7 5.7 0 0 1 3.028-3.286"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="pickup-badge_svg__a">
                                        <path fill="#fff" d="M0 0h16v16H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </Link>
          ))}
        </>
    )
}

export default ProductListPage