import React from 'react'
import Image from 'next/image'

const ShopCards = () => {
  return (
    <>
<div className='h-auto  w-full lg:h-[271px] bg-[#fafafa]' >
        <div className='h-auto w-full lg:w-[1050px] lg:h-[233px] max-lg:px-8 max-sm:py-4 gap-y-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2'>
            <Image src="/Images/shop1.png" alt="" width={206} height={233} className='  w-full'/> 
            <Image src="/Images/shop2.png" alt="" width={206} height={233}  className=' w-full'/> 
            <Image src="/Images/shop3.png" alt="" width={206} height={233} className='  w-full'/> 
            <Image src="/Images/shop4.png" alt="" width={206} height={233} className='  w-full'/> 
            <Image src="/Images/shop5.png" alt="" width={206} height={233} className='  w-full'/> 
           

        </div>
    </div>









    </>
  )
}

export default ShopCards