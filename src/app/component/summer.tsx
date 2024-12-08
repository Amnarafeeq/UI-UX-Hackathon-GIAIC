import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import Carousel2 from './carousel2'

const Summer = () => {
  return (
    <>
 <Carousel className='w-[100%]  h-[600px]'>
  <CarouselContent>
    <CarouselItem className=''><Carousel2/></CarouselItem>
    <CarouselItem><img src="/Images/summer2.avif" alt="" className='h-[700px] w-full  '/></CarouselItem>
    <CarouselItem><img src="/Images/images (1).jpeg" alt="" className='w-full h-[700px] object-cover'/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
  <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
</Carousel>
    </>
  )
}

export default Summer