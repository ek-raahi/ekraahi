"use client"
import React, { useState, useEffect } from 'react';

const SideMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const heroSection = document.getElementById('hero');
    const topCategoriesSection = document.getElementById('topCategories');
    const newArrivalsSection = document.getElementById('newArrivals');
    const bestsellersSection = document.getElementById('bestsellers');
    console.log(scrollY, heroSection?.offsetTop, topCategoriesSection?.offsetTop, newArrivalsSection?.offsetTop, bestsellersSection?.offsetTop)
    if (heroSection && scrollY >= 0 && scrollY <= 800) {
      setActiveSection('hero');
    } else if (topCategoriesSection && scrollY >= 800 && scrollY < 1500) {
      setActiveSection('topCategories');
    } else if (newArrivalsSection && scrollY >= 1500 && scrollY < 2700) {
      setActiveSection('newArrivals');
    } else if (bestsellersSection && scrollY >= 2700) {
      setActiveSection('bestsellers');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (to: string) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col fixed left-0 h-[88%] gap-10 w-[60px] bg-transparent mt-[80px] pb-5 items-center justify-around z-10'>
      <button onClick={() => handleClick("hero")} className={`text-[#d5d0c3] -rotate-90 text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full ${activeSection === "hero" ? "bg-[#E6E0D2] text-slate-800 font-semibold" : "bg-transparent"} hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold`}>Home</button>
      <button onClick={() => handleClick("topCategories")} className={`text-[#d5d0c3] -rotate-90 text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full ${activeSection === "topCategories" ? "bg-[#E6E0D2] text-slate-800 font-semibold" : "bg-transparent"} hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold`}>Top Categories</button>
      <button onClick={() => handleClick("newArrivals")} className={`text-[#d5d0c3] -rotate-90 text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full ${activeSection === "newArrivals" ? "bg-[#E6E0D2] text-slate-800 font-semibold" : "bg-transparent"} hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold`}>New Arrivals</button>
      <button onClick={() => handleClick("bestsellers")} className={`text-[#d5d0c3] -rotate-90 text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full ${activeSection === "bestsellers" ? "bg-[#E6E0D2] text-slate-800 font-semibold" : "bg-transparent"} hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold`}>Best Sellers</button>
    </div>
  );
};

export default SideMenu;
