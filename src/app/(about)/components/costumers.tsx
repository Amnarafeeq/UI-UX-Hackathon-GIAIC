import React from 'react'

const Costumers = () => {
  return (
<div className='w-[1018px] h-[188px] bg-slate-400 mx-auto my-6 flex  justify-between items-center'>
        <div className='w-full h-[104px] flex  justify-evenly bg-purple-100 '> 
            <div className='w-[238px] h-full flex justify-center items-center flex-col bg-yellow-100'>
                <h1 className='text-[58px] text-darkBackground font-bold' >15K</h1>
                <h5 className='text-textColor1'>Happy Customers</h5>
            </div>
            <div className=' flex justify-center items-center flex-col bg-yellow-100'>
            <h1 className='text-[58px] text-darkBackground font-bold'>150K</h1>
            <h5 className='text-textColor1'>Monthly Visitors</h5>

            </div>
            <div className=' flex justify-center items-center flex-col bg-yellow-100'>
            <h1 className='text-[58px] text-darkBackground font-bold'>15</h1>
            <h5 className='text-textColor1'>Countries  Worldwide</h5>

            </div>
            <div className=' flex justify-center items-center flex-col bg-yellow-100'>
            <h1 className='text-[58px] text-darkBackground font-bold'>100+</h1>
                <h5 className='text-textColor1'>Top Partners</h5>
            </div>
        </div>

    </div>
  )
}

export default Costumers