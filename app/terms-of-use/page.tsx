import TermsOfUse from '@/components/TermsOfUse'
import PageTitleBanner from '@/components/PageTitleBanner'
import Line from '@/components/Line';

interface termsOfUse {
    children: React.ReactNode,
}

function page() {
  return (
    <div className='bg-black text-white w-full h-full'>
      <PageTitleBanner subtract={false} bgImg={false} line={true}>Terms of use</PageTitleBanner>
      <div className='container py-10'>
          <TermsOfUse/>
      <Line height={true}/>
      </div>
    </div>
  )
}

export default page