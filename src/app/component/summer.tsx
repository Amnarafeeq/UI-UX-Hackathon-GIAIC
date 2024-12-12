import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";

const Summer = () => {
  return (
    <>
      <Carousel className="w-full h-full  max-h-[100vh] p-6">
        <CarouselContent>
          <CarouselItem className="w-full h-auto bg-greenBackground flex flex-col justify-end items-center ">
            <div className="w-full h-auto lg:w-[1049px] md:h-[600px] flex flex-col md:flex-row items-center justify-between max-sm:gap-y-20  text-white">
              <div className=" h-auto lg:w-[509px] md:pl-7 md:h-[432px] flex flex-1 flex-col md:justify-between gap-y-5 mb-4  max-sm:text-center ">
                <h4 className="text-sm max-sm:text-center md:text-[20px]">
                  SUMMER 2020
                </h4>
                <h1 className="font-bold max-sm:text-center text-[40px] md:text-[58px]">
                  Vita Classic Product
                </h1>
                <p className="text-sm w-[250px] max-sm:text-center max-sm:mx-auto md:w-[341px]">
                  We know how large objects will act, We know how are objects
                  will act, We know
                </p>
                <div className="flex items-center max-sm:mx-auto space-x-3 md:justify-evenly font-bold w-[295px]  ">
                  <h3 className="text-sm md:text-[24px] ">$16.48</h3>
                  <button className="py-3 bg-buttonColor px-8 rounded-[5px] text-sm ">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="w-full h-full md:w-[509px] flex-1 flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src="/Images/summer1.png"
                  alt=""
                  className="w-auto h-[300px] md:w-full md:h-full   "
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img
              src="/Images/summer2.avif"
              alt=""
              className="h-[700px] w-full  "
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/Images/summer3.avif"
              alt=""
              className="w-full h-[700px] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className=" left-10 " />
        <CarouselNext className=" right-10 " />
      </Carousel>
    </>
  );
};

export default Summer;
