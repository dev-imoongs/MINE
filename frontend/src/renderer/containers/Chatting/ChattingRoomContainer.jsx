import { currentChatId, textMessageArray, sendMessage } from '../../../recoil/atoms/chatStateAtom'
import { useRecoilState } from 'recoil';
import {formatDateToYMD, formatDateToTime } from '../../../services/commonService';
import { useEffect, useState, useRef } from 'react';
const ChattingRoomContainer = () => {
    const [chatId, setChatId] = useRecoilState(currentChatId);
    const [message, setMessage] = useRecoilState(textMessageArray);
    const [sndMsg, setSndMsg] = useRecoilState(sendMessage);
    const messageEndRef = useRef(null);
    useEffect(() => {
        if (sndMsg.text && sndMsg.text.trim()) {
            setMessage((prevMessages) => [...prevMessages, sndMsg]);
        }
    }, [sndMsg]);// sndMsg가 변경될 때마다 실행
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        
    };
        // message 배열이 업데이트될 때마다 스크롤 내림
        useEffect(() => {
            scrollToBottom();
        }, [message]);
    return (
        <>
            <div className="flex flex-col w-full h-full justify-between">
                <div className="min-h-[70px] basis-[70px] flex justify-center items-center px-[20px]">
                    <button className="w-10 h-10 basis-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                        onClick={() => setChatId(null)}
                    >
                            <path stroke="#141313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.5 19.5-8.075-7.125a.5.5 0 0 1 0-.75L12.5 4.5"></path>
                        </svg>
                    </button>
                    <h2 className="flex flex-col md:flex-row justify-center items-center md:space-x-2 flex-1 text-lg font-semibold text-center text-jnGray-900 cursor-pointer">
                        <p className="mb-0"><span className="flex items-center justify-center space-x-2"><span>문킥</span><span className="text-[11px] text-[#0CB650] border border-jngreen px-2 rounded-2xl h-5 leading-5">691점</span></span>
                            <p className="text-[12px] text-gray-400 h-4">보통 2시간 이내 응답</p>
                        </p>
                    </h2>
                    <div>
                        <div className="flex gap-[8px]">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                    <path stroke="#141313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M9.095 12.116A8.05 8.05 0 0 0 2.2 20.082h12.506M10.254 12.029q-.594 0-1.16.087"></path>
                                    <path fill="#fff" stroke="#141313" strokeMiterlimit="10" strokeWidth="1.6" d="M13.583 7.264a3.464 3.464 0 1 0-6.929 0v1.303a3.464 3.464 0 1 0 6.929 0z"></path>
                                    <path fill="#fff" d="M15.942 12.386a4.41 4.41 0 0 1 4.404 4.403 4.4 4.4 0 0 1-4.404 4.404 4.4 4.4 0 0 1-4.403-4.404 4.4 4.4 0 0 1 4.403-4.403m0 7.262a2.864 2.864 0 0 0 2.858-2.859 2.864 2.864 0 0 0-2.858-2.858 2.864 2.864 0 0 0-2.858 2.858 2.864 2.864 0 0 0 2.858 2.859m0-8.517a5.667 5.667 0 0 0-5.659 5.658c0 3.12 2.54 5.66 5.66 5.66 3.118 0 5.658-2.54 5.658-5.66s-2.54-5.659-5.659-5.659m0 7.261a1.605 1.605 0 0 1-1.603-1.603 1.6 1.6 0 0 1 1.603-1.603 1.6 1.6 0 0 1 1.603 1.603 1.6 1.6 0 0 1-1.603 1.603"></path>
                                    <path fill="#fff" stroke="#141313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M15.944 20.41a3.627 3.627 0 0 0 3.63-3.63 3.627 3.627 0 0 0-3.63-3.631 3.627 3.627 0 0 0-3.632 3.63 3.627 3.627 0 0 0 3.632 3.632"></path>
                                    <path stroke="#141313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m21.062 21.743-2.569-2.337"></path>
                                </svg>
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                    <path fill="#141313" stroke="#141313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-full overflow-auto">
                    <div className="flex flex-col justify-between w-full h-full">
                        <div className="bg-white w-full flex gap-2 px-3 py-4 items-center">
                            <a className="flex flex-grow h-10 gap-4" href="/product/115257819">
                                <div className="relative w-10 h-10 aspect-square">
                                    <img alt="상품 썸네일" src="https://img2.joongna.com/media/original/2023/06/05/1685922131019iUp_CAfIn.jpg?impolicy=thumb" decoding="async" data-nimg="fill" className="rounded-md" loading="lazy" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}} />
                                </div>
                                <div>
                                    <div className="flex items-center"><span className="font-semibold text-[15px] text-jnGray-900">6,000원</span><span className="text-[12px] text-jnGray-500 ml-2">배송비 별도</span></div><span className="block text-[12px]">닌텐도 wii 북미판 게임 2장</span>
                                </div>
                            </a>
                            </div>
                        <div className="p-5 bg-[#e9edef] overflow-auto h-full">
                            <div></div>
                            <div className="w-inherit h-full flex flex-col justify-between">
                                <div>

                                    {
                                        message.map((data, i) => {
                                            return (
                                                <div key={i}>
                                                    {data.type == 'send' ? <SendTextMessage data={data}/> : <ReceiveTextMessage data={data}/>}
                                                </div>
                                            )
                                        })
                                    }
                                    <div ref={messageEndRef} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SendChattingTextArea setSendMessage={setSndMsg}/>
            </div>
        </>
    )
}

