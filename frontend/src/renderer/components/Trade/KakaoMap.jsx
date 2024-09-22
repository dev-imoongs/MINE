import React, { useEffect, useState } from 'react';
import { tradeDetailProductAtom } from "../../../recoil/atoms/tradeAtom";
import { useRecoilValue } from 'recoil';
import marker2 from '../../../assets/marker.png';
const KakaoMap = () => {
    const tradeProductInfo = useRecoilValue(tradeDetailProductAtom);
    const productInfo = tradeProductInfo.productInfo;
    const [map, setMap] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const { kakao } = window;

            // 지도의 중심좌표 설정
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(productInfo.tradePlace.mapLat, productInfo.tradePlace.mapLon),
                level: 3, // 지도의 확대 레벨
            };

            // 지도 생성 및 설정
            const kakaoMap = new kakao.maps.Map(container, options);
            kakaoMap.setDraggable(true); // 드래그 가능
            kakaoMap.setZoomable(true); // 확대 축소 가능

            // 마커 이미지 크기와 옵션
            const imageSrc = marker2; // 마커 이미지 소스
            const imageSize = new kakao.maps.Size(55, 60); // 마커 이미지 크기
            const imageOption = { offset: new kakao.maps.Point(25, 65) }; // 이미지의 좌표 설정
            
            // 마커 이미지 생성
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
            // 마커 생성
            const markerPosition = new kakao.maps.LatLng(productInfo.tradePlace.mapLat, productInfo.tradePlace.mapLon);
            const marker = new kakao.maps.Marker({
                position: markerPosition,
                image: markerImage, // 생성된 마커에 이미지 설정
                map: kakaoMap, // 지도에 마커 추가
            });
         
             // 커스텀 오버레이 HTML 콘텐츠
             const content = `
             <div class="customoverlay">
                 <a target="_blank">
                     <span class="title">${productInfo.tradePlace.place}</span>
                 </a>
             </div>
         `;

            // 커스텀 오버레이 생성
            const customOverlay = new kakao.maps.CustomOverlay({
                map: kakaoMap,
                position: markerPosition,
                content: content,
                yAnchor: 1,  // 마커 위에 오버레이 배치
            });
            // 지도 클릭 이벤트 추가
            kakao.maps.event.addListener(kakaoMap, 'click', (mouseEvent) => {
                // 클릭한 위치의 좌표
                const latlng = mouseEvent.latLng;

                // 경도와 위도를 콘솔에 출력
                console.log('클릭한 위치의 경도(lon):', latlng.getLng());
                console.log('클릭한 위치의 위도(lat):', latlng.getLat());
            });

            // 생성된 지도 객체를 상태로 설정
            setMap(kakaoMap);
        };

        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(initializeMap);
        }
    }, []);

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