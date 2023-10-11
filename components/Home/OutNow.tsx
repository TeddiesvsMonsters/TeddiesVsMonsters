import Image from 'next/image'
import BoxSet from '@/assets/images/BoxSet.png'
import Button from '../Button'

const OutNow = () => {
  
  return (
    <>
      <div className='container relative mx-auto md:px-5 lg:px-4 md:py-5 lg:py-16'>
        <div className="relative z-10 flex justify-between flex-col md:gap-10 lg:gap-5 xl:gap-0 md:mt-[150px] lg:mt-[140px] xl:mt-[200px] md:flex-row">
          <div className='md:block md:max-w-[700px] flex justify-center items-center'>
              <Image 
              className='px-24 sm:px-12 md:px-0 lg:px-6 2xl:px-0 mt-24 sm:mt-36 mb-10 sm:mb-12 md:my-0 md:ml-0 xl:ml-20'
              src={BoxSet} 
              alt='' 
              width={429} 
              height={306} 
              // className='absolute top-0 left-0 w-[218px] h-[230px] md:w-[548px] md:h-[549px]'
            />
          </div>                     
          <div className='flex flex-col justify-between mx-10 sm:mx-auto md:mx-3 lg:mx-10 sm:max-w-[530px] md:max-w-[555px] md:w-1/2 mb-3 md:mb-0'>
            <p className='text-justify text-md xl:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique purus luctus nibh tempus molestie. 
            Sed enim risus, convallis ac condimentum at, lobortis in nisl. Morbi ante ipsum, laoreet ac posuere nec, dapibus 
            vitae nulla. Sed porta ullamcorper fringilla. Nulla bibendum erat eget lorem pretium vulputate.
            </p>
            <div className='mx-auto mt-5 sm:mt-7 lg:mt-0 xl:mb-5'>
              <Button width={'mx-auto'}>Buy now</Button>
            </div>
          </div>
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 top-3 md:top-0 text-center w-full font-title uppercase text-[85px] sm:text-[150px] md:text-[170px] lg:text-[210px] xl:text-[280px] text-transparent bg-clip-text bg-gradient-to-b from-[rgb(255,255,255,0.8)] to-[rgb(255,255,255,0)]">Out now</span>
      </div>
    </>
  )
}

export default OutNow;