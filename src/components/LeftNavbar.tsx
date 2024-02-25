import React from 'react'

const LeftNavbar = () => {
  return (
    <div className='fixed -left-[21rem] top-[28rem]  transform -rotate-90 flex flex-col justify-between'>
      <ul className='flex flex-row gap-4  '>
      <li className='cursor-pointer px-6 py-4 text-xl text-text-acc1 rounded-full hover:bg-text-acc1 hover:text-navbar-acc '>Contact Us</li>
      <li className='cursor-pointer px-6 py-4 text-xl text-text-acc1 rounded-full hover:bg-text-acc1 hover:text-navbar-acc'>Best Sellers</li>
      <li className='px-6 py-4 text-xl cursor-pointer text-text-acc1 rounded-full hover:bg-text-acc1 hover:text-navbar-acc'>3d Trial</li>
      <li className='px-6 py-4 text-xl cursor-pointer text-text-acc1 rounded-full hover:bg-text-acc1 hover:text-navbar-acc'>Top Categories</li>
        <li className='px-6 py-4  text-xl cursor-pointer  text-text-acc1 rounded-full  hover:bg-text-acc1 hover:text-navbar-acc'>Home</li>
      </ul>
    </div>
  )
}

export default LeftNavbar
