import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdWindow } from 'react-icons/md'
import { VscChecklist } from 'react-icons/vsc'

const  Filter = () => {
  return (
    <>
      <div className=' h-auto w-full md:h-[98px] my-3 shadow-md px-5'> 
        <div className='w-full lg:w-[1050px] h-full  mx-auto max-md:flex-col gap-y-4 my-4 flex justify-between items-center'>
            <div className='md:w-[168px] md:h-[24px] text-sm text-textColor1 font-bold'>
                <p>Showing all 12 results</p>
            </div>
            <div className='w-[177px] h-[46px] flex justify-between items-center text-textColor1'>
                <h6 className='text-sm font-bold'>Views:
                </h6>
                <div className='border-2 border-textColor1 rounded-lg p-2 text-[20px]'>
            <MdWindow className=' '/>

                </div>
           <div className='border-2 border-textColor1 rounded-lg p-2 text-[20px] '>
           <VscChecklist />
           </div>
            </div>
            <div className='w-[252px] h-[50px] flex justify-between items-center text-sm'>
                <div className='flex items-center border-[1px] border-black px-5 py-3 bg-[#F9F9F9] text-textColor1 rounded-[6px] space-x-1'> 
                    <button className=' rounded-[5px]'>Popularity</button>
                    <IoIosArrowDown />

                </div>
                <button className=' px-5 py-3 rounded-[5px] font-bold bg-textColor2 text-white'>Filter</button>
            </div>

        </div>
        </div>  





    </>
  )
}

export default Filter