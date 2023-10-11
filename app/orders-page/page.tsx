import Link from "next/link";
import OrdersTable from "@/components/profile/OrdersTable";
import PageTitleBanner from "@/components/PageTitleBanner";
import ProfileHeader from "@/components/profile/ProfileHeader";

const page = () => {
  return (
    <div className="w-screen bg-black text-white mx-auto">
      <PageTitleBanner subtract={false} bgImg={true} line={false}>Welcome</PageTitleBanner>
      <div className="container w-5/6 mx-auto py-10">
        <ProfileHeader />
        <div className="w-full mx-auto">
          {/* <OrdersTable /> */}
        </div>
      </div>
    </div>
  )
}

export default page