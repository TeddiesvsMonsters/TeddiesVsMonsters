'use client';
import Image from 'next/image'
import Button from '../Button'
import heroImagePc from '@/assets/images/hero.png'
import backGroundImageMobile from '@/assets/images/mobile/HerobackgroundMobile.png'
import { useEffect } from 'react';
import useCartStore from '@/store/useCartStore';


const Hero = async({referer}:{referer?:string | null}) => {
  const {clearCart} = useCartStore()
  const thankyouPage = '/thank-you'

  useEffect(() => {
    if(referer?.includes(thankyouPage)) {
      localStorage.removeItem("cart")
      localStorage.removeItem("totalCartPrice")
      clearCart()
    }

  },[])

  return (
  <>
    <div className='relative -mt-[89px] h-full w-screen border-b border-white'>
      <div className="hidden sm:block">
        <Image className='h-full object-cover w-full' src={heroImagePc} alt='' width={1440} height={700} />
      </div>
      <div className="sm:hidden flex justify-center">
        <Image className='h-full object-cover' src={backGroundImageMobile} alt='' width={1440} height={700} />
      <div className='md:hidden absolute bottom-16'>
        <Button> Learn more </Button>
      </div>
      </div>
    </div>
  </>
  )
}

export default Hero

