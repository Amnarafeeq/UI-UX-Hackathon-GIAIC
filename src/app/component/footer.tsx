import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const footerLinks =[
        {
            h5: "Company Info",
            link1: "About Us",
            link2: "Carrier",
            link3: "We are hiring",
            link4: "Blog",
        },
        {
            h5: "legal",
            link1: "About Us",
            link2: "Carrier",
            link3: "We are hiring",
            link4: "Blog",
        },
        {
            h5: "Features",
            link1: "Business Marketing",
            link2: "User Analytic",
            link3: "Live Chat",
            link4: "Unlimited Support",
        },
        {
            h5: "Resources",
            link1: "IOS & Android",
            link2: "Watch a Demo",
            link3: "Customers",
            link4: "API",
        },
    ]
  return (


<footer className="w-full  flex flex-col gap-y-3 justify-between shadow-lg">
  {/* Top Section */}
  <div className="w-full bg-[#FAFAFA]">
    <div className="max-w-[1050px] mx-auto flex justify-between items-center p-4">
      <h3 className="font-bold text-[24px] text-darkBackground">Bandage</h3>
      <div className="flex space-x-4 text-2xl text-textColor2">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  </div>

  {/* Links and Subscription */}
  <div className="w-full ">
    <div className="max-w-[1050px] mx-auto flex flex-wrap justify-between">
      {/* Footer Links */}
      {footerLinks.map((section, index) => (
        <div key={index} className="w-full sm:w-[152px] mb-4 sm:mb-0 flex flex-col text-sm">
          <h5 className="text-[16px] font-bold mb-2">{section.h5}</h5>
          <ul className="space-y-2">
            <li>{section.link1}</li>
            <li>{section.link2}</li>
            <li>{section.link3}</li>
            <li>{section.link4}</li>
          </ul>
        </div>
      ))}
      {/* Subscription Section */}
      <div className="w-full sm:w-[321px] flex flex-col space-y-2">
        <h5 className="text-[16px] font-bold mb-2">Get In Touch</h5>
        <div className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-1 py-2 rounded-[5px] bg-[#E6E6E6] focus:outline-none"
          />
          <button className="px-3 py-2 bg-textColor2 text-white font-bold rounded-[5px]">Subscribe</button>
        </div>
        <p className="text-textColor1 text-[12px]">Lore ipsum dolor Amit</p>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="w-full bg-[#FAFAFA] shadow-md">
    <div className="max-w-[1050px] mx-auto py-4 ">
      <h6 className="font-bold text-textColor1">Made With Love By Finland All Rights Reserved</h6>
    </div>
  </div>
</footer>

  )
}

export default Footer