import React from "react";
import BestSellingProp from "./best-selling-prop";

const bestSellingItems1 = [
  { id: 1, img: "/Images/best-sell1.png" },
  { id: 2, img: "/Images/best-sell2.png" },
  { id: 3, img: "/Images/best-sell3.png" },
  { id: 4, img: "/Images/best-sell4.png" },
];

const bestSellingItems2 = [
  { id: 1, img: "/Images/best-sell5.png" },
  { id: 2, img: "/Images/best-sell6.png" },
  { id: 3, img: "/Images/best-sell7.png" },
  { id: 4, img: "/Images/best-sell8.png" },
];

const BestSeller = () => {
  return (
    <>
      <div className="w-full h-auto lg:h-[1652px] bg-[#fafafa] ">
        <div className="w-full lg:w-[1050px] h-full mx-auto flex flex-col justify-evenly gap-y-4 p-5">
          <div className="w-full lg:w-[692px] h-auto lg:h-[102px] mx-auto  text-center flex flex-col justify-between gap-y-4">
            <h4 className="text-[20px] text-textColor1">Featured Products</h4>
            <h3 className="text-lg lg:text-[24px] text-darkBackground font-bold">
              BESTSELLER PRODUCTS
            </h3>
            <p className="text-sm text-textColor1">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>

          <div className="w-full h-auto lg:w-[1049px] lg:h-[615px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {bestSellingItems1.map((item) => (
              <div key={item.id} className="w-full lg:w-[238px] h-full">
                <BestSellingProp img={item.img} />
              </div>
            ))}
          </div>

          <div className="w-full h-auto lg:w-[1049px] lg:h-[615px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-between">
            {bestSellingItems2.map((item) => (
              <div key={item.id} className="w-full lg:w-[238px] h-full">
                <BestSellingProp img={item.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
