import React, { useState } from "react";

const AuctionListSortContainer = ({ onSortChange }) => {
  const [isActive, setIsActive] = useState(0);

  // i는 인덱스
  const handleClick = (i) => {
    setIsActive(i);
    switch (i) {
      case 0:
        return onSortChange("likes"); // 좋아요순
      case 1:
        return onSortChange("newest"); // 최신순
      case 2:
        return onSortChange("low-price"); // 낮은가격순
      case 3:
        return onSortChange("high-price"); // 높은가격순
      default:
        return onSortChange("likes");
    }
  };

  // 정렬 버튼 배열
  const sortButtons = ["좋아요순", "최신순", "낮은가격순", "높은가격순"];

  return (
    <ul className="inline-flex z-10 w-full justify-end bg-white lg:top-[204px] xl:top-[220px] pt-7 pb-5 text-end">
      {sortButtons.map((label, i) => (
        <li
          key={i}
          className={`text-sm leading-[17px] ${
            isActive === i ? "font-semibold" : "font-medium"
          } ${isActive === i ? "text-jnGray-900" : "text-jnGray-600"}
                    [&:not(:last-child)]:after:content-[''] after:inline-block after:border after:border-jnGray-300 after:h-[10px] [&:last-of-type]:after:border-none 
                    `}
        >
          <button className="px-2" onClick={() => handleClick(i)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AuctionListSortContainer;
