import Link from 'next/link'
import {BsInstagram, BsTwitter} from 'react-icons/bs';
import {AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12 md:py-20 border-t border-white'>
        <div className='mx-auto'>
            <div className='flex flex-col md:flex-row justify-between px-20 md:px-24 lg:px-36 mx-auto' >
                {/* <div className='w-full md:w-2/5'> */}
                    {/* <h4 className="text-2xl font-semibold uppercase mb-2">Subscribe</h4>
                    <p className='font-semibold text-gray-500 text-xs leading-5 mb-4'>
                        Sign up for our email list to be the first to know about new<br/> 
                        products and exclusive sales.
                    </p>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Enter your email'
                        className='p-2 md:py-3 md:px-4 w-2/3 min-w-60 rounded mr-3 my-2 text-black'
                    />
                    <button 
                        type="button"
                        className='font-title border-white border rounded p-2 md:px-4 md:py-3'
                    >
                        Subscribe
                    </button> */}
                    {/* <div className='flex gap-2 mt-2 mb-4 md:mt-7 md:mb-0'>
                        <Link href={'#'} ><AiFillFacebook className='w-7 h-7' /></Link>
                        <Link href={'#'} ><BsTwitter className='w-7 h-7' /></Link>
                        <Link href={'#'} ><BsInstagram className='w-7 h-7' /></Link>
                    </div> */}
                {/* </div> */}

            <div className="flex w-full text-xs font-extrabold text-gray-500">
          
                <div className='w-1/2 md:w-1/3'>
                    <ul>
                        <li className='mb-3'>
                            <Link href={'/about'}>About Us</Link>
                        </li>
                        <li className='mb-3'>
                            <Link href={'/contact-us'}>Contact Us</Link>
                        </li>
                        <li className='mb-3'>
                            <Link href={'#'}>Order Lookup</Link>
                        </li>
                    </ul>
                </div>

                <div className='w-1/2 md:w-1/3 md:pl-16 lg:pl-20 xl:pl-36'>
                    <ul>
                        <li className='mb-3'>
                            <Link href={'/faqs'}>FAQs</Link>
                        </li>
                        <li className='mb-3'>
                            <Link href={'/privacy-policy'}>Privacy Policy</Link>
                        </li>
                        <li className='mb-3'>
                            <Link href={"/terms-of-use"}>Terms of Use</Link>
                        </li>
                    </ul>
                </div>

                <div className='hidden md:text-right md:block md:w-1/3'>
                    <ul>
                        <li className='mb-3'>
                            <Link href={'#'}>Teddies VS Monsters</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
            <div className='flex gap-2 mt-2 mb-4 md:mt-7 md:mb-0 pl-20 md:pl-24 lg:pl-36'>
                <Link href={'#'} ><AiFillFacebook className='w-7 h-7' /></Link>
                <Link href={'#'} ><BsTwitter className='w-7 h-7' /></Link>
                <Link href={'#'} ><BsInstagram className='w-7 h-7' /></Link>
            </div>
        <div className='text-center mt-8'>
            <span className="text-xs font-semibold font-title">&copy; 2023 WE MAKE GAMES</span>
        </div>
    </footer>
  )
}

export default Footer