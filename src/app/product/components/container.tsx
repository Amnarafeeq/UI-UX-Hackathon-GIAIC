import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Container = () => {
  return (
    <>
      <div className="lg:w-[1051px] h-[72px]  mx-auto text-sm text-textColor1 font-medium flex items-center justify-center my-1 shadow-sm">
        <ul className="flex max-md:text-xs gap-x-2 lg:gap-x-8">
          <li>
            <Link href="#">Description</Link>
          </li>
          <li>
            <Link href="#">Additional Information</Link>
          </li>
          <li>
            <Link href="#">
              Reviews <span className="text-greenBackground">(0)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:w-[1056px] lg:h-[499px]  flex justify-evenly mx-auto max-md:flex-col max-md:p-3 mt-3 ">
        <div className="md:w-[322px] lg:h-[392px] bg-[#C4C4C433] rounded-2xl pt-1">
          <Image
            src="/Images/product3.png "
            alt=""
            width={300}
            height={400}
            className="max-md:w-full max-md:h-auto"
          />
        </div>
        <div className="md:w-[322px] h-[427px]  p-1 flex justify-between flex-col max-md:items-center max-md:px-20">
          <h3 className="text-[24px] font-bold text-darkBackground">
            the quick fox jumps over{" "}
          </h3>
          <p className="text-sm text-textColor1">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-sm text-textColor1">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-sm text-textColor1">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="w-full md:w-[322px] md:h-[367px]  flex flex-col justify-between font-bold max-md:items-center">
          <h3 className="text-[24px]  text-darkBackground">
            the quick fox jumps over{" "}
          </h3>
          <div className="text-sm text-textColor1 ">
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
          </div>

          <h3 className="text-[24px]  text-darkBackground">
            the quick fox jumps over{" "}
          </h3>
          <div className="text-sm text-textColor1 ">
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
            <span className="flex space-x-3">
              <MdArrowForwardIos />{" "}
              <h6>the quick fox jumps over the lazy dog</h6>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
