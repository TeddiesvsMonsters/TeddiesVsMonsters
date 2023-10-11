import PageTitleBanner from '@/components/PageTitleBanner'
import Line from '@/components/Line';
import SliderCharacters from '@/components/Characters/SliderCharacters'

const page = () => {
  return (
  <>
    <div className="h-full w-full bg-black text-white bg-charactersPage-pc bg-center bg-no-repeat bg-cover">
      <PageTitleBanner subtract={false} bgImg={false} line={true}>Characters</PageTitleBanner>
        <div id='characters' className='container h-full mx-auto mt-40'>
          <div className="mt-0">
            <SliderCharacters />    
          </div>
        </div>
        <Line height={false}/>
    </div>
    <div className="bg-black w-full h-24"></div>
  </>
  );
};

export default page;
