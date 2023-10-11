"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import monster1 from "@/assets/images/monster01.png";
import monster2 from "@/assets/images/monster02.png";
import teddy1 from "@/assets/images/teddy01.png";
import teddy2 from "@/assets/images/teddy02.png";
import useWindowSize from "@/hooks/useWindowSize";

const Slider = () => {
  const size = useWindowSize();
  const smWindowSize = 420;

  return (
    size > 0 && (
      <Swiper
        style={{ cursor: "grab" }}
        effect={"coverflow"}
        initialSlide={4}
        breakpoints={{
          smWindowSize: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          580: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 170,
          depth: 50,
          modifier: size < smWindowSize ? 1 : 0,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={teddy1}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={monster1}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={teddy2}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={monster2}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            className="mx-auto"
            src={teddy1}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={monster1}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={monster2}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={teddy2}
            alt=""
            width={300}
            height={391}
          />
        </SwiperSlide>
      </Swiper>
    )
  );
};

export default Slider;
