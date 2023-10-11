import PageTitleBanner from '@/components/PageTitleBanner'
import Button from "@/components/Button"
import News from "@/components/News"

const page = () => {
  const newsCount = 6;
  return (
    <div className="w-full bg-black text-white mx-auto -mt-10 lg:mt-0">
      <div className="mx-auto">
       <PageTitleBanner subtract={false} bgImg={true} line={false}>News and Events</PageTitleBanner>
      </div>
      <div className="container mx-auto px-8 flex flex-col items-center mt-10 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-8">
          {Array.from({ length: newsCount }).map((_, index) => (
            <News key={index} />
          ))}
        </div>
        <div className="mx-auto mt-12 mb-16">
          <Button>See more news</Button>
        </div>
      </div>
    </div>
  )
}

export default page;

