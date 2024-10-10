import {formatDateToYMD, formatDateToTime } from '../../../services/commonService';
// export const ReceiveImageMessage = () =>{
//     return(
//         <>
//             <div>
//                 <div></div>
//                     <div>
//                         <div type="imageListMessage">
//                             <div className="flex items-end w-auto mb-2 flex-start space-x-1">
//                                 <div className="rounded-xl h-auto rounded-tl w-auto p-0 overflow-hidden bg-white">
//                                     <div className="flex h-[140px]">
//                                         <div className="relative overflow-hidden">
//                                             <img alt="이미지" src="https://chat-media.joongna.com/2024/09/26/1727315615831rhp_lvj8b.jpeg" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
//                                         </div>
//                                         <div className="relative overflow-hidden">
//                                             <img alt="이미지" src="https://chat-media.joongna.com/2024/09/26/1727315618476jb6_c8o04.jpeg" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}}/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             <div className="flex flex-col">
//                                 <p className="mb-0 text-left text-[13px]">읽음</p>
//                                 <span className="block text-[13px] uppercase text-start">오전 10:53</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export const SendImageMessage = () => {
//     return(
//         <>
//             <div>
//                 <div></div>
//                 <div>
//                     <div type="imageListMessage">
//                         <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
//                             <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
//                                 <div className="flex h-[140px]">
//                                     <div className="relative overflow-hidden">
//                                         <img alt="이미지" src="https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
//                                     </div>
//                                     <div className="relative overflow-hidden">
//                                         <img alt="이미지" src="https://chat-media.joongna.com/2024/09/26/1727315842226s02_ysfqm.jpeg" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}}/>
//                                     </div>
//                                     <div className="relative overflow-hidden">
//                                         <img alt="이미지" src="https://chat-media.joongna.com/2024/09/26/1727315842887od9_bo5i5.jpeg" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}}/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col">
//                                 <p className="mb-0 text-right text-[13px]">읽음</p>
//                                 <span className="block text-[13px] uppercase text-end">오전 10:57</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export const SendOneImage = () => {
//     return(
//         <>
//             <div>
//                 <div></div>
//                 <div>
//                     <div type="imageMessage">
//                         <div className="flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse">
//                             <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
//                                 <img alt="이미지" src="https://chat-media.joongna.com/2024/09/26/1727315832812n5p_cy5y8.jpg" width="1179" height="2556" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
//                             </div>
//                             <div className="flex flex-col">
//                                 <p className="mb-0 text-right text-[13px]">읽음</p>
//                                 <span className="block text-[13px] uppercase text-end">오전 10:57</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
const ImageMessageComponent = ({data})=> {
    const imageCount = data.image.length;

    return(
        <>
            <div>
                <div>
                {data.messageForFirstDate && (<p className="text-center text-[14px] py-4">{formatDateToYMD(data.time)}</p>) }
                </div>
                <div>
                    <div type="imageListMessage">
                        <div className={data.type == 'send' ? "flex items-end w-auto mb-2 flex-start space-x-1 flex-row-reverse space-x-reverse" : "flex items-end w-auto mb-2 flex-start space-x-1"}>
                            <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                            {
                                imageCount == 1 && (
                                    <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white">
                                        <img alt="이미지" src={data.image[0].url} width={data.image[0].width} height={data.image[0].height} decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
                                    </div>
                                 )
                            }
                            {
                                (imageCount > 1 && imageCount < 4 ) && (
                                    <div className="flex h-[140px]">
                                        {
                                            data.image.map((img , i) => {
                                                return (
                                                    <div className="relative overflow-hidden" key={i}>
                                                        <img alt="이미지" src={img.url} width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                            {
                                imageCount >= 4 && (
                                    <div className="grid grid-cols-2 grid-rows-2 w-[280px] h-[280px]">
                                    {
                                        data.image.slice(0, 4).map((img, i) => {
                                        return (
                                            <div className="relative overflow-hidden" key={i}>
                                            <img
                                                alt="이미지"
                                                src={img.url}
                                                width="140"
                                                height="140"
                                                decoding="async"
                                                data-nimg="1"
                                                className="object-contain"
                                                loading="lazy"
                                                style={{ color: "transparent" }}
                                            />
                                            {
                                                // 마지막 이미지에 남은 이미지 개수 표시
                                                i === 3 && data.image.length > 4 && (
                                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 text-center">
                                                    <p className="h-full flex items-center justify-center font-semibold text-white">
                                                        +{data.image.length - 4}
                                                    </p>
                                                </div>
                                                )
                                            }
                                            </div>
                                        );
                                        })
                                    }
                                    </div>
                                )
                            }

                                {/* <div className="grid grid-cols-2 grid-rows-2 w-[280px] h-[280px]">
                                    <div className="relative overflow-hidden">
                                        <img alt="이미지" src="https://chat-media.joongna.com/2024/09/27/1727363774116kqx_ki4wl.png" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <img alt="이미지" src="https://chat-media.joongna.com/2024/09/27/1727363774116we8_o6k6p.png" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <img alt="이미지" src="https://chat-media.joongna.com/2024/09/27/1727363774115ccj_9qmos.png" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <img alt="이미지" src="https://chat-media.joongna.com/2024/09/27/17273637741161go_pf6xz.png" width="140" height="140" decoding="async" data-nimg="1" className="object-contain" loading="lazy" style={{color: "transparent"}} />
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 text-center">
                                            <p className="h-full flex items-center justify-center font-semibold text-white">+6</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="flex flex-col">
                                <span className="block text-[13px] uppercase text-end">{formatDateToTime(data.time)}</span>
                            </div>
                         </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default ImageMessageComponent;