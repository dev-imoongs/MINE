import React from 'react';
import '../../../styles/auction/tableDefault.css';
import useFormattedPrice from '../../../hooks/useFormattedPrice';

const ProductDetailContainer = ({ detailInfo }) => {
    const { productInfo, bidHistory } = detailInfo;
    return (
        <div className="block lg:flex-col lg:min-h-[591px] space-y-12 lg:space-y-0 mb-12">
            <ProductDescription productInfo={productInfo} />
            <BidHistory bidHistory={bidHistory} />
        </div>
    );
};

const ProductDescription = ({ productInfo }) => {
    return (
        <div name="product-description" className="w-full lg:mr-[72px] w-full flex flex-col flex-auto false">
            <h3 className="md:text-[22px] lg:pb-5 w-full border-b border-gray-300 basis-[48px] font-bold pb-3 text-jnblack text-lg">
                상품 정보
            </h3>
            <div className="flex-1 basis-[465px] lg:basis-[475px] flex flex-col overflow-visible">
                <div className="flex flex-col h-auto">
                    <article className="flex flex-col flex-1">
                        <p className="flex-1 py-5 text-base font-normal break-words break-all whitespace-pre-line text-jnGray-900">
                            {productInfo.description}
                        </p>
                    </article>
                </div>
            </div>
            <button className="w-full py-4 border border-gray-400 rounded hidden">더 보기</button>
        </div>
    );
};

const BidHistory = ({ bidHistory }) => {
    const createBidUserName = (userEmail) => {
        const username = userEmail.split('@')[0];
        const halfIndex = Math.floor(username.length / 2);
        const maskedUsername =
            username.slice(0, halfIndex) + '*'.repeat(username.length - halfIndex - 1) + username.slice(-1);

        return maskedUsername;
    };

    return (
        <>
            <h3 className="md:text-[22px] lg:pb-5 w-full border-b border-gray-300 basis-[48px] font-bold pb-3 text-jnblack text-lg">
                입찰 내역
            </h3>
            <div className="tableDefault">
                <table className="text-center">
                    <colgroup>
                        <col width="*" />
                        <col width="25%;" />
                        <col width="25%;" />
                        <col width="*" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th></th>
                            <th>입찰자</th>
                            <th>입찰금액</th>
                            <th>입찰일시</th>
                        </tr>
                    </thead>
                    <tbody id="th_table">
                        {bidHistory.map((history, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{createBidUserName(history.userEmail)}</td>
                                <td>{useFormattedPrice(history.bidAmount)} 원</td>
                                <td>{new Date(history.updateAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductDetailContainer;
