import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <nav className="max-[902px]:hidden  h-[58px]  my-3 flex justify-around">
        <div className="w-[187px] h-full  flex items-center  ">
          <h1 className={`text-[24px] font-bold text-darkBackground`}>
            Bandage
          </h1>
        </div>
        <div className="w-[1000px] h-full  flex justify-between items-center">
          <div className="w-[361px] h-[25px] ">
            <ul className="flex justify-between text-textColor1 text-sm font-bold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center text-[#252B42] font-medium">
                {" "}
                <Link href="/shop">Shop </Link>{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </li>
              <li>
                {" "}
                <Link href="/about">About</Link>
              </li>

              <li>
                {" "}
                <Link href="">Blog</Link>
              </li>
              <li>
                {" "}
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="">Pages</Link>
              </li>
            </ul>
          </div>
          <div className="w-[324px] h-[54px]  flex items-center text-textColor2">
            <div className="w-[166px] h-[54px] flex items-center justify-evenly">
              <FaRegUser />
              <h2 className="font-bold text-sm">Login / Register</h2>
            </div>
            <div className="w-[46px] h-[46px]  flex justify-center items-center text-[18px]">
              <BsSearch />
            </div>
            <div className="w-[56px] h-[46px]  flex justify-center items-center text-[18px] space-x-1">
              <FiShoppingCart />
              <span>1</span>
            </div>
            <div className="w-[56px] h-[46px]  flex justify-center items-center text-[18px] space-x-1">
              <GoHeart />
              <span>1</span>
            </div>
          </div>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger className=" min-[901px]:hidden  flex justify-between items-center py-3 px-4 w-full">
          {/* <div className='flex justify-between  bg-red-300'> */}
          <h1 className={`text-[24px] font-bold text-darkBackground`}>
            Bandage
          </h1>

          <HiOutlineMenuAlt3 className="text-2xl" />
          {/* </div> */}
        </SheetTrigger>

        <SheetContent className="min-[902px]:block w-full bg-white shadow-lg">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="flex flex-col justify-center items-center ">
              <ul className="flex items-center flex-col justify-between text-textColor1 text-sm mt-12 space-y-5 font-bold">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="flex items-center text-[#252B42] font-medium">
                  {" "}
                  <Link href="/shop">Shop </Link>{" "}
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </li>
                <li>
                  {" "}
                  <Link href="/about">About</Link>
                </li>

                <li>
                  {" "}
                  <Link href="">Blog</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="">Pages</Link>
                </li>
              </ul>
              <div className="flex flex-col items-center text-textColor2">
                <div className="w-[166px] h-[54px] flex items-center justify-evenly">
                  <FaRegUser />
                  <h2 className="font-bold text-sm">Login / Register</h2>
                </div>
                <div className="w-[46px] h-[46px]  flex justify-center items-center text-[18px]">
                  <BsSearch />
                </div>
                <div className="w-[56px] h-[46px]  flex justify-center items-center text-[18px] space-x-1">
                  <FiShoppingCart />
                  <span>1</span>
                </div>
                <div className="w-[56px] h-[46px]  flex justify-center items-center text-[18px] space-x-1">
                  <GoHeart />
                  <span>1</span>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
