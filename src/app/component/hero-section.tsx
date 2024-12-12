import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <Carousel className="w-full h-auto  max-sm:h-[100vh] ">
        <CarouselContent>
          <CarouselItem className="relative flex  items-center">
            <Image
              src="/Images/hero-img.jpg"
              alt=""
              width={600}
              height={400}
              className=" w-auto h-full max-sm:h-[100vh] "
            />

            <div className="w-auto  max-sm:text-center absolute ml-4 md:ml-20 h-auto bg--600 md:w-[599px] md:h-[331px] bg-cyan- text-white font-bold flex flex-col justify-between max-sm:space-y-5">
              <h5>SUMMER 2020</h5>
              <h1 className="md:text-[58px]">NEW COLLECTION</h1>
              <p className="bg--200 md:text-[20px] w-[376px] font-medium max-sm:w-[200px]">
                We know how large objects will act, but things on a small scale.
              </p>
              <div>
                <button className="bg-buttonColor font-bold hover:bg-green-700 px-6  py-3 rounded-[5px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/Images/hero-img2.jpg"
              alt=""
              width={600}
              height={400}
              className="w-full h-full "
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/Images/hero-img3.avif"
              alt=""
              width={600}
              height={400}
              className="w-full h-full "
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
      </Carousel>
    </>
  );
};

export default HeroSection;
