import {formatDateToYMD, formatDateToTime } from '../../../services/commonService';
import ImageSliderModal from '../../components/Common/ImageSlideComponent';
import {useState} from "react";

const ImageMessageComponent = ({data})=> {
    const [isModalOpen, setModalOpen] = useState(false)
    const imageCount = data.images.length

    const handleImageClick = () => {
        setModalOpen(true);
    }

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
                                        <div className="rounded-xl h-auto rounded-tr text-white w-auto p-0 overflow-hidden bg-white"
                                             onClick={handleImageClick}
                                        >
                                            <img alt="이미지" src={data.images[0].url} decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}}/>
                                        </div>
                                     )
                                }
                                {
                                    (imageCount > 1 && imageCount < 4 ) && (
                                        <div className="flex h-[140px]"
                                             onClick={handleImageClick}
                                        >
                                            {
                                                data.images.map((img , i) => {
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
                                        <div className="grid grid-cols-2 grid-rows-2 w-[280px] h-[280px]"
                                             onClick={handleImageClick}
                                        >
                                        {
                                            data.images.slice(0, 4).map((img, i) => {
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
                                                    i === 3 && data.images.length > 4 && (
                                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 text-center">
                                                        <p className="h-full flex items-center justify-center font-semibold text-white">
                                                            + {data.images.length - 4}
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

                            </div>
                            <div className="flex flex-col">
                                <p className="mb-0 text-right text-[13px]">{data.read ? '읽음' : ''}</p>
                                <span className="block text-[13px] uppercase text-end">{formatDateToTime(data.time)}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            {/* 슬라이드 모달 */}
            <ImageSliderModal
                images={data.images} // 이미지를 모달로 전달
                isOpen={isModalOpen} // 모달 상태
                onClose={() => setModalOpen(false)} // 닫기 함수
            />
        </>
    )
}

export default ImageMessageComponent;