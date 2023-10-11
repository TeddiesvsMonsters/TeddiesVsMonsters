"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";

import SliderAbout from "./SliderAbout";

function Static() {
  return (
    <div>
      <div className="sm:hidden block absolute left-0 right-0 lg:bottom-0 lg:top-[32rem] top-[16rem] bottom-0 w-full">
        <div className="pl-[1rem]">
          <SliderAbout />
        </div>
      </div>
    </div>
  );
}

export default Static;
