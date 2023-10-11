"use client";
import Image from "next/image";
// import { SwiperSlide } from "swiper/react";
import { CharactersDataType } from "./SliderCharacters";

const SwiperSlideCharacters = ({data}:CharactersDataType) => {

  return (
        <>
            <Image 
              className="max-auto mt-5" 
              height={120} 
              width={80}
              alt={data.src}
              src={data.src} 
            />
        </>
  );
}

export default SwiperSlideCharacters;