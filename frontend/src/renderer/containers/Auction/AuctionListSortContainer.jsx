import React from 'react';

const AuctionListSortContainer = () => {
    return (
        <ul className="inline-flex z-10 w-full justify-end bg-white lg:top-[204px] xl:top-[220px] pt-7 pb-5 text-end">
            <li className="text-sm leading-[17px] [&amp;:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&amp;:last-of-type]:after:border-none font-semibold text-jnGray-900">
                <button className="px-2">추천순</button>
            </li>
            <li className="text-sm leading-[17px] [&amp;:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&amp;:last-of-type]:after:border-none font-medium text-jnGray-600">
                <button className="px-2">최신순</button>
            </li>
            <li className="text-sm leading-[17px] [&amp;:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&amp;:last-of-type]:after:border-none font-medium text-jnGray-600">
                <button className="px-2">낮은가격순</button>
            </li>
            <li className="text-sm leading-[17px] [&amp;:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&amp;:last-of-type]:after:border-none font-medium text-jnGray-600">
                <button className="px-2">높은가격순</button>
            </li>
        </ul>
    );
};

export default AuctionListSortContainer;
