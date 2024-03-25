"use client";
import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

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

const BestSellers = () => {
  return (
    <div id="bestsellers" className="pb-40">
      <div className="text-5xl font-550 text-[#3b3a3a] font-serif flex justify-center items-center py-10">
        <h1>Best Sellers</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">

      <div className=" h-[70vh] w-[85vw] gap-4">
        <Swiper
          slidesPerView={4}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          spaceBetween={20}
          className=" h-full"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true, enabled: true }}
          >
          {ImageArray.map((item, index) => (
            <SwiperSlide className="h-full" key={index}>
              <div className="relative h-full bg-yellow-400">
              <div className="absolute inset-0 flex top-3/4 mt-10 bg-black py-10 h-fit    justify-center    duration-700 bg-opacity-80 text-white text-3xl">
                          <h2 className=' bottom-0 w-3/4 text-center'>{item.text}</h2>
                </div>
                <Image src={item.image} alt="Category Image"  width={300} height={300} className='w-full h-full' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     

          </div>
    </div>
  );
};

export default BestSellers;
