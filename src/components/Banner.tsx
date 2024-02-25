import React from 'react'
import {Inter} from 'next/font/google'


const inter = Inter({subsets: ['latin'],
weight: '600'})
const Banner = () => {
  return (
    <div className='w-full h-full  '>
        <div className='w-3/5 h-full    bg-[url("../../public/banner1.png")]  bg-no-repeat bg-cover bg-center bg-opacity-50 flex justify-center  pt-56 text-white font-bold '>
            {/* <div className='w-3/5 h-full absolute   bg-black bg-opacity-40'></div> */}
            <h1 style={inter.style} className='text-7xl text-center'>FLAT 50% OFF
        
                <br />
                <span className='text-3xl'>
 ON 1ST ORDER </span></h1>
        </div>
        <div className='w-2/5'></div>
    </div>
  )
}

export default Banner