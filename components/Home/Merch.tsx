import Image from 'next/image'
import Goods from '@/assets/images/Goods.png'
import Button from '../Button'

const Merch = () => {
  return (
    <>
      <div className='h-full w-screen text-center'>
        <span className="block font-title uppercase text-[85px] sm:text-[130px] md:text-[170px] lg:text-[210px] xl:text-[280px] 
        text-transparent bg-clip-text bg-gradient-to-b from-[rgb(255,255,255,0.8)] to-[rgb(255,255,255,0)] md:-mb-96">Merch</span>
        <div className='container mx-auto'>
          <div className='relative z-10 flex flex-col justify-center items-center'>
            <div className='-mt-[90px] sm:-mt-[140px] md:mt-[210px] lg:mt-[160px] xl:mt-[90px] px-10 sm:px-20 md:px-32 xl:px-0'>
                <Image 
                className='mx-auto'
                src={Goods} 
                alt='' 
                width={700} 
                height={700} 
                // className='absolute top-0 left-0 w-[218px] h-[230px] md:w-[548px] md:h-[549px]'
              />
            </div>
            <div className='mt-8 sm:-mt-3 mb-7'>
            <Button>Online store</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Merch;