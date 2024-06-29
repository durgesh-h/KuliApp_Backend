import React from "react";
import PNRComponents from "./PNRapp";
import train from '../../assets/trainn.png'
import mob from '../../assets/mob.png'
import Image from "next/image";
const ImageWrapper = () => {
  return (
    <div className=" bg-white  flex flex-col  items-center">
      <div className="relative  w-full lg:px-0">
        {/* Top Image */}
        <div className="w-full  flex lg:h-[30rem] justify-center shadow-lg  lg:mt-0 lg:mb-4 ">
          <Image src={train} alt="Top Image" className="w-full h-auto object-fit shadow-lg " />
        </div>

        {/* PNR Component */}
        <PNRComponents />

        {/* Bottom Image */}
        <div className="w-full flex  lg:h-[30rem]  justify-center lg:mt-4  lg:mb-0 mb-0 ">
          <Image src={mob} alt="Bottom Image" className="w-full h-auto object-fit rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImageWrapper;
