import React, {useCallback} from "react";
import { useToggle } from "../../../hooks/useToggle";
import { Link } from "react-router-dom";
import {getTimeAgo} from '../../../services/commonService.js'
import { ToastContainer, toast } from "react-toastify";
const ItemComponent = ({
  id,
  image,
  title,
  price,
  elapsedTime,
  likes,
  chats,
  destinationType,
}) => {
  const [isLike, toggleLike] = useToggle();
  const StImg = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    color: "transparent",
  };

  let url;
  const notify = (() => {
    if (!isLike){
      toast("찜 상품에 추가 되었습니다.");
    }else{
      toast("찜 상품에 해제 되었습니다.");
    }
    console.log("자 보자")
});
  switch (destinationType) {
    case 1:
      url = `/product/${id}`;
      break;
    case 2:
      url = `/auction/${id}`;
      break;
    default:
      url = "/";
      break;
  }

  // 상위에서 Props로 전달 받은 목록 (상품 이미지, 타이틀, 가격, 등록시간, 찜 수, 채팅 수) 가 포함된 데이터
  // 등록시간 기준 현재시간과 비교하여 몇 분전 계산하는 로직 필요
  // 다른 파일에서 로직을 생성하고 여기에서 함수를 가져오는게 깔끔해보임
  // 우리 서비스에서 네이버페이는 사용하지 않기 때문에 네이버페이는 빼도 될거같음

  return (
    <li className="">
      <div>
        <Link
          to={url}
          className="relative group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform bg-white"
        >
          <div className="relative w-full rounded-md overflow-hidden dim pt-[100%] mb-3 md:mb-3.5">
            <img
              alt="(정품) 프라다 버킷백"
              referrerPolicy="no-referrer"
              src="https://img2.joongna.com/media/original/2024/08/07/17230142963766P1_R9mil.jpg?impolicy=thumb&amp;size=150"
              decoding="async"
              data-nimg="fill"
              className="bg-gray-300 object-cover h-full group-hover:scale-105 w-full transition duration-200 ease-in rounded-md"
              loading="lazy"
              style={StImg}
            />
            <div className="absolute top-2 z-10 right-2 w-6 h-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  notify()
                  toggleLike();
                }}
              >
                <path
                  d="M5.94197 17.9925L15.2564 26.334C15.3282 26.3983 15.3641 26.4305 15.3975 26.4557C15.7541 26.7249 16.2459 26.7249 16.6025 26.4557C16.6359 26.4305 16.6718 26.3983 16.7436 26.3341L26.058 17.9925C28.8244 15.5151 29.1565 11.3015 26.8124 8.42125L26.5675 8.12029C23.8495 4.78056 18.5906 5.35863 16.663 9.20902C16.3896 9.75505 15.6104 9.75505 15.337 9.20902C13.4094 5.35863 8.1505 4.78056 5.43249 8.12028L5.18755 8.42125C2.84352 11.3015 3.17564 15.5151 5.94197 17.9925Z"
                  strokeWidth="1.5"
                  stroke={isLike ? "#dc2626" : "white"}
                  fill={isLike ? "#dc2626" : "#9ca3afb4"}
                ></path>
              </svg>
              <input id=":r10:" type="checkbox" className="a11yHidden" />
            </div>
          </div>
          <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
            <h2 className="line-clamp-2 min-h-[2lh] text-sm md:text-base">
              {title}
            </h2>
            <div className="font-semibold space-s-2 mt-0.5 text-heading lg:text-lg lg:mt-1.5">
              {price} 원
            </div>
            <div className="my-1 h-6">
              <span className="text-sm text-gray-400">{getTimeAgo(elapsedTime)}</span>
            </div>
            <div className="flex justify-between">
              <div className="text-xs text-gray-400 text-muted">
                찜 {likes} ∙ 채팅 {chats}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default ItemComponent;
