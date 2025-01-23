import React from 'react';
import ItemComponent from '../../components/Trade/ItemComponent';

const TradeListItemContainer = ({ items, destinationType, handleLikeClick }) => {
    console.log('items', items);
    const itemsList = items.items
    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 search-results [&amp;_div]:ps-0">
            {itemsList.map((item, i) => (
                <ItemComponent
                    key={i}
                    id={item.usedItemId}
                    image={item.filePath}
                    title={item.usedItemName}
                    price={item.usedItemPrice}
                    endTime={item.endTime}
                    elapsedTime={item.updatedAt}
                    likes={item.likeCount}
                    chats={item.chats}
                    bidCount={item.bidCount}
                    myFavoriteused={item.myFavoriteused}
                    handleLikeClick={handleLikeClick}
                    destinationType={destinationType}
                />
            ))}
        </ul>
    );
};

export default TradeListItemContainer;
