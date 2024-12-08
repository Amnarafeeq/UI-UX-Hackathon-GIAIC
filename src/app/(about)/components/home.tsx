import React from 'react'

const AboutHomePage = () => {
  return (
    <div className='w-[1200px] mx-auto  bg-yellow-200  '>
        <div className="bg-cover  bg-center bg-[url('/Images/background.png')] h-screen flex items-center">
        <div className='w-[599px] h-[321px] bg-red-300 flex  flex-col justify-evenly '>
            <h5 className='text-darkBackground font-bold'>ABOUT COMPANY</h5>
            <h1 className='text-darkBackground text-[58px] font-bold '>ABOUT US</h1>
            <p className='text-textColor1 text-sm w-[376px]'>We know how large objects will act, 
            but things on a small scale</p>
            <div>
            <button className='bg-textColor2 text-white text-sm px-5 py-4 font-bold rounded-[5px]'>Get Quote Now</button>


            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutHomePage