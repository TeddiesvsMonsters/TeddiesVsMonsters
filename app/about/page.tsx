import Image from "next/image";

import AboutImagePagePc from "@/assets/images/aboutBackGroundPagePc.png";
import AboutImagePageMobile from "@/assets/images/mobile/aboutBackGroundPageMobile.png";

import Static from "@/components/Static";
import PageTitleBanner from "@/components/PageTitleBanner";

const page = () => {
  return (
    <div className="relative">
      <PageTitleBanner subtract={false} bgImg={false} line={true}>
        About us
      </PageTitleBanner>
      <div className="hidden sm:block">
        <Image
          className=" h-full object-cover w-full"
          src={AboutImagePagePc}
          alt=""
          width={1440}
          height={700}
        />
      </div>
      <div className="block sm:hidden">
        <Image
          className="h-full object-cover w-full"
          src={AboutImagePageMobile}
          alt=""
          width={1440}
          height={700}
        />
      </div>
      <Static />
      <div className=" h-[1px] bg-gradient-to-r from-0% from-black via-white via-49% to-black to-100% ">
        {" "}
      </div>
      <div className="bg-black w-full h-[10rem] text-[24px] flex justify-center items-center">
        <p className="text-[rgb(255,255,255,0.5)]">“Quick, Chaotic, Fun!”</p>
      </div>
      <div className=" h-[1px] bg-gradient-to-r from-0% from-black via-white via-49% to-black to-100%">
        {" "}
      </div>
    </div>
  );
};
export default page;
