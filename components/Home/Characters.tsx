import Button from '../Button'
import Slider from '../Slider'

 const Characters = () => {
    
  return (
    <>
        <div id='characters' className='bg-characters-sp md:bg-characters-pc bg-center bg-no-repeat bg-cover pt-20 pb-16 border-y border-white'>
            <div className='container mx-auto'>
                <h1 className="font-title text-center text-3xl xl:text-5xl mb-32">MEET THE CHARACTERS</h1>
                <Slider />
                <div className='text-center mt-20'>
                    <Button>See more</Button>
                </div>
            </div>
        </div>
    </>
  )
}
export default Characters