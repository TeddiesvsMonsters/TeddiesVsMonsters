// font-face-title = use the font in global css classname for titls
import Image from "next/image";
import Line from "./Line";

interface TitlePage {
    title:string

}

function Title({title}:TitlePage) {
  return (
    <div className="h-[240px] md:h-[300px] w-screen">
      <div className="text-center md:pt-7 lg:pt-0">
      {/* <div className="w-full h-full bg-black pt-[5rem] pb-[4rem] text-center "> */}
          <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent text-4xl md:text-6xl lg:text-8xl pt-24">{title}</h1>
          {/* <h1 className="font-face-title text-transparent capitalize bg-clip-text text-[80px] bg-gradient-to-b from-[rgb(255,255,255,0.8)] to-[rgb(255,255,255,0)]">{title}</h1> */}
      </div>
      <div className="mt-14 md:mt-[67px] lg:mt-[60px]">
        <Line />
      </div>
    </div>
  )
}

export default Title