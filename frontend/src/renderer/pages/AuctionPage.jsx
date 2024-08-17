import React from 'react';
import HeaderComponent from '../containers/Common/HeaderContainer';
import FooterComponent from '../containers/Common/FooterContainer';
import AuctionSectionContainer from '../containers/Auction/AuctionSectionContainer';

const AuctionPage = () => {
    return (
        <div className="flex flex-col min-hscreen default-height">
            <HeaderComponent />
            <AuctionSectionContainer />
            <FooterComponent />
        </div>
    );
};

export default AuctionPage;
