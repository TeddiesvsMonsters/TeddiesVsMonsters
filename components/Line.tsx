// import Image from 'next/image'

interface LineProps {
  height?: boolean,
}

const Line = ({height}:LineProps) => {
  return (
    <div className={`${height ? 'my-8' : 'my-0'}`}>
      {/* <Image
        src={'/assets/images/Line.png'} 
        alt='image' 
        width={910} 
        height={1}
        className='mx-auto'
        /> */}
        <div className='h-[1px] w-4/5 mx-auto bg-gradient-to-r from-0% via-white via-49% to-black to-100% z-10'></div>
    </div>
  );
};

export default Line;
