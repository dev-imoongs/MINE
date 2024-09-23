import React from "react";
import ChattingListComponent from '../containers/Chatting/ChattingListComponent'
import ChattingRoomContainer from '../containers/Chatting/ChattingRoomContainer'
const ChattingPage = () => {
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
          <div
            className="rc-drawer-content-wrapper"
            style={{width: "600px", right: "0px"}}
          >
           <ChattingListComponent />
           {/* <ChattingRoomContainer /> */}

          </div>
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

