import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../../../hooks/useToggle';
import { useInput } from '../../../hooks/useInput';
import { toast } from 'react-toastify';
import useFormattedPrice from '../../../hooks/useFormattedPrice';

const AuctionListFilterContainer = ({ itemsCount, filters, setFilters, categoryList, destinationType }) => {
    // 검색해서 경매 들어왔는지 여부
    const [isSearch, setIsSearch] = useState(true);

    const [isOpen, toggleOpen] = useToggle(false);
    // const [isClick, clickToggle] = useToggle(); 12/06 사용 안 함 주석처리

    const [inputMinPrice, handleMinPriceChange, clearInputMinPrice] = useInput('');
    const [inputMaxPrice, handleMaxPriceChange, clearInputMaxPrice] = useInput('');

    // 결과 내 검색 상태제어
    const [inputSearchQuery, handleSearchChange, clearInputSearchQuery] = useInput('');
    const isSold = filters.isSold;
    const { minPrice, maxPrice } = filters.priceRange;
    const formattedMinPrice = useFormattedPrice(minPrice);
    const formattedMaxPrice = useFormattedPrice(maxPrice);

    // filters와 setFilters를 상위에서 정의하고 Props로 넘기기 때문에
    // 거래와 경매에서 둘다 필터를 사용할 수 있음

    const setCategory = (category) => {
        setFilters((prev) => ({
            ...prev,
            category: category,
        }));
    };

    // 필터 상태 가격 범위 설정a
    const setPriceRange = (inputMinPrice, inputMaxPrice) => {
        setFilters((prev) => ({
            ...prev,
            priceRange: { minPrice: inputMinPrice, maxPrice: inputMaxPrice },
        }));
    };

    // 가격 적용 버튼 클릭 핸들러
    const handlePriceFilter = () => {
        const minPrice = parseFloat(inputMinPrice);
        const maxPrice = parseFloat(inputMaxPrice);

        if (!isNaN(minPrice) && (isNaN(maxPrice) || minPrice < maxPrice)) {
            setPriceRange(minPrice, isNaN(maxPrice) ? undefined : maxPrice);
        } else if (isNaN(minPrice) && !isNaN(maxPrice)) {
            setPriceRange(undefined, maxPrice);
        } else {
            toast('가격 범위가 유효하지 않습니다.');
        }
    };

    // 필터 상태 결과 내 검색
    const setSearchQuery = (inputSearchQuery) => {
        setFilters((prev) => ({
            ...prev,
            searchQuery: inputSearchQuery,
        }));
    };

    // 판매완료 아이템 선택
    const setIsSoldItem = async () => {
        setFilters((prev) => ({
            ...prev,
            isSold: !prev.isSold,
        }));
    };

    // 선택한 필터 제거
    const removeFilter = (filterKey) => {
        const initialState = {
            category: null,
            priceRange: { minPrice: undefined, maxPrice: undefined },
            searchQuery: null,
            isSold: false,
        };

        setFilters((prev) => ({
            ...prev,
            ...(filterKey === 'initialize' ? initialState : { [filterKey]: initialState[filterKey] }),
        }));

        // 입력 필드 초기화
        if (filterKey === 'priceRange' || filterKey === 'initialize') {
            clearInputMinPrice();
            clearInputMaxPrice();
        }

        if (filterKey === 'searchQuery' || filterKey === 'initialize') {
            clearInputSearchQuery();
        }
    };

    // 가격 범위 레이블 계산
    const priceRangeLabel = useMemo(() => {
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
            return `${formattedMinPrice}원 ~ ${formattedMaxPrice}원`;
        }
        if (!isNaN(minPrice)) {
            return `${formattedMinPrice}원 이상`;
        }
        if (!isNaN(maxPrice)) {
            return `${formattedMaxPrice}원 이하`;
        }
        return ''; // 두 가격 모두 없으면 빈 문자열
    }, [filters.priceRange]);

    // 반복을 위한, 선택한 필터 현재 상태를 받고있는 배열
    const filterItems = [
        { key: 'category', value: filters.category },
        { key: 'priceRange', value: priceRangeLabel }, // 함수 호출
        { key: 'searchQuery', value: filters.searchQuery },
    ];

    //카테고리 배열
    const categories = categoryList.data;
    console.log('categoryList', categoryList.data);
    console.log('filters.category', filters.category, typeof filters.category);

    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center gap-[6px] items-start mb-[10px]">
                <h2 className="text-2xl lg:text-[28px] font-normal w-[calc(100%-30px)] lg:w-auto text-jnBlack">
                    {isSearch && <strong className="font-semibold">'아이폰12미니' </strong>}
                    검색 결과
                </h2>
                {isSearch && <p className="text-jnGray-700">총 {itemsCount}개</p>}
            </div>
            <table className="filterTable hidden lg:table w-full">
                <tbody>
                    <tr>
                        <td className="flex items-center justify-between">
                            <p>카테고리</p>
                            <button onClick={toggleOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                                    <path
                                        stroke="#9CA3AF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.2"
                                        d={isOpen ? 'M2 8h12' : 'M8 2v12M2 8h12'}
                                    ></path>
                                </svg>
                            </button>
                        </td>
                        <td>
                            <div className="flex items-center w-full">
                                <ol className="flex flex-wrap items-center w-full mt-0 lg:mt-0">
                                    {filters.category ? (
                                        <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                            <Link
                                                className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                                                to="/search?category=1"
                                            >
                                                {categories.find(
                                                    (category) => category.categoryDetail === filters.category
                                                )
                                                    ? categories.find(
                                                          (category) => category.categoryDetail === filters.category
                                                      ).categoryValue
                                                    : '값을 찾을 수 없습니다.'}
                                            </Link>
                                        </li>
                                    ) : (
                                        <li className="flex-shrink-0 px-0 mt-0 text-sm break-all transition duration-200 ease-in text-body first:ps-0 last:pe-0 hover:text-heading">
                                            <Link
                                                className="text-base font-semibold text-jnBlack font-semibold text-base text-jnBlack"
                                                to="/search"
                                            >
                                                전체
                                            </Link>
                                        </li>
                                    )}
                                </ol>
                            </div>
                        </td>
                    </tr>
                    {isOpen && (
                        <tr>
                            <td className="no-border"></td>
                            <td className="!py-2">
                                <ul className="grid grid-cols-6 text-sm">
                                    {categories.map((category) => {
                                        return (
                                            <li
                                                className="flex justify-start items-center !mt-0 p-2 pl-0"
                                                key={category.categoryDetail} // index를 key로 사용할 수 있지만, 고유한 id가 있으면 id 사용을 권장합니다.
                                            >
                                                <Link
                                                    to="#"
                                                    onClick={() => {
                                                        setCategory(category.categoryDetail);
                                                        toggleOpen();
                                                    }}
                                                >
                                                    {category.categoryValue}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </td>
                        </tr>
                    )}

                    <tr>
                        <td>가격</td>
                        <td className="price-filter">
                            <div>
                                <input
                                    type="number"
                                    className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                                    placeholder="최소 가격"
                                    data-idx="0"
                                    value={inputMinPrice}
                                    onChange={handleMinPriceChange}
                                />
                                <span className="mx-[6px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="4"
                                        fill="none"
                                        className="inline"
                                    >
                                        <path
                                            fill="#5A616B"
                                            d="M7.895.628 9.297.62q0 .651-.182 1.205-.182.545-.515.947-.326.401-.788.628-.454.22-1 .22-.636 0-1.129-.25-.484-.258-1.045-.773a3.5 3.5 0 0 0-.652-.507 1.25 1.25 0 0 0-.651-.182.94.94 0 0 0-.584.182 1.14 1.14 0 0 0-.378.5 2 2 0 0 0-.137.757H.796q0-.659.183-1.197.18-.545.507-.931.333-.395.788-.606a2.3 2.3 0 0 1 1-.213q.636 0 1.144.266.516.265 1.046.757.363.349.659.523.295.174.628.174a1 1 0 0 0 .599-.19q.257-.196.401-.537a1.95 1.95 0 0 0 .144-.765"
                                        ></path>
                                    </svg>
                                </span>
                                <input
                                    type="number"
                                    className="w-[152px] border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                                    placeholder="최대 가격"
                                    data-idx="1"
                                    value={inputMaxPrice}
                                    onChange={handleMaxPriceChange}
                                />
                                <button
                                    data-routerlink="true"
                                    className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
                                    onClick={handlePriceFilter}
                                >
                                    적용
                                </button>
                            </div>
                            {parseFloat(inputMinPrice) > parseFloat(inputMaxPrice) && (
                                <div
                                    style={{
                                        margin: '8px 0 0 5px',
                                        fontSize: '9pt',
                                        color: 'red',
                                    }}
                                >
                                    *최대 가격의 설정값이 최소 가격의 설정값보다 작습니다.
                                </div>
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td>결과 내 검색</td>
                        <td className="price-filter">
                            <label
                                data-routerlink="true"
                                htmlFor="saleYn"
                                className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack"
                            >
                                <input
                                    type="text"
                                    className="border rounded border-jnGray-200 py-[10px] px-4 text-sm font-medium"
                                    style={{ width: '65%' }}
                                    placeholder="검색어를 입력해주세요."
                                    data-idx="0"
                                    value={inputSearchQuery}
                                    onChange={handleSearchChange}
                                />
                                <button
                                    data-routerlink="true"
                                    className="w-full mt-3 lg:mt-0 lg:w-auto bg-jnBlack py-[10px] px-4 m-0 lg:mx-2 rounded text-sm font-medium text-white"
                                    onClick={() => {
                                        setSearchQuery(inputSearchQuery);
                                    }}
                                >
                                    적용
                                </button>
                                {destinationType == 1 && (
                                    <label
                                        data-routerlink="true"
                                        htmlFor="saleYn"
                                        className="flex items-center justify-start text-base font-medium break-all cursor-pointer text-jnBlack"
                                        onClick={setIsSoldItem}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="2 2 20 20"
                                            fill={isSold ? '#0DCC5A' : '#C2C6CE'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-1 pointer-events-none"
                                            data-routerlink="true"
                                            style={{ marginLeft: '2.25rem' }}
                                        >
                                            <path
                                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                                stroke={isSold ? '0DCC5A' : '#C2C6CE'}
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M16 9L10.5 14.5L8 12"
                                                stroke="#FFFFFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                        <span data-routerlink="true" className="text-base ps-1">
                                            판매완료 상품 포함
                                        </span>
                                    </label>
                                )}
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>선택한 필터</td>
                        <td>
                            <div className="flex items-center justify-between w-full h-full border-none">
                                <div className="flex flex-wrap">
                                    {filterItems.map(
                                        (filter) =>
                                            filter.value && (
                                                <div
                                                    key={filter.key}
                                                    className="flex items-center flex-shrink-0 py-2 pl-3 mb-2 mr-2 text-sm font-medium border rounded lg:m-0 lg:border-none lg:p-0 lg:text-base border-jnGray-300 text-jnBlack"
                                                >
                                                    {filter.key === 'category' ? (
                                                        <span className="truncate">
                                                            {categories.find(
                                                                (category) =>
                                                                    category.categoryDetail === filters.category
                                                            )
                                                                ? categories.find(
                                                                      (category) =>
                                                                          category.categoryDetail === filters.category
                                                                  ).categoryValue
                                                                : '값을 찾을 수 없습니다.'}
                                                        </span>
                                                    ) : (
                                                        <span className="truncate">{filter.value}</span>
                                                    )}
                                                    {filter.value && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="none"
                                                            className="flex-shrink-0 w-4 text-sm cursor-pointer ms-1 me-3 text-body fill-jnGray-600"
                                                            onClick={() => removeFilter(filter.key)}
                                                        >
                                                            <g
                                                                stroke="#787E89"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                clipPath="url(#close-icon_svg__a)"
                                                            >
                                                                <path d="M13 3 3 13M3 3l10 10"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="close-icon_svg__a">
                                                                    <path fill="#fff" d="M0 0h16v16H0z"></path>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    )}
                                                </div>
                                            )
                                    )}
                                </div>
                                <button
                                    data-routerlink="true"
                                    className="text-sm underline text-jnGray-700 whitespace-nowrap"
                                    onClick={() => removeFilter('initialize')}
                                >
                                    초기화
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AuctionListFilterContainer;
