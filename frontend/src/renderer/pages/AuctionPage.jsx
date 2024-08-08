import React from 'react';
import HeaderComponent from '../components/Common/HeaderComponent';
import FooterComponent from '../components/Common/FooterComponent';
import AuctionSectionContainer from '../containers/Auction/AuctionSectionContainer';
import ProductDetailContainer from '../containers/Auction/ProductDetailContainer';

const AuctionPage = () => {
    const StDiv = {
        border: '5px solid black',
    };

    const StP = {
        fontSize: '2rem',
    };
    return (
        <div className="flex flex-col min-hscreen default-height">
            <HeaderComponent />
            <div style={StDiv}>
                <p style={StP}>이 위로는 HeaderComponent</p>
                <AuctionSectionContainer />
                <ProductDetailContainer />
                <p style={StP}>이 아래부터 FooterComponent</p>
            </div>
            <FooterComponent />
        </div>
    );
};

export default AuctionPage;
