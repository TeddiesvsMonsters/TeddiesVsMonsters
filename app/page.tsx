import Characters from "@/components/Home/Characters";
import Hero from "@/components/Home/Hero";
import HowtoPlay2 from "@/components/Home/HowtoPlay2";
import Merch from "@/components/Home/Merch";
import OutNow from "@/components/Home/OutNow";
import Review from "@/components/Home/Review";
import Line from "@/components/Line";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers() 
  const referer = headersList.get('referer')

  return (
      <div className="bg-black text-white">
        <Hero referer={referer} />
        <OutNow />
        <Line height={true}/>
        <HowtoPlay2 />
        <Characters />
        <Merch />
        <Line height={true}/>
        <Review />
      </div>
  )
}
