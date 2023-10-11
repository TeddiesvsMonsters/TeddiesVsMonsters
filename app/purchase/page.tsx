// import OrderOverview from '@/components/Purchase/OrderOverview';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const Page = async () => {
 /*  const session = await getServerSession(authOptions);
  if(!session){
    redirect("/")
  } */
  return (
    <div className='w-full bg-black text-white'>
      <div className='container mx-auto flex flex-col md:flex-row md:flex-between py-10 md:py-20'>
        {/* <OrderOverview /> */}
      </div>
    </div>
  );
};

export default Page;
