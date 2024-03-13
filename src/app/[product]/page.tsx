import { Kaisei_Tokumin } from "next/font/google";
import Image from "next/image";
import React from "react";
import productImage from "@/../public/imgg.png"
import productImage1 from "@/../public/producti1.png"
import productImage2 from "@/../public/producti2.png"
import productImage3 from "@/../public/producti3.png"
import productImage4 from "@/../public/producti4.png"
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
      <div className="flex h-[80vh]   ">

    <div className="w-2/5  h-full flex justify-center items-center   " >
      <Image src={productImage} alt="iamge" className="w-10/12 h-full "    />
    </div>
    <div className="w-3/5 h-full flex ">
      <div className="flex  justify-center items-center flex-col gap-y-3 w-2/4">
        <Image src={productImage1} className="h-[60%] w-4/5 " alt="image" />
        <Image src={productImage2} alt="image "  className="h-[40%] w-4/5 " />

      </div>
      <div className="flex flex-col justify-center items-center gap-y-3 w-2/4">
      <Image src={productImage3} alt="image" className="h-[40%] w-4/5 " />
        <Image src={productImage4} className="h-[60%] w-4/5 " alt="image" />
      </div>
    </div>
      </div>

    </div>
              </div>
  );
};

export default Product;
