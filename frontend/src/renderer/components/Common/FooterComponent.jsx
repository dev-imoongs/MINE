import React from 'react';
const FooterComponent = () => {
    return (
        <>
            <footer className="bg-jnGray-100">
                <div className="text-xs leading-[14.32px] text-jnGray-600 px-5 xl:px-0 mx-auto mt-8 mb-10 xl:mt-10 xl:mb-11 max-w-[1024px] min-[1600px]:max-w-[1280px]">
                    <section className="flex flex-col justify-between md:flex-row">
                        <div className="mb-6 md:mb-0">
                            <h4 className="mb-3 font-bold text-jnGray-900">(주)MINE 사업자 정보</h4>
                            <ul className="[&amp;>li]:mb-2">
                                <li className="flex items-center">
                                    (주)MINE
                                    <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                    대표자 : 정현진
                                </li>
                                <li>주소 : 서울특별시 ㅁㅁ구 ㅁㅁ대로 301 ㅁㅁ빌딩 7층</li>
                                <li>대표번호 : 010-xxxx-xxxx</li>
                                <li>메일 : mine@mine.co.kr</li>
                            </ul>
                        </div>
                    </section>
                    <hr className="w-full h-[1px] border-white mt-8 mb-4 xl:my-5" />
                    <section className="flex flex-col justify-between lg:flex-row">
                        <div className="lg:w-[48%]">
                            <ul className="flex flex-wrap items-center mb-5 leading-loose xl:mb-3 text-jnGray-900">
                                <a className="" >
                                    이용약관
                                </a>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <a className="font-bold" href="/privacy-policy">
                                    개인정보처리방침
                                </a>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <a className="" >
                                    분쟁처리절차
                                </a>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <a className="" >
                                    청소년보호정책
                                </a>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <a
                                    className=""
                                >
                                    사업자정보확인
                                </a>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <a className="" >
                                    게시글 수집 및 이용 안내
                                </a>
                                <div className="w-[1px] h-2 bg-[#E0E0E0] mx-2"></div>
                                <a className="" href="/cs-center">
                                    Mine 고객센터
                                </a>
                            </ul>
                            <p className="leading-[22px]">
                                Mine 상점의 판매상품을 제외한 모든 상품들에 대하여, (주)Mine는
                                통신판매중개자로서 거래 당사자가 아니며 판매 회원과 구매 회원 간의 상품거래 정보 및
                                거래에 관여하지 않고, 어떠한 의무와 책임도 부담하지 않습니다.
                            </p>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;
