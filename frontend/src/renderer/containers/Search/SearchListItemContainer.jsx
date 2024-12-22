import React from 'react';
import ItemComponent from '../../components/Trade/ItemComponent';

const SearchListItemContainer = ({ itemInfo }) => {
    console.log("itemInfo 데이터:", itemInfo);
    console.log(itemInfo.map(v => v.usedItemId))
    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 search-results [&amp;_div]:ps-0">
            {itemInfo.map((item) => (
                <ItemComponent
                    key={item.usedItemId} // 고유한 값을 사용
                    id={item.usedItemId}
                    image={item.image}
                    title={item.usedItemName}
                    price={item.usedItemPrice}
                    elapsedTime={item.createdAt}
                    likes={item.likeCount}
                    chats={1}
                    destinationType={'1'}
                />
            ))}
        </ul>
    );
};

export default SearchListItemContainer;
