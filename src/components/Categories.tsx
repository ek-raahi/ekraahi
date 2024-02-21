import Image from 'next/image'
import React from 'react'
import Category from "../images/category2.jpg"

const Categories = () => {
  return (
    <div className='flex flex-row justify-center gap-24 my-10 '>
        <div className='justify-center flex flex-col items-center'>
            <Image className='rounded-full' alt='image' width={250} height={250} src={Category}  />
            <p className='fa'>Category 1</p>
        </div>
        <div className='justify-center flex flex-col items-center'>
            <Image className='rounded-full' alt='image' width={250} height={250} src={Category}  />
            <p className='fa'>Category 2</p>
        </div>
        <div className='justify-center flex flex-col items-center'>
            <Image className='rounded-full' alt='image' width={250} height={250} src={Category}  />
            <p className='fa'>Category 3</p>
        </div>
        <div className='justify-center flex flex-col items-center'>
            <Image className='rounded-full' alt='image' width={250} height={250} src={Category}  />
            <p className='fa'>Category 4</p>
        </div>
        <div className='justify-center flex flex-col items-center'>
            <Image className='rounded-full' alt='image' width={250} height={250} src={Category}  />
            <p className='fa'>Category 5</p>
        </div>


    </div>
  )
}

export default Categories