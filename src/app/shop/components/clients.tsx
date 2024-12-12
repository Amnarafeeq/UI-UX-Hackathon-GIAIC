import React from 'react'
import { FaAws, FaLyft, FaPiedPiperHat, FaRedditAlien, FaStripe } from 'react-icons/fa'
import { FaHooli } from 'react-icons/fa6'

const Clients
 = () => {
  return (
    <div className='w-full max-md:h-auto h-[175px] bg-[#fafafa]  flex justify-center items-center'>
    <div className='w-[1000px] max-md:w-full h-full mx-auto text-textColor1 flex justify-evenly max-md:mx-0 max-md:py-4 max-md:flex-col items-center text-[90px] '>
   <FaHooli />
    <FaLyft />
    <FaPiedPiperHat />
    <FaStripe />
    <FaAws />
    <FaRedditAlien />
  
</div>
    </div>
  )
}

export default Clients
