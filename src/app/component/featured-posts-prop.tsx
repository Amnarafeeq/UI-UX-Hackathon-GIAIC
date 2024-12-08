import Image from 'next/image'
import React from 'react'
import { IoMdImage } from 'react-icons/io'
import { LuAlarmClock } from 'react-icons/lu'
import { MdArrowForwardIos, MdKeyboardArrowRight } from 'react-icons/md'
interface IFImage{
    img:string
}
const FeaturedPostProp = ({img}:IFImage) => {
  return (

<>
  <div className="relative">
    <Image
      src={img}
      alt="Product Image"
      width={348}
      height={300}
      className="w-full h-auto"
    />
    <h6 className="absolute top-2 left-2  py-1 px-3 text-xs sm:text-sm font-bold text-white rounded-[5px]">
      NEW
    </h6>
  </div>

  <div className="w-full  flex flex-col justify-around px-4 py-6 space-y-4">
    {/* Tags */}
    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-textColor1">
      <h6 className="text-[#8EC2F2]">Google</h6>
      <h6>Trending</h6>
      <h6>New</h6>
    </div>

    {/* Title */}
    <h4 className="text-lg sm:text-xl font-semibold">
      Loudest à la Madison #1 (L'integral)
    </h4>

    {/* Description */}
    <p className="text-sm text-textColor1">
      We focus on ergonomics and meeting you where you work. It's only a
      keystroke away.
    </p>

    {/* Info Section */}
    <div className="flex justify-between text-xs sm:text-sm">
      {/* Date */}
      <div className="flex items-center gap-2">
        <LuAlarmClock className="text-textColor2" />
        <p className="text-textColor1">22 April 2021</p>
      </div>
      {/* Comments */}
      <div className="flex items-center gap-2">
        <IoMdImage className="text-greenBackground" />
        <p className="text-textColor1">10 comments</p>
      </div>
    </div>

    {/* Learn More */}
    <div className="flex items-center space-x-1 w-full sm:w-auto  px-4 py-2 rounded-md">
      <h6 className="text-sm font-bold text-textColor1">Learn More</h6>
      <MdArrowForwardIos className="text-textColor2" />
    </div>
  </div>
</>


  )
}

export default FeaturedPostProp