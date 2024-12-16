import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="lg:w-[1250px] lg:h-[530px]  mx-auto flex justify-between max-md:flex-col my-2">
      <div className="lg:w-[43%]  p-1">
        <Image
          src="/Images/team1.png"
          alt=""
          height={300}
          width={400}
          className="w-full h-full"
        />
      </div>
      <div className="lg:w-[55%]   grid grid-cols-2 gap-2 p-1">
        <div className=" lg:w-[340px] h-[260px]  ">
          <Image
            src="/Images/team2.png"
            alt=""
            height={300}
            width={200}
            className="w-full h-full"
          />
        </div>
        <div className="  lg:w-[340px] h-[260px]  ">
          <Image
            src="/Images/team3.png"
            alt=""
            height={300}
            width={200}
            className="w-full h-full"
          />
        </div>
        <div className=" lg:w-[340px] h-[260px]  ">
          <Image
            src="/Images/team4.png"
            alt=""
            height={300}
            width={200}
            className="w-full h-full"
          />
        </div>
        <div className=" lg:w-[340px] h-[260px]  ">
          <Image
            src="/Images/team5.png"
            alt=""
            height={300}
            width={200}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
