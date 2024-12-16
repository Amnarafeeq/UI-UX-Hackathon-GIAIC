import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProductImage{
    img:string
}

const ProductsProps = ({img}:IProductImage) => {
  return (
    <div>
        <Image src={img} alt='' width={200} height={300} className='w-full'/>
        <div className='font-bold p-6 space-y-3'>
            <h5 className='text-darkBackground '>Graphic Design</h5>
            <li className='list-none'><Link href="#" className='text-sm text-textColor1 '>English Department</Link></li>
            
             <h5 className='text-sm text-textColor1 '>$16.48 <span className='text-greenBackground ml-1'>$6.48</span> </h5>
        </div>
    </div>
  )
}

export default ProductsProps