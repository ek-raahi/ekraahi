import Image from 'next/image'
import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import Logo from "../../public/Ek_Raahi.png"
import { RiDropdownList } from 'react-icons/ri'
import { MdArrowDropDown } from 'react-icons/md'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between px-10 mb-5 mt-5'>
        <div className='flex flex-row justify-center gap-10 w-1/3'>
            
            <p className='flex'>Shop By Category <MdArrowDropDown size={25} /></p>
            <p className='flex'>About</p>
            <p className='flex'>Contact</p>
        </div>
        <div className='w-1/3 justify-center flex '>
            <Image alt='image' className='-mt-3'  src={Logo} width={60} height={60} />
        </div>
        <div className='flex w-1/3 justify-center gap-10'>  
        <CiSearch size={25} className='mr-10' />
        <CiShoppingCart size={25} className='mr-10' />
            <p>Log in</p>
        </div>
    </div>
  )
}

export default Navbar