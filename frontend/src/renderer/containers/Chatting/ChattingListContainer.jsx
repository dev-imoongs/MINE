import React, { useEffect } from 'react';
import {
    currentChatId,
    chatDrawerState,
    chatListAndRoomState,
    chattingRoomSeller, textMessageArray
} from '../../../recoil/atoms/chatStateAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atoms/loginUserAtom';
import {getChattingList, getMessage} from '../../../services/chatService';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../components/Common/LoadingSpinner.jsx';
import {processMessages} from "../../../recoil/selectors/chatSelector.js";

const ChattingListContainer = () => {
    const [drawerVisible, setDrawerVisible] = useRecoilState(chatDrawerState);
    const userId = useRecoilValue(userState);

    // React Query를 사용하여 채팅 리스트 가져오기
    const { data: list = [], isLoading, error } = useQuery(
        ['chattingList', userId],
        () => getChattingList(userId),
        {
            enabled: !!userId, // userId가 있을 때만 쿼리 실행
        }
    );

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <p>Error fetching chatting list!</p>;
    }

    return (
        <div className="flex flex-col w-full h-full justify-between">
            <div className="min-h-[70px] basis-[70px] flex justify-center items-center px-[20px]">
                <button className="w-10 h-10 basis-10 invisible"></button>
                <h2 className="flex flex-col md:flex-row justify-center items-center md:space-x-2 flex-1 text-lg font-semibold text-center text-jnGray-900">
                    <p className="mb-0">
                        <span className="flex items-center justify-center space-x-2">
                            <span>채팅</span>
                        </span>
                    </p>
                </h2>
                <div>
                    <button onClick={() => setDrawerVisible(false)}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="w-8 h-8"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="h-full overflow-auto">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center w-full h-[100px] bg-jnblack text-white px-[36px] py-[16px]">
                        <h2 className="headline-semibold-18">
                           중고와 경매 구매 할 때  <br /> MINE의 안전하고 편리한 채팅 이용하세요
                        </h2>
                    </div>
                    <ul className="flex flex-col h-full overflow-auto bg-white overscroll-contain">
                        {list.map((chat) => (
                            <ChattingListComponent key={chat.room_id} chat={chat} />
                        ))}
                        <div className="min-h-[5px]"></div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const ChattingListComponent = ({ chat }) => {
    const [chatId, setChatId] = useRecoilState(currentChatId);
    const [,setChatContainerState] = useRecoilState(chatListAndRoomState);
    const [,setRoomData] = useRecoilState(chattingRoomSeller);
    const userId = useRecoilValue(userState);
    const [message, setMessage] = useRecoilState(textMessageArray);
    // const handleFetchMessages = () => {
    const fetchMessage = async () => {

        try {
            console.log(chat)
            console.log(userId)
            // 1. 서버에서 메시지 요청
            const message = await getMessage({
                roomId : chat.room_id,
                sellerId : chat.seller_id,
                buyerId : chat.buyer_id,
                itemId : chat.item_id,
                itemType : 'Used',
                sender : userId,
                receive : userId === chat.buyer_id ? chat.seller_id : chat.buyer_id
            });
            console.log(message)
            // // 2. 메시지 가공
            const processedMessage = processMessages(message.chat, userId);
            // setRoomData(message.itemSeller)
            setRoomData({
                roomId : message.roomId,
                itemId : chat.item_id,
                nickName : userId !== message.itemSeller.userId ? chat.buyer_nickname : chat.seller_nickname,
                itemName : message.itemSeller.used_item_name,
                itemPrice : message.itemSeller.used_item_price,
                sender : userId,
                receive : userId === chat.buyer_id ? chat.seller_id : chat.buyer_id,
                sellerTrust : message.itemSeller.user_trust_score,
                buyerTrust : message.itemBuyer.user_trust_score,
                trust : userId === message.itemSeller.userId ? message.itemBuyer.user_trust_score : message.itemSeller.user_trust_score
            })

            // // 3. Recoil 상태 업데이트
            setMessage(processedMessage);
        } catch (error) {
            console.error('ERROR : ', error);
        }
    };

        // fetchMessage();
    // };

    const chatListStyle = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    const chatListImgStyle = {
        color: 'transparent',
    };

    return (
        <li
            className="flex justify-between px-5 gap-5 w-full cursor-pointer bg-white"
            onClick={async () => {
                    await fetchMessage()
                    setChatId(chat.room_id)
                    // handleFetchMessages()
                    setChatContainerState("roomContainer")
            }}
        >
            <div className="flex py-3 border-t-[1px] border-gray-200 w-[80%]">
                <div className="border border-gray-100 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden">
                        <img
                            alt="프로필"
                            src="https://img2.joongna.com/media/original/2024/01/24/1706051485437Hth_JJbme.jpg"
                            width="60"
                            height="60"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-full max-w-none h-[60px] object-cover"
                            loading="lazy"
                            style={chatListImgStyle}
                        />
                </div>
                <div className="flex w-[calc(100%-56px)] flex-col justify-around ml-4">
                    <div className="flex gap-2">
                        <div className="flex gap-2">
                            <h4 className="font-semibold">{chat.item_name} ({chat.buyer_id === userId ? chat.seller_nickname : chat.buyer_nickname})</h4>
                        </div>
                        <p className="text-[12px] mt-[2px]">{new Date(chat.last_message_time).toLocaleDateString()}</p>
                    </div>
                    <span className="text-sm text-ellipsis overflow-hidden whitespace-nowrap min-[1024px]:max-w-[300px]">
                        {chat.last_message}
                    </span>
                </div>
            </div>
            <div className="my-auto">
                <div className="relative w-10 h-10">
                        <img
                            alt="채팅방 상품 썸네일 이미지"
                            src="https://img2.joongna.com/media/original/2024/01/23/1705980294921pYs_jvdmL.jpg?impolicy=thumb"
                            decoding="async"
                            data-nimg="fill"
                            className="rounded-md"
                            loading="lazy"
                            style={chatListStyle}
                        />
                </div>
            </div>
        </li>
    );
};

export default ChattingListContainer;