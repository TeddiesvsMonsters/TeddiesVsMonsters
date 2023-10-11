'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  type Swiper as SwiperType } from 'swiper'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { ImagesType } from '@/type';

const ProductSlider = ({images}:ImagesType) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
        freeMode={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          768: {
            direction: 'horizontal'
          },
          769: {
            direction:'vertical'
          }
        }}
        className='w-full md:w-1/5 lg:w-1/5 mr-0 md:mr-6'
      >
        {images && images.map((image:any, index:number) => (
        <SwiperSlide key={index}>
              <Image className='h-[95px] object-contain z-50' src={image.node.transformedSrc} alt={image.node.transformedSrc} width={115} height={95} />
        </SwiperSlide>
        ))}

      </Swiper>

      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full md:w-3/5 lg:w-2/5  z-50"

      >
        
        {images && images.map((image:any, index:number) => (
        <SwiperSlide key={index}>
          <Image className='w-full max-h-[400px] object-contain z-50' src={image.node.transformedSrc} alt={image.node.transformedSrc} width={552} height={400}/>
        </SwiperSlide>
        ))}


      </Swiper>
    </>
  );
}
export default ProductSlider