import BestSellingProp from '@/app/component/best-selling-prop'
import Image from 'next/image'
import React from 'react'
// import PCardProp from './product-card-prop'

const ProductCard = () => {
  return (
    <>
    <div className='max-md:h-auto w-full h-[1778px]  '>
<div className='max-md:w-auto w-[1124px] h-full  mx-auto flex flex-col justify-evenly'>


<div className='max-md:w-auto max-md:h-auto w-[1049px] h-[488px]  mx-auto  max-md:flex-col flex justify-between max-md:mx-0'>
        <div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

   <BestSellingProp img="/Images/img1.png"/>
   </div>

   <div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img2.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

   <BestSellingProp img="/Images/img3.png"/>
   </div>
   <div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

   <BestSellingProp img="/Images/img4.png"/>
   </div>
   </div>
   <div className='max-md:w-auto max-md:h-auto w-[1049px] h-[488px]  mx-auto  max-md:flex-col flex justify-between max-md:mx-0'>
   <div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img5.png"/>
</div>

<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img6.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img7.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img8.png"/>
</div>
   </div>

   <div className='max-md:w-auto max-md:h-auto w-[1049px] h-[488px]  mx-auto  max-md:flex-col flex justify-between max-md:mx-0'>
   <div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img9.png"  />
</div>

<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img10.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img11.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full  flex flex-col justify-between' >

<BestSellingProp img="/Images/img12.png"/>
</div>
   </div>


 <Image  src="/Images/pagination.png" height={300} width={300} alt='' className='mx-auto'/>
</div>
    </div>
        
   
    </>
  )
}

export default ProductCard