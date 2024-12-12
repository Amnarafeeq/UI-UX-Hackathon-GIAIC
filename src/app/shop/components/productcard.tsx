import BestSellingProp from '@/app/component/best-selling-prop'
import Image from 'next/image'
import React from 'react'
// import PCardProp from './product-card-prop'

const images = [
   "/Images/img1.png",
   "/Images/img2.png",
   "/Images/img3.png",
   "/Images/img4.png",
   "/Images/img5.png",
   "/Images/img6.png",
   "/Images/img7.png",
   "/Images/img8.png",
   "/Images/img9.png",
   "/Images/img10.png",
   "/Images/img11.png",
   "/Images/img12.png",
 ];

const ProductCard = () => {
  return (
    <>
    {/* <div className='h-auto w-full md:h-[1778px] bg-gray-500 '>
<div className='w-auto lg:w-[1124px] h-full bg-red-900 mx-auto  '>


<div className='w-full h-auto  lg:w-[1049px] md:h-[1500px] bg-green-300 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 '>
  {images.map((img, index) => (
    <div
      key={index}
      className='w-full lg:w-[238px] h-full bg-purple-300 flex flex-col '
    >
      <BestSellingProp img={img} />
    </div>
  ))}
</div>

<div className='max-md:w-auto max-md:h-auto w-[1049px] h-[488px] bg-green-300 mx-auto  max-md:flex-col flex justify-between max-md:mx-0'>
        <div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

   <BestSellingProp img="/Images/img1.png"/>
   </div>

   <div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img2.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

   <BestSellingProp img="/Images/img3.png"/>
   </div>
   <div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

   <BestSellingProp img="/Images/img4.png"/>
   </div>
   </div>



   <div className='max-md:w-auto max-md:h-auto w-[1049px] h-[488px] bg-green-300 mx-auto  max-md:flex-col flex justify-between max-md:mx-0'>
   <div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img5.png"/>
</div>

<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img6.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img7.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img8.png"/>
</div>
   </div>



   <div className='max-md:w-auto max-md:h-auto w-[1049px] h-[488px] bg-green-300 mx-auto  max-md:flex-col flex justify-between max-md:mx-0'>
   <div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img9.png"  />
</div>

<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img10.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img11.png"/>
</div>
<div className='max-md:w-full w-[238px] h-full bg-purple-300 flex flex-col justify-between' >

<BestSellingProp img="/Images/img12.png"/>
</div>
   </div>


 <Image  src="/Images/pagination.png" height={300} width={300} alt='' className='mx-auto'/>
</div>
    </div> */}
        
   
        <div className=' w-auto h-auto lg:h-[1778px]  max-lg:p-9'>
  <div className='w-full lg:w-[1004px] h-auto  mx-auto '>
    <div className='w-auto h-auto lg:w-[1029px]  lg:h-[1500px]  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {images.map((img, index) => (
        <div
          key={index}
          className='w-full lg:w-[238px] h-auto  flex flex-col'
        >
          <BestSellingProp img={img} />
        </div>
      ))}
    </div>

      <div className='w-[313px] h-[74px] bg-white text-textColor2 font-bold text-sm  flex items-center justify-evenly rounded-[6px] mx-auto my-8'>
         <button className='border-[1px] border-[#BDBDBD] text-[#BDBDBD] w-[84px] h-full rounded-l-[6px]'>First</button>
         <button className='border-[1px] border-[#BDBDBD] w-[49px] h-full'>1</button >
         <button className='border-[1px] border-[#BDBDBD] bg-textColor2 text-white w-[49px] h-full'>2</button>
         <button className='border-[1px] border-[#BDBDBD] w-[49px] h-full'>3</button>
         <button className='border-[1px] border-[#BDBDBD] w-[84px] h-full rounded-r-[6px]'>Next</button>

      </div>

 {/* <Image  src="/Images/pagination.png" height={300} width={300} alt='' className='mx-auto'/> */}

  </div>
</div>


    </>
  )
}

export default ProductCard