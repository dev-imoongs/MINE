import React from 'react';
import { tradeDetailProductAtom } from "../../../recoil/atoms/tradeAtom";
import { useRecoilValue } from 'recoil';
import {tradeItemDetail} from "../../../recoil/selectors/tradeItemSelector.js";
const ProductDetailContainer = () => {
    // const tradeProductInfo = useRecoilValue(tradeDetailProductAtom);
    // const productInfo = tradeProductInfo.productInfo;
    const {productInfo,sellerInfo } = useRecoilValue(tradeItemDetail);
    return (
        <div className="block lg:flex lg:min-h-[591px] space-y-12 lg:space-y-0 mb-12">
            <div name="product-description" className="w-full lg:mr-[72px] lg:w-[680px] flex flex-col flex-auto false">
                <h3 className="md:text-[22px] lg:pb-5 w-full border-b border-gray-300 basis-[48px] font-bold pb-3 text-jnblack text-lg">
                    상품 정보
                </h3>
                <div className="flex-1 basis-[465px] lg:basis-[475px] flex flex-col overflow-visible">
                    <div className="flex flex-col h-auto">
                        <article className="flex flex-col flex-1">
                            <p className="flex-1 py-5 text-base font-normal break-words break-all whitespace-pre-line text-jnGray-900">
                                {productInfo.productExplain}
                            </p>
                            <div className="pb-5">
                                <p className="text-xl font-normal text-jnGray-800 tracking-[0.2px] mb-0">거래희망지역</p>
                                <div>
                                    {
                                        productInfo.tradePlace.preferredPlace.map((place, i) => {
                                            return(
                                                place && (
                                                <button className="inline-flex gap-2 text-l text-jnblack items-center px-4 py-[10px] mr-2 rounded bg-jnGray-200 mt-2"
                                                key={i}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 10 10"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className=""
                                                    >
                                                        <g id="ico_location">
                                                            <g id="Group 7574">
                                                                <path
                                                                    id="Subtract"
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M0.500572 4.33686C0.461335 2.03812 2.44609 0.0664601 4.87009 0.00172047C7.41486 -0.0659179 9.5 1.86951 9.5 4.2668C9.5 5.53695 8.91145 6.67425 7.98201 7.45595L5.51062 9.79962C5.22883 10.0668 4.77124 10.0668 4.48945 9.79962L2.01755 7.45595C1.10543 6.68874 0.521464 5.57899 0.500572 4.33686ZM6.29884 3.7499C5.88477 3.03268 4.96724 2.7871 4.25008 3.2012C3.53291 3.61529 3.28683 4.53237 3.70141 5.2501C4.11548 5.96732 5.03249 6.2129 5.74966 5.7988C6.46734 5.38471 6.7129 4.46763 6.29884 3.7499Z"
                                                                    fill="#787E89"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    {place}
                                                </button>
                                                )

                                            )
                                        })
                                    }        
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <button className="w-full py-4 border border-gray-400 rounded hidden">더 보기</button>
            </div>
        </div>
    );
};


export default ProductDetailContainer;
