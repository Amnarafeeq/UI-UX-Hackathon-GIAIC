import Image from "next/image";
import React from "react";

const Fluid = () => {
  return (
    <div className="w-full h-auto md:h-[682px] flex mx-auto md:flex-row flex-col-reverse justify-evenly items-center mt-32 p-7">
      <div className="w-auto md:w-[704px] h-full  flex  justify-center items-center ">
        <div>
          <Image
            src="/Images/fluid.png"
            alt=""
            width={600}
            height={600}
            className="w-full h-auto md:h-full md:w-[600px]"
          />
        </div>
      </div>
      <div className="w-auto mx-auto md:w-[573px] h-auto md:h-[326px] flex flex-col md:justify-between text-center justify- gap-y-7">
        <h4 className="text-[#BDBDBD] font-bold">SUMMER 2022</h4>
        <h1 className="text-[40px] font-bold   md:w-[387px] text-darkBackground">
          Part of the Neural Universe
        </h1>
        <div className="w-auto  md:w-[369px] text-center h-auto md:h-[60px]  leading-8 text-[20px] text-textColor1">
          <p>
            We know how large objects will act, but things on a small scale.
          </p>
        </div>
        <div className="w-[339px] h-[52px] flex justify-center max-sm:mx-auto md:justify-between items-center">
          <button className="text-center text-sm font-bold px-8 bg-buttonColor text-white h-full rounded-[5px] ">
            BUY NOW
          </button>
          <button className="text-center text-sm font-bold px-12 bg-white h-full border-2 border-buttonColor text-buttonColor rounded-[5px]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fluid;
