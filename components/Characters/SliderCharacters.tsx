"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { type Swiper as SwiperType } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';
import monster1 from "@/assets/images/Characters/monster01.png";
import monster2 from "@/assets/images/Characters/monster02.png";
import monster3 from "@/assets/images/Characters/monster03.png";
import monster4 from "@/assets/images/Characters/monster04.png";
import teddy1 from "@/assets/images/Characters/teddy01.png";
import teddy2 from "@/assets/images/Characters/teddy02.png";
import teddy3 from "@/assets/images/Characters/teddy03.png";
import teddy4 from "@/assets/images/Characters/teddy04.png";
import teddy5 from "@/assets/images/Characters/teddy05.png";

import SwiperSlideCharacterData from "./SwiperSlideCharacterData";
import SwiperSlideCharacters from "./SwiperSlideCharacters";

const CHARACTERS_DATA = [
  {
    src:monster1,
    name:"Monster1",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:monster2,
    name:"Monster2",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:monster3,
    name:"Monster3",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:monster4,
    name:"Monster4",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:teddy1,
    name:"Teddy1",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:teddy2,
    name:"Teddy2",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:teddy3,
    name:"Teddy3",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:teddy4,
    name:"Teddy4",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
  {
    src:teddy5,
    name:"Teddy5",
    strength:"",
    weakness:"",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate tincidunt fermentum. Nullam accumsan magna vel est ultricies, a tristique velit sodales. Phasellus porta at enim eleifend faucibus."
  },
]

export interface CharactersDataType {
  data:{
    src:string,
    name:string,
    strength:string,
    weakness:string,
    description:string
  }
}

const SliderCharacters = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <div>
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {CHARACTERS_DATA.map((data:any) => (
            <SwiperSlide key={data.name}>
              <SwiperSlideCharacterData data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="hidden md:block lg:mx-10 pb-0 md:my-10 lg:ml-20 lg:mr-16">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={0}
          slidesPerView={9}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {CHARACTERS_DATA.map((data:any) => (
            <SwiperSlide key={data.name}>
              <SwiperSlideCharacters data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );  
};

export default SliderCharacters;