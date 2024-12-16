import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ProductHeader = () => {
  return (
    <header className="w-full h-[92px] bg-[#f5f5f5] flex justify-center items-center px-5">
      <div className="w-[1049px] h-[44px] bg-red- flex justify-between items-center">
        <ul className="flex items-center space-x-1">
          <li>
            <Link href="/" className="text-darkBackground text-sm font-bold">
              Home
            </Link>
          </li>
          <MdOutlineArrowForwardIos className="text-textColor1" />
          <li>
            <Link href="#" className="text-sm text-textColor1">
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default ProductHeader;
