'use client'
import useFetchLocalStorage from "@/hooks/useFetchLocalStorage";
import Line from "./Line";

interface PageTitleBannerProps {
    children: string,
    subtract: boolean,
    bgImg?:boolean,
    line?:boolean,
}

const PageTitleBanner = ({children, subtract, bgImg, line}:PageTitleBannerProps) => {
  useFetchLocalStorage()
  return (
    <div>
      <div 
        className={`flex items-center justify-center gap-4 ${bgImg ? 'bg-page-title bg-no-repeat bg-cover bg-center':'bg-black'} text-center lg:pb-10 pb-5
        ${subtract ? 'before:content-subtract before:pt-24 after:content-subtract after:pt-24' : ''} md:gap-16`}>
              <h1 className='font-title font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent text-4xl md:text-6xl lg:text-8xl lg:pt-10 pt-5'>
                {children}
              </h1>
      </div>
        {line?
          <div className="">
            <Line height={false}/>
          </div>
          : ''}
    </div>
  )
}

export default PageTitleBanner