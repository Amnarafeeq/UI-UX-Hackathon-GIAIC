import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdWindow } from 'react-icons/md'
import { VscChecklist } from 'react-icons/vsc'

const Filter = () => {
  return (
    <>
      <div className='max-md:h-auto w-full h-[98px]  '> 
        <div className='max-md:w-full w-[1050px] h-full  mx-auto max-md:flex-col max-sm:gap-y-4 max-sm:my-4 flex justify-between items-center'>
            <div className='w-[168px] h-[24px]  text-sm text-textColor1 font-bold'>
                <p>Showing all 12 results</p>
            </div>
            <div className='w-[177px] h-[46px]  flex justify-between items-center text-textColor1'>
                <h6 className='text-sm font-bold'>Views:
                </h6>
                <div className='border-2 border-textColor1 rounded-lg p-2 text-[20px]'>
            <MdWindow className=' '/>

                </div>
           <div className='border-2 border-textColor1 rounded-lg p-2 text-[20px] '>
           <VscChecklist />
           </div>
            </div>
            <div className='w-[252px] h-[50px]  flex justify-between items-center text-sm'>
                <div className='flex items-center border-2 border-black px-5 py-3 bg-[#F9F9F9] text-textColor1 rounded-[6px] space-x-1'> 
                    <button className=' rounded-[5px]'>Popularity</button>
                    <IoIosArrowDown />

                </div>
                <button className='border-2 border-black px-5 py-3 rounded-[5px] font-bold bg-textColor2 text-white'>Filter</button>
            </div>

        </div>
        </div>  



    </>
  )
}

export default Filter