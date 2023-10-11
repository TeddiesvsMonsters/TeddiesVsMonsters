import { BiDownload } from 'react-icons/bi'
import Button from '../Button'
import Youtube2 from './Youtube2'

const HowtoPlay2 = () => {
  return (
    <>
            <div className='container mx-auto py-11 md:py-20 lg:py-16 px-4'>
            <h2 className="block md:hidden font-title uppercase text-center text-4xl xl:text-5xl">How to play?</h2>
            <div className=" flex justify-between flex-col gap-10 md:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <div className="max-w-[700px]">
                        {/* Make sure to change className after xl:pl-20 when you deploy or show iframe */}
                        <Youtube2 width={480} height={320} classProps={'lg:max-h-[363px] my-8 xl:pl-20 w-[300px] h-[200px] md:w-[400px] md:h-[240px] lg:w-[500px] lg:h-[400px]'}/>
                    </div>
                </div> 
                <div className='w-full flex flex-col justify-between max-w-[440px] mx-auto md:w-1/2 px-4 md:px-0 lg:py-16'>
                    <h2 className="hidden md:block font-title uppercase text-center text-4xl xl:text-5xl">How to play?</h2>
                    <p className='text-justify text-md xl:text-xl mb-8 md:mb-10 lg:mb-0'>
                        In this game your goal is either to protect – if you&apos;re playing as Teddies – or to eat – if you&apos;re playing as Monsters – as many kids as possible. 
                    </p>
                    <Button width={'width-full'}>Download Instructions
                        <span className='inline-block ml-4 align-middle'>
                            <BiDownload />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HowtoPlay2