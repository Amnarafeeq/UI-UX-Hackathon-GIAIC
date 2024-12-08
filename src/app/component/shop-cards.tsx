import React from 'react'

const ShopCards = () => {
  return (
    <>
 

<div className="w-full h-auto md:h-[770px] bg-lightBackground">
  <div className="w-full max-w-[1050px] h-auto md:h-full  mx-auto flex flex-col justify-evenly items-center px-4">

    {/* Title Section */}
    <div className="w-full md:w-[607px] h-[62px]  text-center mb-4">
      <h3 className="text-[24px] font-bold">EDITOR’S PICK</h3>
      <p className="text-sm text-textColor1">Problems trying to resolve the conflict between</p>
    </div>

    {/* Product Cards Section */}
    <div className="w-full h-auto  flex flex-wrap justify-between space-y-4 md:space-y-0">

      {/* MEN Card */}
      <div className="w-full md:w-[510px] h-[500px]  relative">
        <img src="/Images/shop-card1.png" alt="Men" className="absolute w-full h-full object-cover" />
        <h5 className="absolute bottom-[50px] left-[31px] bg-white text-darkBackground font-bold px-[65px] py-[20px]">
          MEN
        </h5>
      </div>

      {/* WOMEN Card */}
      <div className="w-full md:w-[240px] h-[500px]  relative">
        <img src="/Images/shop-card2.png" alt="Women" className="absolute w-full h-full object-cover" />
        <h5 className="absolute bottom-[50px] left-[25px] bg-white text-darkBackground font-bold px-[30px] py-[20px]">
          WOMEN
        </h5>
      </div>

      {/* Accessories and Kids Cards */}
      <div className="w-full md:w-[240px] h-[500px]  flex flex-col justify-between space-y-4 md:space-y-0">

        {/* ACCESSORIES Card */}
        <div className="w-full h-[242px] relative">
          <img src="/Images/shop-card3.png" alt="Accessories" className="absolute w-full h-full object-cover" />
          <h5 className="absolute bottom-[20px] left-[31px] bg-white text-darkBackground font-bold px-[20px] py-[20px]">
            ACCESSORIES
          </h5>
        </div>

        {/* KIDS Card */}
        <div className="w-full h-[242px] relative">
          <img src="/Images/shop-card4.png" alt="Kids" className="absolute w-full h-full object-cover" />
          <h5 className="absolute bottom-[20px] left-[31px] bg-white text-darkBackground font-bold px-[40px] py-[20px]">
            KIDS
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>



    </>



  )
}

export default ShopCards