import React, {useMemo, useEffect, useState} from "react";

const TradeListSortContainer = ({ onSortChange, isActive }) => {
  // const [isActive, setIsActive] = useState(0);
  // i는 인덱스
  const handleClick = (i) => {
    let criteria = "like"; // 기본값
    switch (i) {
      case 0:
        criteria = "like"; // 좋아요순
        break;
      case 1:
        criteria = "recent"; // 최신순
        break;
      case 2:
        criteria = "low"; // 낮은가격순
        break;
      case 3:
        criteria = "high"; // 높은가격순
        break;
      default:
        criteria = "like";
    }
    onSortChange(criteria, i);
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

export default React.memo(TradeListSortContainer);
