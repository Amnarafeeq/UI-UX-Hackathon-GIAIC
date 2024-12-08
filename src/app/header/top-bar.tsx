import React from 'react'
import {Montserrat } from 'next/font/google'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'


const montserrat = Montserrat({subsets:["latin"]})

const TopBar = () => {
  return (
    
    <header className={ `hidden md:block h-[58px] bg-darkBackground text-white text-[14px] font-bold py-[5px] ${montserrat.className}`}>
<div className='h-[46px] flex  items-center justify-between mx-4'>
    <div className='w-[415px] h-full  flex justify-between'>
        <div className='w-[145px] h-[44px] b flex items-center justify-evenly'>
        <LuPhone />
        <span>(225) 555-0118</span>
        </div>
        <div className='w-[260px] h-[44px] b flex justify-evenly items-center'>
        <MdOutlineEmail />
        <span className=''>michelle.rivera@example.com</span>
        
        </div>

    </div>
    <div className='w-[343px] h-[44px]  flex items-center justify-center'>
        <p >Follow Us  and get a chance to win 80% off</p>
    </div>

    <div className='w-[233px] h-full  flex justify-evenly items-center'>
        <h2 >Follow Us :</h2>
        <div className='w-[120px] h-[26px]  flex justify-between items-center text-[20px]'>
        <FaInstagram />
        <IoLogoYoutube />
        <FaFacebook />
        <FaTwitter />
        </div>
    </div>

</div>
    </header>
  )
}

export default TopBar