import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
SwiperCore.use([Pagination, Navigation]);
import '../../../styles/swiper.css'; // Swiper 관련 스타일

const ImageSliderModal = ({ images, isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose(); // 모달 닫기 함수 호출
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div
            className="modal-root fixed bg-black bg-opacity-70 inset-0 z-[1060] flex items-center justify-center p-4 md:p-5 overflow-hidden"
            style={{ opacity: 1 }}
        >
            <div className="relative w-full max-w-[800px] h-auto mx-auto rounded-lg overflow-hidden shadow-lg">
                {/* 닫기 버튼 */}
                <button
                    className="absolute top-3 right-3 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center z-20"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* 슬라이드 */}
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    style={{
                        width: '100%',
                        height: 'calc(100vh - 100px)',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image.url}
                                alt={`slide-${index}`}
                                className="w-full h-[calc(100vh-80px)] object-contain"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSliderModal;