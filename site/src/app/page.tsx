import BestSellers from '@/components/BestSellers'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NewArrivals from '@/components/NewArrivals'
import NewEra from '@/components/NewEra'
import Recommended from '@/components/Recommended'
import ServicesIcon from '@/components/ServicesIcon'
import SideMenu from '@/components/SideMenu'
import TopCategories from '@/components/TopCategories'
import React from 'react'


const page = () => {
  return (
    <div>
      <SideMenu/>
      <Hero/>
      <TopCategories/>
      <NewArrivals/>
      <ServicesIcon/>
      <NewEra/>
      <BestSellers/>
      {/* <Recommended/> */}
    </div>
  )
}

export default page