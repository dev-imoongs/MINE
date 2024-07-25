import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-jnGray-100">
            <div className="text-xs leading-[14.32px] text-jnGray-600 px-5 xl:px-0 mx-auto mt-8 mb-10 xl:mt-10 xl:mb-11 max-w-[1024px] min-[1600px]:max-w-[1280px]">
                <section className="flex flex-col justify-between md:flex-row">
                    <div className="mb-6 md:mb-0">
                        <h4 className="mb-3 font-bold text-jnGray-900">(주)중고나라 사업자 정보</h4>
                        <ul className="[&amp;>li]:mb-2">
                            <li className="flex items-center">
                                (주)중고나라
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                대표자 : 최인욱
                            </li>
                            <li>사업자 등록번호 : 215-87-87482</li>
                            <li>통신판매신고번호 : 제2019-서울서초-0097호</li>
                            <li>주소 : 서울특별시 서초구 서초대로 301 동익성봉빌딩 7층</li>
                            <li>대표번호 : 1533-7861</li>
                            <li>메일 : joongna@joonggonara.co.kr</li>
                            <li>호스팅제공자 : 아마존웹서비스</li>
                        </ul>
                        <div className="flex">
                            <h5 className="font-semibold leading-[17px] tracking-[0.2px] mr-3 text-jnGray-700">
                                Contact
                            </h5>
                            <ul className="flex items-center">
                                <li>
                                    <a href="https://seller.joonggonara.co.kr/">중고나라 셀러 회원 신청</a>
                                </li>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <li>
                                    <a href="https://vvd.bz/eFFQ">중고나라 광고 문의</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="flex">
                        <li className="w-5 h-5 mr-5 last:mr-0 text-jnGray-600">
                            <a
                                className="[&amp;>*]:w-full [&amp;>*]:h-full"
                                href="https://www.facebook.com/joonggonara.m/"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-5 h-5 mr-5 last:mr-0 text-jnGray-600">
                            <a
                                className="[&amp;>*]:w-full [&amp;>*]:h-full"
                                href="https://www.youtube.com/channel/UCTUQdtrWF8BekcHX-X1SMPw"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-5 h-5 mr-5 last:mr-0 text-jnGray-600">
                            <a className="[&amp;>*]:w-full [&amp;>*]:h-full" href="https://cafe.naver.com/joonggonara">
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_18575_1864)">
                                        <g clipPath="url(#clip1_18575_1864)">
                                            <path
                                                d="M9.99967 18.9993C14.97 18.9993 18.9993 14.97 18.9993 9.99967C18.9993 5.02929 14.97 1 9.99967 1C5.02929 1 1 5.02929 1 9.99967C1 14.97 5.02929 18.9993 9.99967 18.9993Z"
                                                fill="#787E89"
                                            ></path>
                                            <path
                                                d="M9.61785 8.44348C10.9306 8.44348 12.2433 8.44348 13.556 8.44348C14.545 8.44348 15.3996 9.20114 15.5026 10.1862C15.5615 10.7512 15.3949 11.2535 15.0104 11.6768C14.6353 12.0894 14.1632 12.296 13.6101 12.3308C13.5152 12.3368 13.4215 12.3401 13.3266 12.3314C13.1908 12.3194 13.0972 12.3903 13.037 12.508C12.9822 12.6156 12.928 12.7233 12.8638 12.8256C12.1938 13.8869 11.2462 14.5309 10.003 14.7342C9.7001 14.7836 9.39583 14.809 9.09023 14.7923C8.45227 14.7582 7.85777 14.579 7.31343 14.2426C6.73967 13.8882 6.25418 13.4395 5.88304 12.8744C5.53797 12.3488 5.34538 11.7684 5.28453 11.1438C5.22969 10.5827 5.25511 10.0197 5.26112 9.45726C5.2638 9.21652 5.25912 8.97512 5.28319 8.73438C5.30192 8.5458 5.35274 8.47959 5.54132 8.45151C5.58679 8.44482 5.6336 8.44348 5.67974 8.44348C6.99245 8.44348 8.30515 8.44348 9.61785 8.44348ZM13.4563 11.0094C13.4463 11.1672 13.4944 11.2173 13.6502 11.1986C13.9271 11.1658 14.1351 11.0241 14.2735 10.7847C14.4327 10.5105 14.3992 10.2357 14.2521 9.97017C14.1163 9.72475 13.9024 9.59302 13.6195 9.58298C13.5285 9.57964 13.4944 9.61241 13.4784 9.70135C13.4737 9.72877 13.473 9.75752 13.473 9.78561C13.473 9.95479 13.4764 10.124 13.4831 10.2938C13.4924 10.5326 13.473 10.7706 13.455 11.0087"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M12.3199 5.21627C12.4517 5.21627 12.4878 5.25439 12.4918 5.38746C12.5139 6.09029 12.2611 6.68412 11.7569 7.1656C11.3563 7.54744 10.8715 7.75073 10.3171 7.78818C10.0998 7.80289 9.88244 7.81827 9.66511 7.81559C9.25986 7.81158 8.85462 7.79687 8.44937 7.78483C8.3163 7.78082 8.27082 7.73334 8.27149 7.59492C8.27617 7.03653 8.4487 6.537 8.80246 6.10099C9.19232 5.62085 9.69052 5.33129 10.3037 5.24168C10.4221 5.22429 11.1657 5.20223 11.2861 5.2029C11.5395 5.20423 12.021 5.2156 12.3206 5.21627"
                                                fill="white"
                                            ></path>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18575_1864">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                        <clipPath id="clip1_18575_1864">
                                            <rect width="18" height="18" fill="white" transform="translate(1 1)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li className="w-5 h-5 mr-5 last:mr-0 text-jnGray-600">
                            <a
                                className="[&amp;>*]:w-full [&amp;>*]:h-full"
                                href="https://m.blog.naver.com/jnofficial/223313152022"
                            >
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_18575_1880)">
                                        <g clipPath="url(#clip1_18575_1880)">
                                            <path
                                                d="M19 18.2626C19 18.6693 18.669 19 18.2619 19H1.73809C1.33025 19 1 18.6693 1 18.2626V1.73745C1 1.33071 1.33025 1 1.73809 1H18.2619C18.669 1 19 1.33071 19 1.73745V18.2626Z"
                                                fill="#787E89"
                                            ></path>
                                            <path
                                                d="M11.4378 10.2826L8.44484 5.98633H5.96387V14.0134H8.56305V9.71713L11.556 14.0134H14.037V5.98633H11.4378V10.2826Z"
                                                fill="white"
                                            ></path>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18575_1880">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                        <clipPath id="clip1_18575_1880">
                                            <rect width="18" height="18" fill="white" transform="translate(1 1)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                        <li className="w-5 h-5 mr-5 last:mr-0 text-jnGray-600">
                            <a className="[&amp;>*]:w-full [&amp;>*]:h-full" href="https://joonggonara.co.kr/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                                    <g clipPath="url(#circle-gray_svg__a)">
                                        <path fill="#787E89" d="M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18"></path>
                                        <path
                                            fill="#fff"
                                            d="M9.16 5.987v5.874h-.734V8.433H4.26v2.593c0 1.09.994 1.974 2.22 1.974h5.531c.69 0 1.249-.497 1.249-1.11V5h-2.99c-.613 0-1.11.442-1.11.987"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="circle-gray_svg__a">
                                            <path fill="#fff" d="M0 0h18v18H0z"></path>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </section>
                <hr className="w-full h-[1px] border-white mt-8 mb-4 xl:my-5" />
                <section className="flex flex-col justify-between lg:flex-row">
                    <div className="lg:w-[48%]">
                        <ul className="flex flex-wrap items-center mb-5 leading-loose xl:mb-3 text-jnGray-900">
                            <a className="" href="/terms">
                                이용약관
                            </a>
                            <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                            <a className="font-bold" href="/privacy-policy">
                                개인정보처리방침
                            </a>
                            <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                            <a className="" href="/member-dispute">
                                분쟁처리절차
                            </a>
                            <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                            <a className="" href="/youthpolicy">
                                청소년보호정책
                            </a>
                            <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                            <a
                                className=""
                                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2158787482&amp;apv_perm_no="
                            >
                                사업자정보확인
                            </a>
                            <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                            <a className="" href="/post-policy">
                                게시글 수집 및 이용 안내
                            </a>
                            <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                            <a className="" href="/cs-center">
                                중고나라 고객센터
                            </a>
                        </ul>
                        <p className="leading-[22px]">
                            “중고나라” 상점의 판매상품을 제외한 모든 상품들에 대하여, (주)중고나라는 통신판매중개자로서
                            거래 당사자가 아니며 판매 회원과 구매 회원 간의 상품거래 정보 및 거래에 관여하지 않고,
                            어떠한 의무와 책임도 부담하지 않습니다.
                        </p>
                    </div>
                    <div className="mt-5 lg:mt-0 lg:w-[48%] flex justify-end">
                        <div className="text-xs w-full [&amp;>button]:lg:ml-auto">
                            <button className="flex items-center gap-1 mb-1 font-bold">
                                카테고리 리스트
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    className="transition duration-200 ease-in-out transform text-heading rotate-0"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                </svg>
                            </button>
                            <ul className="grid grid-cols-4 lg:grid-cols-6 min-[1600px]:grid-cols-7 lg:w-fit lg:ml-auto gap-2 invisible">
                                <li>
                                    <a href="/category">전체</a>
                                </li>
                                <li>
                                    <a href="/category/%EC%88%98%EC%9E%85%EB%AA%85%ED%92%88">수입명품</a>
                                </li>
                                <li>
                                    <a href="/category/%ED%8C%A8%EC%85%98%EC%9D%98%EB%A5%98">패션의류</a>
                                </li>
                                <li>
                                    <a href="/category/%ED%8C%A8%EC%85%98%EC%9E%A1%ED%99%94">패션잡화</a>
                                </li>
                                <li>
                                    <a href="/category/%EB%B7%B0%ED%8B%B0">뷰티</a>
                                </li>
                                <li>
                                    <a href="/category/%EC%B6%9C%EC%82%B0-%EC%9C%A0%EC%95%84%EB%8F%99">출산/유아동</a>
                                </li>
                                <li>
                                    <a href="/category/%EB%AA%A8%EB%B0%94%EC%9D%BC-%ED%83%9C%EB%B8%94%EB%A6%BF">
                                        모바일/태블릿
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/%EA%B0%80%EC%A0%84%EC%A0%9C%ED%92%88">가전제품</a>
                                </li>
                                <li>
                                    <a href="/category/%EB%85%B8%ED%8A%B8%EB%B6%81-PC">노트북/PC</a>
                                </li>
                                <li>
                                    <a href="/category/%EC%B9%B4%EB%A9%94%EB%9D%BC-%EC%BA%A0%EC%BD%94%EB%8D%94">
                                        카메라/캠코더
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/%EA%B0%80%EA%B5%AC-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4">
                                        가구/인테리어
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/%EB%A6%AC%EB%B9%99-%EC%83%9D%ED%99%9C">리빙/생활</a>
                                </li>
                                <li>
                                    <a href="/category/%EA%B2%8C%EC%9E%84">게임</a>
                                </li>
                                <li>
                                    <a href="/category/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC-%EC%B7%A8%EB%AF%B8">
                                        반려동물/취미
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/%EB%8F%84%EC%84%9C-%EC%9D%8C%EB%B0%98-%EB%AC%B8%EA%B5%AC">
                                        도서/음반/문구
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/%ED%8B%B0%EC%BC%93-%EC%BF%A0%ED%8F%B0">티켓/쿠폰</a>
                                </li>
                                <li>
                                    <a href="/category/%EC%8A%A4%ED%8F%AC%EC%B8%A0">스포츠</a>
                                </li>
                                <li>
                                    <a href="/category/%EB%A0%88%EC%A0%80-%EC%97%AC%ED%96%89">레저/여행</a>
                                </li>
                                <li>
                                    <a href="/category/%EC%98%A4%ED%86%A0%EB%B0%94%EC%9D%B4">오토바이</a>
                                </li>
                                <li>
                                    <a href="/category/%EA%B3%B5%EA%B5%AC-%EC%82%B0%EC%97%85%EC%9A%A9%ED%92%88">
                                        공구/산업용품
                                    </a>
                                </li>
                                <li>
                                    <a href="/category/%EB%AC%B4%EB%A3%8C%EB%82%98%EB%88%94">무료나눔</a>
                                </li>
                                <li>
                                    <a href="/category/%EC%A4%91%EA%B3%A0%EC%B0%A8">중고차</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default FooterComponent;
