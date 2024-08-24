import React from 'react';
import SearchHeaderContainer from '../containers/Search/SearchHeaderContainer';
import SearchListItemContainer from '../containers/Search/SearchListItemContainer';

const SearchListPage = () => {
    return (
        <main
            className="relative flex-grow border-b-2"
            style={{ minHeight: '0px !important; height: auto !important' }}
        >
            <div
                className="mx-auto px-4 md:px-8 2xl:px-16 box-content pt-8 pb-16 bg-white lg:pt-[72px] lg:pb-20 max-w-[1024px] min-[1600px]:max-w-[1280px]"
                style={{ height: 'auto !important' }}
            >
                <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important' }}>
                    <SearchHeaderContainer />
                    <SearchListItemContainer />
                </div>
                <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important', marginTop:'70px' }}>
                    <SearchHeaderContainer />
                    <SearchListItemContainer />
                </div>

            </div>
            <div className="Toastify"></div>
        </main>
    );
};

export default SearchListPage;
