import React from "react";
import PNRComponents from "./PNRapp";
import train from '../../assets/trainn.png'
import mob from '../../assets/mob.png'
import Image from "next/image";
const ImageWrapper = () => {
  return (
    <div className="min-h-screen bg-white  md:bg-slate-200  flex flex-col  items-center">
      <div className="relative mx-auto">
        {/* Top Image */}
        <div className="w-full  flex h-52 lg:h-72 justify-center shadow-lg  lg:mt-4 lg:mb-8 mb-16">
          <Image src={train} alt="Top Image" className="w-full h-auto object-fit shadow-lg lg:rounded-lg" />
        </div>

        {/* PNR Component */}
        <PNRComponents />

        {/* Bottom Image */}
        <div className="w-full flex h-60 lg:h-72  justify-center lg:mt-8 mt-24 lg:mb-4 mb-0 ">
          <Image src={mob} alt="Bottom Image" className="w-full h-auto object-fit rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImageWrapper;
