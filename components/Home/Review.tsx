import Youtube2 from "./Youtube2";

const Review = () => {
  return (
      <>
        <div className='w-full sm:pt-6 md:-pt-5 lg:pt-0'>
          <div className='container sm:relative mx-auto sm:max-w-[580px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1100px]text-center'>
              <div className='sm:absolute sm:z-20 inset-0 flex justify-center items-center '>
                <h3 className='px-4 sm:-mt-[600px] md:-mt-[570px] lg:-mt-[570px] max-w-[380px] font-title uppercase font-bold text-xl sm:text-3xl bg-black'>What people are saying</h3>
              </div>
              <div className='md:absolute sm:z-10 sm:top-6 md:top-0 sm:w-full sm:h-[90px] md:h-[119px] mx-5 sm:mx-0 my-10 sm:mb-16 flex justify-center items-center sm:border sm:rounded-[8px] sm:border-zinc-700 sm:bg-gradient-to-t sm:from-zinc-600 sm:to-black sm:bg-opacity-30'>
                  <p className='text-zinc-400'>
                    &quot;I love this Game. It&apos;s easy to play, art is great and it&apos;s f*cking fun!&quot;
                  </p>
            </div>
            <div className='relative w-full px-8 sm:px-12 md:pt-52 pb-5'>
              {/* Make sure to change className after max-w-[600px] when you deploy or show iframe */}
              <Youtube2 width={600} height={400} classProps={'max-h-[240px] sm:max-h-[400px] max-w-[600px] w-[300px] h-[200px] md:w-[600px] md:h-[400px]'}/>
            </div>
          </div>
          </div>
      </>
  )
}

export default Review;