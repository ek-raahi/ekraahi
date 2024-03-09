"use client";
import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
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
    <div>
      <div className="text-5xl font-550 text-[#3b3a3a] font-serif flex justify-center items-center py-10">
        <h1>Best Sellers</h1>
      </div>
      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    </div>
  );
};

export default BestSellers;
