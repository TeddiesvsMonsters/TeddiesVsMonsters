'use client'

import { useEffect, useState } from "react"

interface Youtube2Props {
    width: number,
    height: number,
    classProps?: string,
}

const Youtube2 = ({width, height, classProps}:Youtube2Props) => {

  return (
    <>
    <div className={`bg-youtube-cover bg-no-repeat bg-center bg-contain mx-auto ${classProps} cursor-pointer`}></div>
    {/* <iframe 
      className={`w-full aspect-auto mx-auto ${classProps}`}
      width={`${width}`}  
      height={`${height}`} 
      src="https://www.youtube.com/embed/pCLj3EmADXw"
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      
    >
    </iframe> */}
    </>
  )
}

export default Youtube2
