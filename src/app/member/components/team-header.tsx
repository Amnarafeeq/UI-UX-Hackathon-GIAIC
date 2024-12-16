import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const TeamHeader = () => {
  return (
    <div className="lg:w-[870px] lg:h-[280px]  mx-auto flex flex-col items-center justify-center gap-y-1">
      <h5 className="text-textColor1">WHAT WE DO</h5>
      <h1 className="text-darkBackground text-[30px] text-center lg:text-[58px] font-bold ">
        Innovation tailored for you
      </h1>
      <ul className="flex items-center space-x-1">
        <li>
          <Link href="/" className="text-darkBackground text-sm font-bold">
            Home
          </Link>
        </li>
        <MdOutlineArrowForwardIos className="text-textColor1" />
        <li>
          <Link href="#" className="text-sm text-textColor1">
            Team
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamHeader;
