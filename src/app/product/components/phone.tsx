import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoEye } from "react-icons/io5";
import { MdStarOutline } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

const Phone = () => {
  return (
    <div className="lg:w-[1050px] lg:h-[598px] bg-[#fafafa] mx-auto flex justify-between p-4  max-md:flex-col">
      <div className="w-full lg:w-[510px] md:h-[550px]  flex flex-col justify-between ">
        <div className="w-full md:h-[450px]">
          <Image
            src="/Images/product1.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
        <div className="w-[219px] h-[75px] flex justify-between">
          <Image src="/Images/product2.jpg" alt="" width={100} height={80} />
          <Image src="/Images/product1.jpg" alt="" width={100} height={80} />
        </div>
      </div>
      <div className=" w-full lg:w-[510px] h-[471px]  p-5 flex flex-col  max-md:items-center justify-evenly">
        <h4 className="text-[20px] text-darkBackground">Floating Phone</h4>
        <div className="w-[220px] h-[24px]  flex items-center justify-between">
          <div className="flex text-[#F3CD03] text-xl space-x-2">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
            <MdStarOutline />
          </div>
          <h6 className="text-sm text-textColor1 font-bold">10 Reviews</h6>
        </div>
        <h3 className="text-[24px] font-bold">$1,139.33</h3>
        <div className="w-[159px] h-[24px]  text-sm font-bold flex justify-between items-center">
          <h6 className="text-textColor1">Availability :</h6>
          <h6 className="text-textColor2">In Stock </h6>
        </div>
        <p className="text-sm text-textColor1 md:w-[464px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <hr />
        <div className="w-[150px] h-[30px]  flex justify-evenly items-center text-[25px]">
          <FaCircle className="text-[#23A6F0]" />
          <FaCircle className="text-[#23856D] " />
          <FaCircle className="text-[#E77C40] " />
          <FaCircle className="text-[#252B42] " />
        </div>
        <div className="w-[298px] h-[44px]  flex justify-between">
          <button className="bg-textColor2 text-white text-sm font-bold px-6 rounded-[6px]">
            Select Option
          </button>
          {/* <div className='flex justify-between items-center'> */}
          <div className="w-[40px] h-[40px]  border-[1px] rounded-full flex justify-center items-center text-xl">
            <CiHeart />
          </div>
          <div className="w-[40px] h-[40px]  border-[1px] rounded-full flex justify-center items-center text-xl">
            <FiShoppingCart />
          </div>
          <div className="w-[40px] h-[40px]  border-[1px] rounded-full flex justify-center items-center text-xl">
            <IoEye />
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Phone;
