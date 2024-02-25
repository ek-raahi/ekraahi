import React from 'react'
import { Kaisei_Tokumin } from 'next/font/google'
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



const kaisei = Kaisei_Tokumin({
    weight: '800',
    subsets: ['latin'],
    
  })
  
  
  const Navbar = () => {
  return (
    <div className='w-full py-5 px-10 absolute  bg-navbar-acc bg-opacity-40 flex justify-between ' >
<h1 style={kaisei.style} className='text-25px text-text-acc1 ml-5' >

        Ek<span className='text-accent-1'>Raahi</span>
        </h1>
        <div>
            <ul className='flex mt-2 gap-10'>
                <li>
                <IoSearchOutline color='white' size={30} />

                </li>
                <li>
                <FaShoppingBag color='white' size={30} />

                </li>
                <li>
                <FaUser color='white' size={30} />

                </li>
            </ul>
        </div>
        </div>
  )
}

export default Navbar