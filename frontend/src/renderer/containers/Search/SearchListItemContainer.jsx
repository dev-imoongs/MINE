import React from 'react';
import ItemComponent from '../../components/Trade/ItemComponent';

const SearchListItemContainer = () => {
    const itemInfo = [
        {
            id: '1',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백',
            price: '500,000원',
            elapsedTime: '49분 전',
            likes: '3',
            chats: '0',
        },
        {
            id: '2',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백2',
            price: '200,000원',
            elapsedTime: '1시간 전',
            likes: '7',
            chats: '2',
        },
        {
            id: '3',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백3',
            price: '75,000원',
            elapsedTime: '2시간 전',
            likes: '1',
            chats: '5',
        },
        {
            id: '4',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백',
            price: '500,000원',
            elapsedTime: '49분 전',
            likes: '3',
            chats: '0',
        },
        {
            id: '5',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백2',
            price: '200,000원',
            elapsedTime: '1시간 전',
            likes: '7',
            chats: '2',
        },
        {
            id: '6',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백3',
            price: '75,000원',
            elapsedTime: '2시간 전',
            likes: '1',
            chats: '5',
        },
        {
            id: '7',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백3',
            price: '75,000원',
            elapsedTime: '2시간 전',
            likes: '1',
            chats: '5',
        },
        {
            id: '8',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백',
            price: '500,000원',
            elapsedTime: '49분 전',
            likes: '3',
            chats: '0',
        },
        {
            id: '9',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백2',
            price: '200,000원',
            elapsedTime: '1시간 전',
            likes: '7',
            chats: '2',
        },
        {
            id: '10',
            image: 'tempimgurl',
            title: '(정품) 프라다 버킷백3',
            price: '75,000원',
            elapsedTime: '2시간 전',
            likes: '1',
            chats: '5',
        },
    ];

    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 min-[1600px]:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 search-results [&amp;_div]:ps-0">
            {itemInfo.map((item) => (
                <ItemComponent
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    elapsedTime={item.elapsedTime}
                    likes={item.likes}
                    chats={item.chats}
                />
            ))}
        </ul>
    );
};

export default SearchListItemContainer;
