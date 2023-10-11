import { BiDownload } from 'react-icons/bi'
import Button from '../Button'

const HowtoPlay = () => {
  return (
    <>
        <div className='container mx-auto py-11 md:py-40 px-4 '>
            <div className=" flex justify-between flex-col gap-10 md:flex-row">
                <div className='w-1/2 hidden md:block'>
                    <div className="max-w-[645px]">
                        <iframe 
                            className='w-full h-screen max-h-[363px]'
                            width="645" 
                            height="363" 
                            src="https://www.youtube.com/embed/pCLj3EmADXw"
                            title="YouTube video player" 
                            // frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            // allowfullscreen
                            >
                        </iframe>
                    </div>
                </div>
                
                <div className='w-full px-4 flex flex-col justify-between max-w-[440px] mx-auto md:w-1/2 md:px-0'>
                    <h2 className=" font-title uppercase text-center text-4xl">How to play?</h2>
                    <iframe 
                            className='md:hidden w-full max-h-[363px] my-8'
                            width="296" 
                            height="167" 
                            src="https://www.youtube.com/embed/pCLj3EmADXw"
                            title="YouTube video player" 
                            // frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            // allowfullscreen
                            >
                        </iframe>
                    <p className='text-xl mb-8 md:mb-0'>
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

export default HowtoPlay