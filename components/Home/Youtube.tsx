interface YoutubeProps {
    width: number,
    height: number,
    classProps?: string,
}

const Youtube = ({width, height, classProps}:YoutubeProps) => {
  
  return (

    <iframe 
    className={`w-full h-screen aspect-auto ${classProps}`}
    width={`${width}`}  
    height={`${height}`} 
    src="https://www.youtube.com/embed/pCLj3EmADXw"
    title="YouTube video player" 
    // frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    // allowfullscreen
    >
    </iframe>
  )
}

export default Youtube
