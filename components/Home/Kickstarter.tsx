import Image from 'next/image'

import bgLeft from '@/assets/images/Vector.png'
import bgRight from '@/assets/images/Vector-1.png'
import monsterLeft from '@/assets/images/Character_Monster3.png'
import monsterRight from '@/assets/images/TheElder2.png'
import Button from '../Button'

const Kickstarter = () => {
  return (
    <>
    <div id='kickstarter' className='relative block border-b border-white overflow-hidden'>
        <Image 
            src={bgLeft} 
            alt='' 
            width={548} 
            height={549} 
            className='absolute top-0 left-0 w-[218px] h-[230px] md:w-[548px] md:h-[549px]'
        />
        <Image 
            src={bgRight} 
            alt='' 
            width={548} 
            height={549} 
            className='kickstarter-bgRight absolute top-auto -bottom-5 -right-10 md:top-0 md:right-0 w-[206px] h-[170px] md:w-[548px] md:h-[549px]'
        />
        <Image 
            src={monsterLeft} 
            alt='' 
            width={472} 
            height={523} 
            className='absolute translate-y-0 top-20 left-1/3 -translate-x-1/3 w-[161px] h-[178px] md:w-[472px] md:h-[523px] md:top-1/2 md:left-1/4 md:-translate-y-1/2'
        />
        <Image 
            src={monsterRight} 
            alt='' 
            width={381} 
            height={493} 
            className='absolute top-3/4 right-20 translate-x-1/2 -translate-y-24 md:top-1/2 md:right-1/3 md:-translate-y-1/2  w-[131px] h-[169px] md:w-[381px] md:h-[493px]'
        />
        <div className='container mx-auto pt-72 pb-64 md:py-80 relative z-10'>
            <h2 className="font-title text-base text-center md:text-4xl">KicksTarter</h2>
            <div className='text-center mt-4 md:mt-20'>
                <Button>Support us</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Kickstarter