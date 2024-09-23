
const ChattingRoomContainer = () => {
    return (
        <>
            <div className="rc-drawer-content-wrapper" style={{width: "600px", right: "0px"}}>
                <div className="rc-drawer-content relative" aria-modal="true" role="dialog">
                    <div className="flex flex-col w-full h-full justify-between">
                        <div className="min-h-[70px] basis-[70px] flex justify-center items-center px-[20px]">
                            <button className="w-10 h-10 basis-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
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
                                    <button className="text-[14px] text-[null] border-[1px] border-jnblack bg-[null]  p-2 rounded-md">안전거래</button>
                                    </div>
                                <div className="p-5 bg-[#e9edef] overflow-auto h-full">
                                    <div></div>
                                    <div className="w-inherit h-full flex flex-col justify-between">
                                        <div>
                                            <div>
                                                <div>
                                                    <p className="text-center text-[14px] py-4">2024년 05월 16일</p>
                                                </div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">오늘저녁에풀릴듯요.</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오전 8:53</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">살의향 잇으시면 말씀해주세요</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 5:33</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">나중에</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 5:33</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">넵 </p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 5:35</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p className="text-center text-[14px] py-4">2024년 05월 17일</p>
                                                </div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">지금되시나요</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오전 10:15</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">아 넵 좀 늦엇습니다</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오전 11:07</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">일하느라 못봣네요</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오전 11:07</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">준비되면 말씀해주세요</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오전 11:25</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">준완요</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:45</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">그러면 10만원권하고 5천원권 500원 이렇게 드릴게요</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:49</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">네</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:49</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">예금주 - 황자현
                                                                    은행 - 국민은행
                                                                    계좌번호 - **************</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:50</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="noticeMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl w-full bg-white">
                                                                <div style={{color: "rgb(13, 204, 90)", backgroundColor: "rgb(255, 255, 255)", borderColor: "rgb(255, 255, 255)"}}>
                                                                    <div className="flex justify-between font-semibold mb-[10px]">
                                                                        <div className="flex items-center">
                                                                            <img alt="title" aria-hidden="true" src="https://common.joongna.com/image/chatting/live/siren.png" width="23" height="23" decoding="async" data-nimg="1" className="mr-[10px] object-contain" loading="lazy" style={{color: "transparent"}} />
                                                                            <h3 className="text-lg">계좌번호 전송 안내</h3>
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-sm" style={{backgroundColor: "rgb(255, 255, 255)", color: "rgb(156, 163, 175)", border: "1px solid rgb(218, 222, 229)", padding: "5px"}}>AI자동알림</p>
                                                                        </div>
                                                                    </div>
                                                                    <p>
                                                                        <font color="#333333">안전한 거래를 위해 <b>직접 보낸 계좌번호는 표기되지 않습니다.</b></font>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">맞으시나요?</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:50</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="depositMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="font-bold">계좌정보 안내</p>
                                                                <ul className="mt-4 space-y-1 text-sm">
                                                                    <li className="flex space-x-2">
                                                                        <p className="basis-[50px] text-[#9CA3AF]">예금주</p><span className="flex-1 font-semibold">황자현</span>
                                                                    </li>
                                                                    <li className="flex space-x-2">
                                                                        <p className="basis-[50px] text-[#9CA3AF]">은행명</p><span className="flex-1 font-semibold">국민은행</span>
                                                                    </li>
                                                                    <li className="flex space-x-2">
                                                                        <p className="basis-[50px] text-[#9CA3AF]">계좌번호</p><span className="text-sm flex-1 space-x-0 font-semibold tracking-wider"><span>61250201378228</span><button type="button" className="m-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                                                                                    <rect x="1.125" y="5.125" width="9.75" height="9.75" rx="1.375" stroke="#9CA3AF" strokeWidth="1.25"></rect>
                                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 1.75H13.5C13.9142 1.75 14.25 2.08579 14.25 2.5V9.5C14.25 9.91421 13.9142 10.25 13.5 10.25H11V11.5H13.5C14.6046 11.5 15.5 10.6046 15.5 9.5V2.5C15.5 1.39543 14.6046 0.5 13.5 0.5H6.5C5.39543 0.5 4.5 1.39543 4.5 2.5V5H5.75V2.5C5.75 2.08579 6.08579 1.75 6.5 1.75Z" fill="#9CA3AF"></path>
                                                                                </svg></button></span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:50</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">여기 다시보내드렷습니더</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:50</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">ㄱㄷㅅ입완요</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:50</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">ANTJFKIOTHOGJVHDOIYF</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:51</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">10만원이요</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:51</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">나머지도 바꾸고올게요</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:51</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">네</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:51</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">JLLOONMWQJLHJVHOWTHI</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:51</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">5000원</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:52</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">네</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:52</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">MTLRRNPOENKHMOLDXLYF</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:52</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">500원입니더</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 1:52</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1">
                                                            <div className="p-3 rounded-xl h-auto rounded-tl bg-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">거래 감사드립니다.
                                                                    좋은하루 보내시구
                                                                    또 파시면 연락바랍니다.</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-start">오후 1:53</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">감사합니다</p>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <p className="mb-0 text-right text-[13px]">읽음</p><span className="block text-[13px] uppercase text-end">오후 2:06</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p className="text-center text-[14px] py-4">2024년 09월 23일</p>
                                                </div>
                                                <div>
                                                    <div type="textMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-auto">
                                                                <p className="break-all whitespace-pre-wrap [&amp;>a]:text-jngreen [&amp;>a]:underline">안녕하세요. [닌텐도 wii 북미판 게임 2장] 보고 문의드립니다.</p>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-end">오전 0:30</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div></div>
                                                <div>
                                                    <div type="productMessage">
                                                        <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
                                                            <div className="p-3 rounded-xl h-auto rounded-tr bg-[#363C45] text-white w-[226px]">
                                                                <a className="flex justify-between space-x-3" href="/product/115257819">
                                                                    <div className="flex flex-col justify-between"><span className="m-0 overflow-hidden text-sm font-semibold text-ellipsis line-clamp-2">닌텐도 wii 북미판 게임 2장</span><span className="inline-block mt-1 mr-1 font-bold ">6,000원</span></div>
                                                                    <div className="w-[60px] h-[60px] relative overflow-hidden">
                                                                        <img alt="닌텐도 wii 북미판 게임 2장" src="https://img2.joongna.com/media/original/2023/06/05/1685922131019iUp_CAfIn.jpg?impolicy=thumb" decoding="async" data-nimg="fill" className="self-center object-cover rounded-lg" loading="lazy" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}} /></div>
                                                                </a>
                                                                <button data-variant="flat" className="text-[13px] md:text-sm leading-4 items-center cursor-pointer transition ease-in-out duration-300 font-body justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none w-full mt-[10px] text-center text-white font-bold rounded-lg bg-jngreen block h-[36px] px-3 md:px-3 lg:px-3 py-2 md:py-2 lg:py-2">구매하기</button>
                                                            </div>
                                                            <div className="flex flex-col"><span className="block text-[13px] uppercase text-end">오전 0:30</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-jngreen flex justify-between items-center gap-[4px] px-[20px] py-[11px] cursor-pointer -mx-[20px] -mb-[20px]">
                                            <div className="w-full flex justify-between items-center text-white whitespace-pre-wrap detail-medium-12">
                                                <p className="mb-0">앱에서는 채팅 응답이 더 빠르고 편리합니다. 지금 설치하면 거래 확률을 높일 수 있어요!</p><button className="underline">앱 다운로드</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carouselWrapper relative pt-1.5 pb-2.5 pl-1 pr-2.5 h-[44px] quick-menu-slider-wrapper">
                            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" dir="ltr">
                                <div className="swiper-wrapper" style={{transform:"translate3d(0px, 0px, 0px)"}}>
                                    <div className="swiper-slide swiper-slider-chat-event ml-1.5 flex items-center w-fit swiper-slide-active">
                                        <li className="cursor-pointer w-fit">
                                            <div className="flex items-center h-[31px] bg-jnGray-200 rounded-[40px] px-3 py-[6.5px] gap-[6px] w-fit">
                                                <img alt="중고나라 안전거래 소개" src="https://chat-media.joongna.com/quickButton/icon_card.png" width="18" height="18" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
                                                <span className="inline-block text-xs font-medium ">중고나라 안전거래 소개</span>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="swiper-slide swiper-slider-chat-event ml-1.5 flex items-center w-fit swiper-slide-next">
                                        <li className="cursor-pointer w-fit">
                                            <div className="flex items-center h-[31px] bg-jnGray-200 rounded-[40px] px-3 py-[6.5px] gap-[6px] w-fit">
                                                <img alt="사기예방tip" src="https://chat-media.joongna.com/quickButton/icon_caution.png" width="18" height="18" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
                                                <span className="inline-block text-xs font-medium ">사기예방tip</span>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                <div className="swiper-button-prev swiper-button-disabled swiper-button-lock"></div>
                                <div className="swiper-button-next swiper-button-disabled swiper-button-lock"></div>
                            </div>
                        </div>
                        <div>
                            <form className="bg-[#F7F9FA] py-3 px-3 flex flex-col rounded-xl focus-within:shadow-banner h-auto">
                                <textarea title="채팅" autoComplete="off" maxLength="1000" className="shrink-0 bg-transparent placeholder:text-[#9CA3AF] outline-none resize-none text-md h-16 w-full pre-wrap" placeholder="메시지를 입력해주세요" name="chat"></textarea>
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
                                        <span className="text-sm leading-5 text-gray-400">0 / 1000</span>
                                            <button type="submit" disabled="" className="w-6 h-6"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-full h-full fill-[#9CA3AF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChattingRoomContainer;