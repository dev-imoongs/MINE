import React from "react";
const TrustRating = () => {
  return (
      <div className="flex space-x-7 lg:pl-1 items-start">
          <div className="flex-1 self-center">
              <div className="flex justify-between items-center mb-2 text-[#0CB650] font-medium">
                          <span>
                            <span className="font-medium text-base">신뢰지수</span>
                            <span className="font-bold inline-block ml-1 text-lg">146</span>
                          </span>
                  <span className="text-[#9CA3AF] text-[14px] font-normal">
                            1,000
                          </span>
              </div>
              <div className="w-full h-2 bg-[#F1F4F6] rounded overflow-hidden">
                  <div className="h-full" style={{ width: "14.6%" }}>
                      <div className="rounded bg-gradient-to-r from-[#0DCC5A] from-0% to-[#019FB1] to-107.5% w-full h-full animate-width" />
                  </div>
              </div>
          </div>
          <div className="flex items-center translate-x-3 hidden lg:flex">
              <img
                  alt="profile-image"
                  src=""
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] hidden"
                  loading="lazy"
                  style={{ color: "transparent" }}
              />
              <img
                  alt="profile-image"
                  src="https://img2.joongna.com/common/Profile/Default/profile_f.png"
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] box-content border-4 border-white -translate-x-3"
                  loading="lazy"
                  style={{ color: "transparent" }}
              />
          </div>
      </div>
  );
};

export default TrustRating;
