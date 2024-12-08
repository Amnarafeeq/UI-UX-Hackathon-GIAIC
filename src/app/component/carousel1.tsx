import React from 'react'

const Carousel1 = () => {
  return (
    <> <div className='relative w-full h-full'>
    <img
      src="/Images/hero-img.jpg"
      alt="Hero"
      className='w-full h-full object-cover'
    />
    <div className='absolute top-0 w-full h-full  opacity-40' />
    <div className="w-[1044px] h-[427px]   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  z-10 flex items-center">
    <div className='w-[599px] h-[331px]  flex flex-col justify-between'>
    <h4 className=" font-bold">SUMMER 2022</h4>
    <h1 className="text-[58px] font-bold">NEW COLLECTION</h1>
    <div className='w-[369px] h-[60px]  leading-8 text-[20px] '>
      <p>We know how large objects will act, 
      but things on a small scale. </p>
      
    </div>
    <button className='text-center text-[24px] font-bold bg-buttonColor h-[62px] w-[221px]'>SHOP NOW</button>
    </div>
     
    </div>
  </div></>
  )
}

export default Carousel1