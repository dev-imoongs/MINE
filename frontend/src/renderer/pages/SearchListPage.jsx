import React, { useEffect, useState } from 'react';
import SearchHeaderContainer from '../containers/Search/SearchHeaderContainer';
import SearchListItemContainer from '../containers/Search/SearchListItemContainer';
import { useLocation } from 'react-router-dom';
const SearchListPage = () => {
    const location = useLocation();
    const [search, setSearch] = useState();
    const param = new URLSearchParams(location.search) 
    const categoryParam = param.get('category');
    const productParam = param.get('product');
    console.log(categoryParam)
    console.log(productParam)

    let categoryList = ['디지털 기기', '생활 가전', '가구/인테리어', '생활/주방', '도서', '의류', '뷰티/미용', '스포츠/레저', '식물', '취미/게임/음반', '상품권/모바일티켓', '식품'];
    useEffect(() => {
        if(categoryParam){
            let toInt = parseInt(categoryParam)
            setSearch(categoryList[toInt-1])
        }else{
            setSearch(productParam)
        }
    },[location])

    
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
                    <SearchHeaderContainer link={'/product'} type={'중고'} title={search}/>
                    <SearchListItemContainer />
                </div>
                <div className="w-full 2xl:-ms-9" style={{ height: 'auto !important', marginTop:'70px' }}>
                    <SearchHeaderContainer link={'/auction'} type={'경매'} title={search}/>
                    <SearchListItemContainer />
                </div>

            </div>
            <div className="Toastify"></div>
        </main>
    );
};

export default SearchListPage;
