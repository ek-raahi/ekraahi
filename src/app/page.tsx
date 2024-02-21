import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
   <div className='p-5 h-screen '>
    <Navbar />
    <Banner />
    <Categories />  
   </div>
  )
}

export default Home