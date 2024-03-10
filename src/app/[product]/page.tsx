import { Kaisei_Tokumin } from "next/font/google";
import Image from "next/image";
import React from "react";
import productImage from "@/../public/productImage.png";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const kaisei = Kaisei_Tokumin({
  weight: "500",
  subsets: ["latin"],
});

const Product = () => {
  return (
    <div  >

    <div className='h-20 bg-navbar-acc'></div>
    <div className="bg-text-acc1 py-10 px-5">

      <div className="flex flex-row">
        <div className="w-[45vw] flex ">
          <div className="w-[25%] flex flex-col gap-3">
            <Image
              alt="image"
              src={productImage}
              className="w-36 h-40"
              width={150}
              height={100}
              />
            <Image
              alt="image"
              src={productImage}
              className=" w-36 h-40"
              width={150}
              height={100}
              />

            <Image
              alt="image"
              src={productImage}
              className="w-36 h-40"
              width={150}
              height={100}
              />
          </div>
          <div className="w-[75%] relative">
            <CiHeart color="gray" className="absolute right-0 m-3" size={40} />

            <Image
              className="w-[100%] h-[90%]"
              alt="image"
              src={productImage}
              width={450}
              height={500}
              />
          </div>
        </div>
        <div className="w-[55vw] px-14 pr-20 ">
          <h1 style={kaisei.style} className="text-6xl font-semibold">
            Sleek Elegance Sleeveless Party Dress
          </h1>
          <div className="flex mt-5 items-center gap-5  ">
            <h4 style={kaisei.style} className=" text-2xl">
              Rs. 1499.00
            </h4>
            <h4 style={kaisei.style} className="line-through text-gray-600">
              Rs. 2999.00
            </h4>
            <button
              className="bg-accent-1 p-2 px-4 rounded-full text-white "
              style={kaisei.style}
              >
              {" "}
              50% OFF
            </button>
          </div>
          <div className="flex my-3">
            <FaStar size={35} color="#ebb70c" />
            <FaStar size={35} color="#ebb70c" />
            <FaStar size={35} color="#ebb70c" />
            <FaStar size={35} color="#ebb70c" />
            <CiStar size={40} color="#ebb70c" />
          </div>

          <div className="flex gap-3">
            <button className="bg-white border-[#FFe7cc] px-4 rounded-full">
              +
            </button>
            <input
              type="number"
              min={1}
              value={1}
              className="w-16 h-10 pl-2 border-[#FFe7cc] border-2 rounded-md text-center"
              />
            <button className="bg-white border-[#FFe7cc] px-4 rounded-full">
              -
            </button>
          </div>
          <div className="my-5 flex  gap-3 w-[60%]  flex-wrap  ">
            <button style={kaisei.style} className="p-1.5 text-xl bg-[#FFE7CC] px-10 rounded-2xl">S</button>
            <button style={kaisei.style} className="p-1.5 text-xl bg-[#FFE7CC] px-10 rounded-2xl">M</button>
            <button style={kaisei.style} className="p-1.5 text-xl bg-[#FFE7CC] px-10 rounded-2xl">L</button>
            <button style={kaisei.style} className="p-1.5 text-xl bg-[#FFE7CC] px-10 rounded-2xl">XL</button>
            <button style={kaisei.style} className="p-1.5 text-xl bg-[#FFE7CC] px-10 rounded-2xl">XXL</button>
            <button style={kaisei.style} className="p-1.5 text-xl bg-[#FFE7CC] px-10 rounded-2xl">XXS</button>
          </div>
        </div>
      </div>
    </div>
              </div>
  );
};

export default Product;
