import PageTitleBanner from '@/components/PageTitleBanner'
import TableOfContact from '@/components/TableOfContact'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Line from '@/components/Line';

interface termsOfUse {
    children: React.ReactNode,
}

function page() {
  return (
    <div className='w-screen h-full bg-black text-white'>
      <PageTitleBanner subtract={false} bgImg={false} line={true}>Privacy Policy</PageTitleBanner>
      <div className='container mx-auto py-10'>
        <div className='flex flex-col lg:flex-row w-full h-full'>
          <div className='lg:w-2/3 h-full pb-3'>
            <PrivacyPolicy/>
          </div>
          <div className='lg:w-1/3 h-full pb-3'>
            <TableOfContact/>
          </div>
        </div>            
      <Line height={true}/>
      </div>
    </div>
  )
}

export default page