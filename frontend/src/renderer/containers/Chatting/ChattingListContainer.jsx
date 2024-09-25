import { currentChatId, chatDrawerState } from '../../../recoil/atoms/chatStateAtom'
import { useRecoilState } from 'recoil';
const ChattingListContainer = () => {
    const [drawerVisible, setDrawerVisible] = useRecoilState(chatDrawerState);
    const chatListStyle = {
        position: "absolute",
        height: "100%",
        width: "100%",
        inset: "0px",
        color: "transparent",
    }
    const chatListImgStyle = {
        color: "transparent"
    }
  return (
    <>
        <div className="flex flex-col w-full h-full justify-between">
            <div className="min-h-[70px] basis-[70px] flex justify-center items-center px-[20px]">
                <button className="w-10 h-10 basis-10 invisible"
                    
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                >
                    <path
                    stroke="#141313"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m12.5 19.5-8.075-7.125a.5.5 0 0 1 0-.75L12.5 4.5"
                    ></path>
                </svg>
                </button>
                <h2 className="flex flex-col md:flex-row justify-center items-center md:space-x-2 flex-1 text-lg font-semibold text-center text-jnGray-900 null">
                <p className="mb-0">
                    <span className="flex items-center justify-center space-x-2">
                        <span>채팅</span>
                        <span className="text-[11px] text-[#0CB650] border border-jngreen px-2 rounded-2xl h-5 leading-5 hidden">
                            0점
                        </span>
                    </span>
                </p>
                </h2>
                <div>
                <button
                    onClick={() => setDrawerVisible(false)}
                >
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
                    앱 다운로드 받고 <br />더 빠르고 편리하게 채팅 이용하기
                    </h2>
                    {/* <div className="bg-white p-[6px] rounded-[4px]">
                    <img
                        alt="앱 다운로드 QR"
                        src="/main-web/_next/static/media/chat-app-download-qr.cfebfb98.png"
                        width="56"
                        height="56"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                        style={chatListImgStyle}
                    />
                    </div> */}
                </div>
                <ul className="flex flex-col h-full overflow-auto bg-white overscroll-contain">
                    <ChattingListComponent />
                    <ChattingListComponent />
                    <li className="flex justify-between px-5 gap-5 w-full cursor-pointer bg-white">
                    <div className="flex py-3 border-t-[1px] border-gray-200 w-[80%]">
                        <div className="border border-gray-100 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden">
                        <img
                            alt="프로필"
                            src="https://img2.joongna.com/common/Profile/Default/profile_f.png"
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
                            <h4 className="font-semibold">
                                아이원트딩굴뎅굴
                            </h4>
                            </div>
                            <p className="text-[12px] mt-[2px]">4월 27일</p>
                        </div>
                        <span className="text-sm text-ellipsis overflow-hidden whitespace-nowrap min-[1024px]:max-w-[300px]">
                            주말에만 본가에서 발송가능하여 내일 오전이후
                            문의시 다음주 주말에나 발송가능한점 참고해주세요~!
                        </span>
                        </div>
                    </div>
                    <div className="my-auto">
                        <div className="relative w-10 h-10">
                        <img
                            alt="채팅방 상품 썸네일 이미지"
                            src="https://img2.joongna.com/media/original/2024/04/03/1712140171603XmH_q1ABX.jpg?impolicy=thumb"
                            decoding="async"
                            data-nimg="fill"
                            className="rounded-md"
                            loading="lazy"
                            style={chatListStyle}
                        />
                        </div>
                    </div>
                    </li>
                    <div className="min-h-[5px]"></div>
                </ul>
                </div>
            </div>
        </div>

    </>
  );
};

const ChattingListComponent = () => {
    const [chatId, setChatId] = useRecoilState(currentChatId);
    const chatListStyle = {
        position: "absolute",
        height: "100%",
        width: "100%",
        inset: "0px",
        color: "transparent",
    }
    const chatListImgStyle = {
        color: "transparent"
    }
    return (
        <>
            <li className="flex justify-between px-5 gap-5 w-full cursor-pointer bg-white"
                onClick={() => setChatId(1)}
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
                        <h4 className="font-semibold">문킥</h4>
                        </div>
                        <p className="text-[12px] mt-[2px]">5월 17일</p>
                    </div>
                    <span className="text-sm text-ellipsis overflow-hidden whitespace-nowrap min-[1024px]:max-w-[300px]">
                        감사합니다
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
        </>
    )
}

export default ChattingListContainer;