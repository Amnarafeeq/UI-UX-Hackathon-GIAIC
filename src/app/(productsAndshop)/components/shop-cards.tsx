import React from 'react'
import Image from 'next/image'

const ShopCards = () => {
  return (
    <>
<div className='max-md:h-auto  w-full h-[271px]  ' >
        <div className='max-md:h-auto max-md:w-auto w-[1088px] h-[233px] bg-[#FAFAFA] mx-auto'>
            <div className='w-[205px] max-md:w-full h-full   flex max-md:flex-col max-md:space-x-0 space-x-6'>
            <Image src="/Images/shop1.png" alt="" width={206} height={233} className='max-md:w-full'/> 
            <Image src="/Images/shop2.png" alt="" width={206} height={233}  className='max-md:w-full'/> 
            <Image src="/Images/shop3.png" alt="" width={206} height={233} className='max-md:w-full'/> 
            <Image src="/Images/shop4.png" alt="" width={206} height={233} className='max-md:w-full'/> 
            <Image src="/Images/shop5.png" alt="" width={206} height={233} className='max-md:w-full'/> 
            </div>
        </div>
    </div>






    </>
  )
}

export default ShopCards