import React, { useState } from "react";
import image_1 from "../../../assets/001.png";
import image_2 from "../../../assets/002.png";
import image_3 from "../../../assets/003.png";
import image_4 from "../../../assets/004.png";
import image_5 from "../../../assets/005.png";
import image_6 from "../../../assets/006.png";
import image_7 from "../../../assets/007.png";

const Slider = () => {
    // 이미지를 객체 형태로 정의
    const tempImg = [
        { id: 1, img: image_1 },
        { id: 2, img: image_2 },
        { id: 3, img: image_3 },
        { id: 4, img: image_4 },
        { id: 5, img: image_5 },
        { id: 6, img: image_6 },
        { id: 7, img: image_7 },
    ];

    // 애니메이션 제어 상태 변수
    const [animate, setAnimate] = useState(true);

    // 마우스가 슬라이더 진입 시 애니메이션 중지
    const onStop = () => setAnimate(false);

    // 마우스가 슬라이더 떠날 때 애니메이션 재시작
    const onRun = () => setAnimate(true);

    return (
        <div className="wrapper">
            <div className="slide_container">
                <ul
                    className="slide_wrapper"
                    onMouseEnter={onStop}
                    onMouseLeave={onRun}
                >
                    {/* Original 슬라이드 */}
                    <div className={"slide original" + (animate ? "" : " stop")}>
                        {tempImg.map((images) => (
                            <li key={`original-${images.id}`}>
                                <p className="item">
                                    <img src={images.img} alt={`Slide ${images.id}`} />
                                </p>
                            </li>
                        ))}
                    </div>
                    {/* Clone 슬라이드 */}
                    <div className={"slide clone" + (animate ? "" : " stop")}>
                        {tempImg.map((images) => (
                            <li key={`clone-${images.id}`}>
                                <p className="item">
                                    <img src={images.img} alt={`Slide ${images.id}`} />
                                </p>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Slider;