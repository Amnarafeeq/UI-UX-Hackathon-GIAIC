import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Carousel1 from './carousel1'
  
const HeroSection = () => {
  return (
<section className='w-full bg-pink-400 '>
  <Carousel className='w-[100%] mx-auto'>
  <CarouselContent>
    <CarouselItem className=''><Carousel1/></CarouselItem>
    <CarouselItem><img src="/Images/hero-img2.jpg" alt="" /></CarouselItem>
    <CarouselItem><img src="/Images/hero-img3.avif" alt="" className='w-full'/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
  <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
</Carousel>

</section>


  
  )
}

export default HeroSection