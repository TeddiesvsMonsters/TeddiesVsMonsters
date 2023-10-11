"use client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Line from "../Line";
import { CharactersDataType } from "./SliderCharacters";

const SwiperSlideCharacterData = ({data}:CharactersDataType) => {
  return (
        <div className='flex flex-col md:flex-row md:justify-between mx-auto lg:mx-12 '>
          <div className="w-1/2 md:w-1/3 xl:w-1/2 mx-auto pt-0 md:pt-5 xl:pt-0 pl-5 lg:pl-0 xl:pl-[18px]">
            <Image 
              className="mx-auto xl:ml-[100px]" 
              height={450} 
              width={300}
              alt={data.src}
              src={data.src} 
            />
          </div>

          <div className="md:w-2/3 xl:w-1/2 mx-auto mt-10 md:mt-0">
            <div className='bg-black bg-opacity-50 text-white text-opacity-60 h-[330px] sm:h-[260px] md:h-[320px] lg:h-[400px] w-5/6 md:w-[400px] lg:w-[550px] mx-auto lg:ml-10 xl:ml-0'>
              <Line height={false}/>
              <div className="px-10 lg:px-20 py-10 md:py-12 lg:py-16">
                <h3 className="font-title uppercase text-3xl md:text-4xl pb-2 md:pb-3">{data.name}</h3>
                <h5 className="text-lg md:text-xl">Strength:{data.strength}</h5>
                <h5 className="text-lg md:text-xl pb-2 md:pb-4">Weakness:{data.weakness}</h5>
                <p className="text-justify text-sm md:text-md lg:text-lg">{data.description}</p>
              </div>
            </div>
            <Line height={false}/>
          </div>
        </div>
  );
}

export default SwiperSlideCharacterData;