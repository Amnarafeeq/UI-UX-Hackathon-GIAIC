import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { GoHeart } from 'react-icons/go'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { FaArrowRightLong } from 'react-icons/fa6'
  

const Navbar = () => (
    <>
        <nav className='max-[902px]:hidden  h-[58px]  my-3 flex justify-around'>
            <div className='w-[187px] h-full  flex items-center  '>
                <h1 className={`text-[24px] font-bold text-darkBackground`}>Bandage</h1>
            </div>
            <div className='w-[1000px] h-full  flex justify-between items-center'>
                <div className='w-[361px] h-[25px] '>
                    <ul className='flex justify-between text-textColor1 text-sm font-bold'>
                        <li>
                            <Link href="/">Home</Link>

                        </li>
                        <li className='flex items-center text-[#252B42] font-medium'> <Link href="/shop">Shop </Link> <span><MdKeyboardArrowDown /></span></li>
                        <li> <Link href="/about">About</Link></li>

                        <li>  <Link href="">Blog</Link></li>
                        <li>   <Link href="">Contact</Link></li>
                        <li><Link href="">Pages</Link></li>

                    </ul>
                </div>
                <div className='w-[324px] h-[54px]  flex items-center text-textColor2 justify-evenly '>
                    <div className='w-[36px] h-[54px] flex items-center justify-\ '>

                        <h2 className='font-bold text-sm'>Login</h2>

                    </div>

                    <div className='flex justify-evenly items-center text-sm  px-4 space-x-2 py-3 bg-textColor2 text-white font-bold rounded-[5px]'>
                        <button>Become a member</button>
                        <FaArrowRightLong />

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

export default Navbar