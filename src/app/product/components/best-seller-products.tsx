import React from "react";
import ProductsProps from "./products-prop";

const productImages = [
  "/Images/product5.png",
  "/Images/product6.png",
  "/Images/product7.png",
  "/Images/product8.png",
  "/Images/product9.png",
  "/Images/product10.png",
  "/Images/product5.png",
  "/Images/product6.png",
];

const BestSellerProducts = () => {
  return (
    <>
      <div className="lg:w-[1124px] lg:h-[1086px] bg-[#fafafa] mx-auto">
        <h3 className="text-darkBackground text-[24px] font-bold">
          BESTSELLER PRODUCTS
        </h3>
        <div className=" lg:w-[1049px] lg:h-[950px]  mx-auto grid grid-cols-1 md:grid-cols-3 max-md:p-4 lg:grid-cols-4 gap-5 p-2">
          {productImages.map((image, index) => {
            return (
              <div key={index} className="md:w-[238px] lg:h-[442px]  ">
                <ProductsProps img={image} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestSellerProducts;
