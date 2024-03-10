"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const images = [
  {
    image: "/cat1.jpg",
    text: "Trend Tops",
  },
  {
    image: "/cat2.jpg",
    text: "Ethnic Extravaganza",
  },
  {
    image: "/cat3.jpg",
    text: "Everyday Elegance",
  },
  {
    image: "/cat4.jpg",
    text: "Light, Camera, Fashion",
  },
  {
    image: "/cat5.jpg",
    text: "Cultural Couture",
  },
  {
    image: "/cat6.jpg",
    text: "Ethereal Allure",
  }
];

const TopCategories = () => {
  return (
    <div id='topCategories'>
      <div className='text-5xl font-{550} text-[#3b3a3a] font-serif flex justify-center items-center py-10 '>
        <h1>Top Categories</h1>
      </div>
      <div className='h-[67vh] w-[72vw] m-auto'>
        <Swiper
          slidesPerView={4}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          className=' h-full'
        
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable:true , enabled: true }}
        >
          {images.map((item, index) => (
            <SwiperSlide className='h-full' key={index}>
              <div className="relative h-full bg-yellow-400">
                <div className="absolute inset-0 flex  justify-center fade1 hover:bg-transparent duration-700 bg-opacity-50 text-white text-3xl">
                          <h2 className='mt-[10vh] w-3/4 text-center'>{item.text}</h2>
                </div>
                <Image src={item.image} alt="Category Image"  width={300} height={300} className='w-full h-full' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopCategories;