export default ChattingRoomContainer;

const SendChattingTextArea = ({setSendMessage}) => {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        await setSendMessage(prev => ({
            ...prev,
            text: text,
            time: new Date(),
        }));
        
        setText('');  // 전송 후 초기화
    };
    return (
        <>
            <div>
                <form className="bg-[#F7F9FA] py-3 px-3 flex flex-col rounded-xl focus-within:shadow-banner h-auto"  onSubmit={handleSubmit}>
                    <textarea title="채팅" autoComplete="off" maxLength="1000" className="shrink-0 bg-transparent placeholder:text-[#9CA3AF] outline-none resize-none text-md h-16 w-full pre-wrap" placeholder="메시지를 입력해주세요" name="chat" 
                    onChange={(e) => {
                        handleTextChange(e);
                        if (!e.target.value.trim()) {
                            return;
                        }
                    } } ></textarea>
                    <div className="flex justify-between mt-3">
                        <div className="flex gap-2">
                            <div>
                                <div className="block">
                                    <label htmlFor="chat-image-upload" className="text-gray-600 font-semibold text-sm leading-none cursor-pointer block border-[#e1e1e1] text-center border-0 m-0 p-0 w-6 h-6">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-full h-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15.002 9.5V13a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1zm5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </label>
                                    <input id="chat-image-upload" name="chat-image-upload" type="file" className="px-4 md:px-5 appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary a11yHidden w-auto py-0 rounded-md" autoComplete="off" spellCheck="false" aria-invalid="false" accept="image/png, image/jpeg, image/jpg" multiple="" />
                                </div>
                            </div>
                            <button className="w-6 h-6">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-full h-full" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                                    <path d="M14.829,14.828c-0.185,0.184-0.384,0.349-0.592,0.489c-0.217,0.146-0.445,0.27-0.68,0.369 c-0.244,0.103-0.496,0.181-0.749,0.233c-0.531,0.108-1.087,0.108-1.616,0c-0.254-0.052-0.506-0.13-0.75-0.233 c-0.234-0.099-0.463-0.223-0.679-0.369c-0.209-0.141-0.408-0.305-0.593-0.489c-0.181-0.181-0.346-0.38-0.488-0.592l-1.658,1.119 c0.215,0.318,0.462,0.617,0.734,0.889c0.273,0.273,0.572,0.52,0.887,0.731c0.323,0.218,0.666,0.404,1.02,0.553 c0.365,0.154,0.744,0.272,1.128,0.35C11.189,17.959,11.596,18,12,18s0.811-0.041,1.208-0.122c0.383-0.078,0.762-0.196,1.127-0.35 c0.354-0.149,0.696-0.335,1.021-0.553c0.313-0.212,0.612-0.458,0.886-0.731c0.272-0.271,0.52-0.571,0.734-0.889l-1.658-1.119 C15.175,14.448,15.01,14.647,14.829,14.828z"></path>
                                    <circle cx="8.5" cy="10.5" r="1.5"></circle>
                                    <circle cx="15.493" cy="10.493" r="1.493"></circle>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-end space-x-2">
                            <span className="text-sm leading-5 text-gray-400">{text.length} / 1000</span>
                                <button type="submit" disabled={!text.trim()} className="w-6 h-6"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-full h-full fill-[#9CA3AF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

const ReceiveTextMessage = (messageData) => {
    const data = messageData.data
    return (
        <>
            <div>
                <div>
                    {data.messageForFirstDate && (<p className="text-center text-[14px] py-4">{formatDateToYMD(data.time, data.messageForFirstDate)}</p>)}
                </div>
                <div>
                    <div type="textMessage">
                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">{data.text}</p>
                            </div>
                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">{formatDateToTime(data.time, data.messageForFirstDate)}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SendTextMessage = (messageData) => {
    const data = messageData.data
    return (
        <>
            <div>
                <div>
                {data.messageForFirstDate && (<p className="text-center text-[14px] py-4">{formatDateToYMD(data.time, data.messageForFirstDate)}</p>)}
                </div>
                <div>
                    <div type="textMessage">
                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">{data.text}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">{formatDateToTime(data.time, data.messageForFirstDate)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
