import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
interface IImage {
  img: string;
}

const BestSellingProp = ({ img }: IImage) => {
  return (
    <>
      <Image height={100} width={100} src={img} alt="" className="w-full " />
      <div className="w-full h-[188px] flex flex-col justify-evenly items-center">
        <h5 className="font-bold">Graphic Design</h5>
        <h6 className="text-sm text-textColor1 font-bold">
          English Department
        </h6>
        <div className="flex space-x-2 font-bold">
          <h6 className="text-[#BDBDBD]">$16.48</h6>
          <h6 className="text-[#23856D]">$6.48</h6>
        </div>
        <div className="w-[85px] h-[16px] flex justify-between mx-auto ">
          <FaCircle className="text-[#23A6F0]" />
          <FaCircle className="text-[#23856D] " />
          <FaCircle className="text-[#E77C40] " />
          <FaCircle className="text-[#252B42] " />
        </div>
      </div>
    </>
  );
};

export default BestSellingProp;
