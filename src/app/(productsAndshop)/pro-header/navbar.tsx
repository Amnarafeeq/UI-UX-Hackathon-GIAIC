import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { GoHeart } from 'react-icons/go'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
  

const Navbar = () => {
  return (
    <>
    <nav className='max-[902px]:hidden  h-[58px]  my-3 flex justify-around'>
   <div className='w-[187px] h-full  flex items-center  '>
    <h1 className={`text-[24px] font-bold text-darkBackground`}>Bandage</h1>
   </div>
   <div className='w-[1000px] h-full  flex justify-between items-center'>
    <div className='w-[361px] h-[25px] '>
        <ul className='flex justify-between text-textColor1 text-sm font-bold'>
            <li >
            <Link href="">Home</Link>

            </li>
                <li className='flex items-center text-[#252B42] font-medium'> <Link href="">Shop </Link> <span><MdKeyboardArrowDown /></span></li>
                <li> <Link href="">About</Link></li>
                
                <li>  <Link href="">Blog</Link></li>
                <li>   <Link href="">Contact</Link></li>
                <li><Link href="">Pages</Link></li>

        </ul>
    </div>
    <div className='w-[324px] h-[54px]  flex items-center text-textColor2'>
        <div className='w-[166px] h-[54px] flex items-center justify-evenly'>
        <FaRegUser />
        <h2 className='font-bold text-sm'>Login / Register</h2>
        </div>
        <div className='w-[46px] h-[46px]  flex justify-center items-center text-[18px]'>
        <BsSearch />
        </div>
        <div className='w-[56px] h-[46px]  flex justify-center items-center text-[18px] space-x-1'>
        <FiShoppingCart />
        <span>1</span>
        </div>
        <div className='w-[56px] h-[46px]  flex justify-center items-center text-[18px] space-x-1'>
        <GoHeart />
        <span>1</span>

        </div>

      

    </div>


   </div>
   

    </nav>
    <Sheet>
  <SheetTrigger className="absolute top-4 right-4 min-[901px]:hidden">
    <HiOutlineMenuAlt3 className="text-xl" />
  </SheetTrigger>

  <SheetContent className="min-[902px]:block fixed top-0 left-0 h-full w-full bg-white shadow-lg">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>



    </>
  )
}

export default Navbar