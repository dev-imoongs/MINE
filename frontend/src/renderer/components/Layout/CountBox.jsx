import React from "react";
const CountBox = () => {
  return (
      <div className="relative flex justify-evenly w-full border border-gray-300 rounded-lg pl-[8px] pr-[15px] py-4 lg:py-6">
          <dl className="flex justify-between items-center text-center text-jnGray-600 w-full m-0 [&_div]:w-full [&_div]:relative [&_div]:before:right-0 [&_div]:before:top-1/2 [&_div]:before:-translate-y-1/2 [&_div]:before:absolute [&_div]:before:w-[1px] [&_div]:before:h-[40px] [&_div]:before:bg-gray-300 [&_div_dt]:text-[12px] [&_div_dd]:text-[16px] lg:[&_div_dt]:text-[14px] lg:[&_div_dd]:text-[22px]">
              <div>
                  <dt className="justify-center mt-0">안전거래</dt>
                  <dd className="font-semibold text-jnblack">0</dd>
              </div>
              <div className="cursor-pointer">
                  <dt className="justify-center mt-0">거래후기</dt>
                  <dd className="font-semibold underline text-jnblack">0</dd>
              </div>
              <div className="">
                  <dt className="justify-center mt-0">단골</dt>
                  <dd className="font-semibold text-jnblack">0</dd>
              </div>
              <div className="before:content-none block">
                  <dt className="ps-3 justify-center items-center gap-1 mt-0">
                      <span>에코마일</span>
                  </dt>
                  <dd className="font-semibold text-jnblack">0</dd>
              </div>
          </dl>
      </div>
  );
};

export default CountBox;
