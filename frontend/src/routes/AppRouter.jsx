import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../renderer/pages/MainPage';
import AuctionPage from '../renderer/pages/AuctionPage';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auction" element={<AuctionPage />} />
        </Routes>
    );
};
export default AppRouter;
