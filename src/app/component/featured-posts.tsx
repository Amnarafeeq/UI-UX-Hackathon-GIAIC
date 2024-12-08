import React from 'react'
import FeaturedPostsProp from './featured-posts-prop'

const FeaturedPosts = () => {
  return (
    <div className='max-md:w-full max-md:h-auto w-[1050px] h-[1044px]  flex flex-col justify-evenly mx-auto'>
        
        <div className='max-md:w-full max-sm:h-auto  w-[692px] h-[134px]  mx-auto  text-center flex flex-col justify-between'>
            <h4 className='text-sm text-textColor2'>Practice Advice</h4>
            <h3 className='text-[40px] text-darkBackground font-bold'>Featured Posts</h3>
            <p className='text-sm text-textColor1 w-[463px] mx-auto max-md:w-auto'>Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics  </p>
        </div>
        <div className='w-full h-[606px] flex justify-around max-md:h-auto max-md:mx-0  max-md:w-full max-md:flex-wrap'>
        <div className='w-[328px] h-full  shadow-lg'>
<FeaturedPostsProp img='/Images/f-post1.png'/> 

        </div>
        <div className='w-[328px] h-full   shadow-lg'>
<FeaturedPostsProp img='/Images/f-post2.png'/> 

        </div>
        <div className='w-[328px] h-full   shadow-lg'>
<FeaturedPostsProp img='/Images/f-post3.png'/> 

        </div>
        </div>

   </div>

// {/* <div className="w-full max-w-[1050px] mx-auto bg-orange-300 flex flex-col justify-evenly px-4 py-8">
//   <div className="w-full max-w-[692px] mx-auto text-center flex flex-col space-y-4">
//     <h4 className="text-sm text-textColor2">Practice Advice</h4>
//     <h3 className="text-[24px] md:text-[40px] text-darkBackground font-bold">Featured Posts</h3>
//     <p className="text-sm text-textColor1 mx-auto max-w-[463px]">
//       Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
//     </p>
//   </div>

//   <div className="w-full flex flex-wrap justify-center gap-4 mt-8">
//     <div className="w-full max-w-[328px] h-auto bg-slate-600 shadow-lg">
//       <FeaturedPostsProp img="/Images/f-post1.png" />
//     </div>
//     <div className="w-full max-w-[328px] h-auto bg-slate-600 shadow-lg">
//       <FeaturedPostsProp img="/Images/f-post2.png" />
//     </div>
//     <div className="w-full max-w-[328px] h-auto bg-slate-600 shadow-lg">
//       <FeaturedPostsProp img="/Images/f-post3.png" />
//     </div>
//   </div>
// </div> */}

  )
}

export default FeaturedPosts