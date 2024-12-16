import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => (
  <>
    <nav className="max-[902px]:hidden h-[68px] py-4  flex justify-around items-center px-6">
      <div className="w-[187px] h-full  flex items-center  ">
        <h1 className={`text-[24px] font-bold text-darkBackground`}>Bandage</h1>
      </div>
      <div className="w-[1000px] h-full  flex justify-between items-center">
        <div className="w-[275px] h-[25px]">
          <ul className="flex items-center justify-between text-textColor1 text-sm font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>

            <li>
              {" "}
              <Link href="/pricing">Pricing</Link>
            </li>

            <li>
              {" "}
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-[324px] h-[54px]  flex items-center text-textColor2 justify-evenly ">
          <div className="w-[36px] h-[54px] flex items-center justify-\ ">
            <h2 className="font-bold text-sm">Login</h2>
          </div>

          <Link href="/member" className="flex justify-evenly items-center text-sm  px-4 space-x-2 py-3 bg-textColor2 text-white font-bold rounded-[5px]">
            <button>Become a member</button>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </nav>
    <Sheet>
      <SheetTrigger className=" min-[901px]:hidden  flex justify-between items-center py-3 px-4 w-full">
        {/* <div className='flex justify-between  bg-red-300'> */}
        <h1 className={`text-[24px] font-bold text-darkBackground`}>Bandage</h1>

        <HiOutlineMenuAlt3 className="text-2xl" />
        {/* </div> */}
      </SheetTrigger>

      <SheetContent className="min-[902px]:block w-full bg-white shadow-lg">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="flex justify-center items-center ">
            <ul className="flex flex-col   text-textColor1 text-lg font-bold mt-20 space-y-7">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="">Product</Link>
              </li>

              <li>
                {" "}
                <Link href="/about">Pricing</Link>
              </li>

              <li>
                {" "}
                <Link href="">Contact</Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </>
);

export default Navbar;
