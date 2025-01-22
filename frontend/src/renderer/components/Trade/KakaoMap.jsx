import React, { useEffect, useState } from 'react';
import { tradeItemDetail } from "../../../recoil/selectors/tradeItemSelector.js";
import { useRecoilValue } from 'recoil';
import marker2 from '../../../assets/marker.png';

const KakaoMap = () => {
    const { productInfo, sellerInfo } = useRecoilValue(tradeItemDetail);
    const [map, setMap] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const { kakao } = window;

            // 지도의 중심 좌표를 설정할 컨테이너
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 좌표 (서울 시청 좌표)
                level: 3, // 지도의 확대 레벨
            };

            // 지도 생성
            const kakaoMap = new kakao.maps.Map(container, options)

            // 주소를 좌표로 변환
            const geocoder = new kakao.maps.services.Geocoder();
            geocoder.addressSearch('남부순환로 265길 4', (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    // 검색 결과에서 첫 번째 주소의 좌표 가져오기
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 지도 중심 좌표 이동
                    kakaoMap.setCenter(coords);

                    // 마커 이미지 설정
                    const imageSrc = marker2; // 마커 이미지 소스
                    const imageSize = new kakao.maps.Size(55, 60); // 마커 이미지 크기
                    const imageOption = { offset: new kakao.maps.Point(25, 65) }; // 마커의 좌표 설정
                    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

                    // 마커 생성
                    const marker = new kakao.maps.Marker({
                        map: kakaoMap,
                        position: coords,
                        image: markerImage,
                    });

                    // 커스텀 오버레이 HTML 콘텐츠
                    const content = `
                        <div class="customoverlay">
                            <a target="_blank">
<!--                                <span class="title">${productInfo.tradePlace.place}</span>-->
                                <span class="title">${result[0].address_name}</span>
                            </a>
                        </div>
                    `;

                    // 커스텀 오버레이 생성
                    const customOverlay = new kakao.maps.CustomOverlay({
                        map: kakaoMap,
                        position: coords,
                        content: content,
                        yAnchor: 1, // 마커 위에 오버레이 배치
                    });
                } else {
                    console.error('주소 변환 실패:', status);
                }
            });

            setMap(kakaoMap);
        };

        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(initializeMap);
        }
    }, [productInfo.tradePlace.place]);

    return (
        <>
            <div name="product-description" className="w-full lg:mr-[72px] lg:w-[680px] flex flex-col flex-auto false">
                <h3 className="md:text-[22px] lg:pb-5 w-full border-b border-gray-300 basis-[48px] font-bold pb-3 text-jnblack text-lg">
                    여기서 거래해요!
                </h3>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'inline-block',
                    marginLeft: '5px',
                    marginRight: '5px',
                }}
            >
                <div id="map" style={{ width: '100%', height: '340px' }}></div>
            </div>
        </>
    );
};

export default KakaoMap;