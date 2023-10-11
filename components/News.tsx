import Image from 'next/image'
import heroImagePc from '@/assets/images/hero.png'

const News = () => {
  return (
  <div className='container border border-white rounded-3xl bg-[#302F2F] max-w-[350px] md:max-w-1/3 mx-auto'>
      <div className='px-5 py-5'>
        <div className='rounded-xl'>
          <Image 
            className='rounded-lg' 
            src={heroImagePc} 
            alt='' 
            width={350} 
            height={350}/>
        </div>
        <h3 className='text-gray-500 font-semibold my-2'>05.18.2023</h3>
        <p className='mb-10'>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default News
