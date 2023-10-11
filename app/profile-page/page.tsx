import Link from "next/link";

import PageTitleBanner from "@/components/PageTitleBanner";
import UserProfileForm from "@/components/profile/UserProfileForm";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { redirect } from "next/navigation";

const page = () => {

  redirect("/");
  

  return (
    <div className="w-full bg-black text-white mx-auto">
      <div className="mx-auto">
        <PageTitleBanner subtract={false}>Welcome</PageTitleBanner>
      </div>
      <ProfileHeader />
      <div className="bg-black">
          <div className="mt-6 w-full col-span-2 p-8 justify-center justify-self-center mx-auto text-white text-center text-lg">
            {/* <UserProfileForm /> */}
          </div>
        </div>
      </div>
  );
};

export default page;