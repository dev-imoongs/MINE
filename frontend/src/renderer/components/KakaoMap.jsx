import React, { useEffect, useState } from 'react';
import markerImg1 from '../../assets/hyunjinMarker1.png';
import markerImg2 from '../../assets/hyunjinMarker2.png';
import markerImg3 from '../../assets/hyunjinMarker3.png';
import markerImg4 from '../../assets/hyunjinMarker4.png';

const KakaoMap = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const initializeMap = () => {
            const { kakao } = window;

            // 지도의 중심좌표 설정
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(37.47657573458364, 126.98147605060717),
                level: 3, // 지도의 확대 레벨
            };

            // 지도 생성 및 설정
            const kakaoMap = new kakao.maps.Map(container, options);
            kakaoMap.setDraggable(false); // 드래그 가능
            kakaoMap.setZoomable(false); // 확대 축소 가능

            // 마커 정보 배열
            const markersInfo = [
                { position: new kakao.maps.LatLng(37.47657573458364, 126.98147605060717), imageSrc: markerImg1 },
                { position: new kakao.maps.LatLng(37.476818932701036, 126.98100681366), imageSrc: markerImg2 },
                { position: new kakao.maps.LatLng(37.477102918487034, 126.98208076530959), imageSrc: markerImg3 },
                { position: new kakao.maps.LatLng(37.47643616277231, 126.98202439745619), imageSrc: markerImg4 },
            ];

            // 마커 이미지 크기와 옵션
            const imageSize = new kakao.maps.Size(70, 75); // 마커이미지의 크기
            const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정

            // 마커를 지도에 추가하는 함수
            markersInfo.forEach((markerInfo) => {
                const markerImage = new kakao.maps.MarkerImage(markerInfo.imageSrc, imageSize, imageOption);
                const marker = new kakao.maps.Marker({
                    position: markerInfo.position,
                    image: markerImage,
                    map: kakaoMap, // 생성된 마커를 지도에 바로 추가
                });
            });

            // 지도 클릭 이벤트 추가
            kakao.maps.event.addListener(kakaoMap, 'click', function(mouseEvent) {
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
