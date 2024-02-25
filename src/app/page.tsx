import Banner from '@/components/Banner'
import LeftNavbar from '@/components/LeftNavbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen bg-navbar-acc'>
      <LeftNavbar />
      <Banner />
    </div>
  )
}

export default page