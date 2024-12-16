import React from "react";
import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";

const PCompanies = () => {
  return (
    <div className="  lg:w-[1050px] lg:h-[340px] flex flex-col justify-center mx-auto ">
      <div className="w-full md:h-[175px] bg-[#fafafa] mx-auto text-textColor1 flex justify-between max-md:mx-0 max-md:py-4 max-md:flex-col items-center text-[90px] ">
        <FaHooli />
        <FaLyft />
        <FaPiedPiperHat />
        <FaStripe />
        <FaAws />
        <FaRedditAlien />
      </div>
    </div>
  );
};

export default PCompanies;
