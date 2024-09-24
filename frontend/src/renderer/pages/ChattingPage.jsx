import React from "react";
import Drawer from 'rc-drawer';
import ChattingListContainer from '../containers/Chatting/ChattingListContainer'
import ChattingRoomContainer from '../containers/Chatting/ChattingRoomContainer'
import {currentChatId } from '../../recoil/atoms/chatStateAtom'
import { useRecoilState } from 'recoil';
import { Outlet } from 'react-router-dom';
const ChattingPage = () => {
    const [chatId, setChatId] = useRecoilState(currentChatId);
    const chatStyle = {
        width: "0px",
        height: "0px",
        overflow: "hidden",
        outline: "none",
        position: "absolute"
    }
  return (
    <>
      <div>
          <div
            tabIndex="0"
            aria-hidden="true"
            data-sentinel="start"
            style={chatStyle}
          ></div>
            {chatId === null ? (
                <ChattingListContainer />
            ) : (
                <ChattingRoomContainer />
            )}
          <div
            tabIndex="0"
            aria-hidden="true"
            data-sentinel="end"
            style={chatStyle}
          ></div>
        </div>
    </>
  );
};

export default ChattingPage;

