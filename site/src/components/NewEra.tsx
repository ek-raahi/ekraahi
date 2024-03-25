"use client"
import React from 'react'
import InstagramTemp from './InstagramTemp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules'
const ImageArray = [
  {
    image: "/cat6.jpg",
    text: "Party Time",
  },
  {
    image: "/cat6.jpg",
    text: "Day Out",
  },
  {
    image: "/cat6.jpg",
    text: "Girls Night Out",
  },
  {
    image: "/cat6.jpg",
    text: "Airport Look",
  },
  {
    image: "/cat6.jpg",
    text: "Kitchen Look",
  },
  {
    image: "/cat6.jpg",
    text: "Traditional Look",
  },
];

const NewEra = () => {
  return (
    <div className='bg-navbar-acc '>

        <div className="text-5xl font-550 text-text-acc1 font-serif flex justify-center items-center pt-10">
        <h1>New Era, New Elegance</h1>
      </div>
    <div className=' flex w-full h-screen justify-center items-center bg-navbar-acc'>
      <div className='w-10/12 flex items-center justify-center  bg-navbar-acc'>

              <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
              }}
          slidesPerView={3}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          // navigation={true}
          className=' h-full'
          
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
          {ImageArray.map((_, index) => (
            <SwiperSlide className='h-full' key={index}>
              <InstagramTemp/>
            
            </SwiperSlide>
          ))}
        </Swiper>
          </div>
    </div>
          </div>
  )
}

export default NewEra