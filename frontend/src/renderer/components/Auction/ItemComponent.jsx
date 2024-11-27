import React from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { Link } from 'react-router-dom';
import '../../../styles/item.css';

const ItemComponent = ({ id, image, title, price, endTime, likes, chats, destinationType }) => {
    const [isLike, toggleLike] = useToggle();

    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    let url;

    switch (destinationType) {
        case 1:
            url = `/product/${id}`;
            break;
        case 2:
            url = `/auction/${id}`;
            break;
        default:
            url = '/';
            break;
    }

    // 상위에서 Props로 전달 받은 목록 (상품 이미지, 타이틀, 가격, 등록시간, 찜 수, 채팅 수) 가 포함된 데이터
    // 등록시간 기준 현재시간과 비교하여 몇 분전 계산하는 로직 필요
    // 다른 파일에서 로직을 생성하고 여기에서 함수를 가져오는게 깔끔해보임
    // 우리 서비스에서 네이버페이는 사용하지 않기 때문에 네이버페이는 빼도 될거같음

    return (
        <li className="">
            <div>
                <Link
                    to={url}
                    className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
                >
                    <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
                        <img
                            alt="(정품) 프라다 버킷백"
                            referrerPolicy="no-referrer"
                            src="https://img2.joongna.com/media/original/2024/08/07/17230142963766P1_R9mil.jpg?impolicy=thumb&amp;size=150"
                            decoding="async"
                            data-nimg="fill"
                            className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
                            loading="lazy"
                            style={StImg}
                        />
                        <div className="absolute top-2 z-10 right-2 w-6 h-6">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleLike();
                                }}
                            >
                                <path
                                    d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                                    strokeWidth="1.5"
                                    stroke={isLike ? '#dc2626' : 'white'}
                                    fill={isLike ? '#dc2626' : '#9ca3afb4'}
                                ></path>
                            </svg>
                            <input id=":r10:" type="checkbox" className="a11yHidden" />
                        </div>
                    </div>
                    <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                        <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">{title}</h2>
                        <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
                            {price}원
                        </div>
                        <div className="item-info_wrap">
                            <div>
                                <span>입찰 </span>
                                <span>26회</span>
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
                </Link>
            </div>
        </li>
    );
};

const NaverPayBadge = () => {
    return (
        <div className="flex items-center [&amp;>*:not(:last-child)]:mr-1.5">
            <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="-0.00012207" width="30" height="16.2857" rx="2.25" fill="#0DCC5A"></rect>
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
    );
};

export default ItemComponent;
