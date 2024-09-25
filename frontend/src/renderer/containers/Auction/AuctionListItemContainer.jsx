import React from "react";
import ItemComponent from "../../components/Auction/ItemComponent";

const AuctionListItemContainer = ({ itemsInfo, destinationType }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 search-results [&amp;_div]:ps-0">
      {itemsInfo.map((item) => (
        <ItemComponent
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          elapsedTime={item.elapsedTime}
          likes={item.likes}
          chats={item.chats}
          destinationType={destinationType}
        />
      ))}
    </ul>
  );
};

export default AuctionListItemContainer;
