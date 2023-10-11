"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import boyM from "@/assets/images/boyM.png";
import girlM from "@/assets/images/girlM.png";
import monsterM from "@/assets/images/monsterM.png";
import useWindowSize from "@/hooks/useWindowSize";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  ReactPortal,
} from "react";

const Slider = () => {
  const size = useWindowSize();
  const smWindowSize = 300;

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
            slidesPerView: 1,
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
        modules={[EffectCoverflow]}>
        <SwiperSlide>
          <Image
            className="mx-auto "
            src={girlM}
            alt=""
            width={200}
            height={291}
          />
          {imageText.map((text) => (
            <>
              <div className="text-sm px-10 text-justify pt-3  bg-black mr-5  ml-5  bg-opacity-20  ">
                <p className="text-[#CE8C3D]">
                  {" "}
                  {text.titleOne}{" "}
                  <span className="text-white w-full ">{text.girlText}</span>
                </p>
              </div>
            </>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={monsterM}
            alt=""
            width={200}
            height={291}
          />
          {imageText.map((text) => (
            <>
              <div className="text-sm px-10 text-justify pt-3  bg-black mr-5  ml-5  bg-opacity-20  ">
                <p className="text-[#CE8C3D]">
                  {" "}
                  {text.titleTwo}{" "}
                  <span className="text-white w-full">{text.monsterText}</span>
                </p>
              </div>
            </>
          ))}
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="mx-auto"
            src={boyM}
            alt=""
            width={200}
            height={291}
          />
          {imageText.map((text) => (
            <>
              <div className="text-sm px-10 text-justify pt-3  bg-black mr-5  ml-5  bg-opacity-20  ">
                <p className="text-[#CE8C3D]">
                  {" "}
                  {text.titleThree}{" "}
                  <span className="text-white w-full ">{text.boyText}</span>
                </p>
              </div>
            </>
          ))}
        </SwiperSlide>
      </Swiper>
    )
  );
};

export default Slider;

export const imageText = [
  {
    girlText: `dolor sit amet, consectetur adipiscing elit. Aliquam et suscipit ante, eu eleifend mauris. Ut rhoncus urna quis posuere sagittis. Suspendisse convallis arcu eu magna efficitur consectetur. Etiam a sollicitudin turpis. Praesent dapibus, libero ullamcorper pharetra maximus, eros dui viverra massa, eget porta nibh dolor ut velit. Phasellus in faucibus tortor. `,
    titleOne: "Lorem ipsum",
  },
  {
    monsterText: `(WMG) is a board game design and publishing company based in Vancouver BC dedicated in designing great themed board games. Working in innovative and imaginative themes to deliver great quality games.`,
    titleTwo: "We Make Games",
  },
  {
    boyText: `dolor sit amet, consectetur adipiscing elit. Aliquam et suscipit ante, eu eleifend mauris. Ut rhoncus urna quis posuere sagittis. Suspendisse convallis arcu eu magna efficitur consectetur. Etiam a sollicitudin turpis. Praesent dapibus, libero ullamcorper pharetra maximus, eros dui viverra massa, eget porta nibh dolor ut velit. Phasellus in faucibus tortor. `,
    titleThree: "Lorem ipsum",
  },
];
