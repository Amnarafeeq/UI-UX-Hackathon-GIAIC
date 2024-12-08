import Image from 'next/image'
import React from 'react'

const Fluid = () => {
  return (
  

    <div className="w-full  flex flex-col md:flex-row items-center justify-evenly mx-auto mt-32 py-8 md:h-[682px] space-y-8 md:space-y-0">
  {/* Image Section */}
  <div className="w-full md:w-[704px]  flex justify-center items-center">
    <div className="border-[1px] border-gray-400">
      <Image
        src="/Images/fluid.png"
        alt="Fluid Design"
        width={600}
        height={600}
        className="w-[300px] md:w-[600px] h-auto"
      />
    </div>
  </div>

  {/* Text Section */}
  <div className="w-full md:w-[573px] flex flex-col justify-between space-y-4 md:space-y-0 px-4">
    <h4 className="text-[#BDBDBD] font-bold text-sm md:text-base">SUMMER 2022</h4>
    <h1 className="text-[28px] md:text-[40px] font-bold text-darkBackground leading-tight">
      Part of the Neural Universe
    </h1>
    <p className="text-sm md:text-[20px] text-textColor1 leading-relaxed">
      We know how large objects will act, but things on a small scale.
    </p>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <button className="text-center text-sm font-bold px-6 py-2 md:px-8 bg-buttonColor text-white rounded-[5px]">
        BUY NOW
      </button>
      <button className="text-center text-sm font-bold px-8 py-2 md:px-12 bg-white border-2 border-buttonColor text-buttonColor rounded-[5px]">
        READ MORE
      </button>
    </div>
  </div>
</div>

  )
}

export default Fluid