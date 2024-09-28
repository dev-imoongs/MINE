/* eslint-disable react-refresh/only-export-components */
import React, {memo} from "react";
import ChattingListContainer from '../containers/Chatting/ChattingListContainer'
import ChattingRoomContainer from '../containers/Chatting/ChattingRoomContainer'
import {currentChatId } from '../../recoil/atoms/chatStateAtom'
import { useRecoilState,useRecoilValue } from 'recoil';
const ChattingPage = () => {
  const chatId = useRecoilValue(currentChatId);
    const chatStyle = {
        width: "0px",
        height: "0px",
        overflow: "hidden",
        outline: "none",
        position: "absolute"
    }
  return (
    <>
          <div
            tabIndex="0"
            aria-hidden="true"
            data-sentinel="start"
            style={chatStyle}
          >
          </div>
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
    </>
  );
};

export default memo(ChattingPage);

