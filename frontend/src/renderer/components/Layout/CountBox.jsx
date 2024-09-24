import React from "react";
import { myInfoAtom } from "../../../recoil/atoms/userAtom.js"
import {useRecoilState} from "recoil";

const CountBox = ({box}) => {
    const [myInfo, setMyInfo] = useRecoilState(myInfoAtom);

  return (
      <div className="relative flex justify-evenly w-full border border-gray-300 rounded-lg pl-[8px] pr-[15px] py-4 lg:py-6">
          <dl className="flex justify-between items-center text-center text-jnGray-600 w-full m-0 [&_div]:w-full [&_div]:relative [&_div]:before:right-0 [&_div]:before:top-1/2 [&_div]:before:-translate-y-1/2 [&_div]:before:absolute [&_div]:before:w-[1px] [&_div]:before:h-[40px] [&_div]:before:bg-gray-300 [&_div_dt]:text-[12px] [&_div_dd]:text-[16px] lg:[&_div_dt]:text-[14px] lg:[&_div_dd]:text-[22px]">
              {box.map((item,index,arr) => (
                  index === arr.length-1 ? (
                      <div key={index} className="before:content-none block">
                          <dt className="justify-center mt-0">{item}</dt>
                          <dd className="font-semibold text-jnblack">3</dd>
                      </div>
                  ) : (
                      <div key={index}>
                          <dt className="justify-center mt-0">{item}</dt>
                          <dd className="font-semibold text-jnblack">3</dd>
                      </div>
                  )
              ))}
          </dl>
      </div>
  );
};

export default CountBox;
