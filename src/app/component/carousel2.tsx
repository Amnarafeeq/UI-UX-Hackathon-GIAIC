import React from 'react'

const Carousel2 = () => {
  return (
    <div className='max-lg:h-auto w-full h-[709px] bg-greenBackground flex items-center'> 
    <div className='w-[1049px] h-[599px] max-sm:w-auto max-sm:h-auto bg-gray- mx-auto flex max-md:flex-col gap-y-6 items-center justify-between max-md:mt-5'>
        <div className='max-md:w-full max-md:h-auto max-md:text- w-[509px] max-md:gap-y-4 max-md:text-center h-[432px] b-300 flex flex-col justify-between text-white'>
    <h4 className="text-[20px] max-md:text-sm">SUMMER 2022</h4>
    <h1 className="text-[58px] font-bold max-md:text-lg">Vita Classic Product</h1>
    <div className='w-[369px] h-[60px]  leading-8 text-[20px] max-md:w-full max-md:h-auto'>
      <p className='text-sm '>We know how large objects will act, We know how are objects will act, We know</p>
      
    </div>
    <div className='max-md:w-auto max-md:h-auto w-[295px] h-[52px] flex justify-evenly items-center'>
        <p className='text-[24px] font-bold '>$16.48</p>
    <button className='text-center text-sm font-bold px-4 bg-buttonColor h-full rounded-[5px] max-md:py-2'>ADD TO CART</button>

    </div>
    </div>
        <div className='max-md:w-auto max-md:h-auto w-[519px] h-[685px] b-300 '>
            <img src="/Images/summer1.png" alt="" />
        </div>
    </div>
</div>




  )
}

export default Carousel2