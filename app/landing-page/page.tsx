import Characters from '@/components/Home/Characters'
import Hero from '@/components/Home/Hero'
import HowtoPlay2 from "@/components/Home/HowtoPlay2";
import Kickstarter from '@/components/Home/Kickstarter'


const page = () => {
  return (
    <div className="bg-black text-white">
        <Hero />
        <Characters />
        <HowtoPlay2 />
        <Kickstarter />
       </div>
  )
}

export default page