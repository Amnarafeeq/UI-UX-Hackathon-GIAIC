import React from 'react'
import BestSellingProp from './best-selling-prop'

const BestSeller = () => {
  return (
    <>
    

<div className="w-full  py-8">
  <div className="w-full max-w-[1124px] mx-auto flex flex-col space-y-8">
    {/* Header Section */}
    <div className="w-full max-w-[692px] mx-auto text-center flex flex-col space-y-2">
      <h4 className="text-[16px] md:text-[20px] text-textColor1">
        Featured Products
      </h4>
      <h3 className="text-[20px] md:text-[24px] text-darkBackground font-bold">
        BESTSELLER PRODUCTS
      </h3>
      <p className="text-sm text-textColor1">
        Problems trying to resolve the conflict between
      </p>
    </div>

    {/* Product Grid Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <BestSellingProp img="/Images/best-sell1.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell2.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell3.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell4.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell1.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell2.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell3.png" />
      </div>
      <div>
        <BestSellingProp img="/Images/best-sell4.png" />
      </div>
    </div>
  </div>
</div>

     </>
  )
}

export default BestSeller