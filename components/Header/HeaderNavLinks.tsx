'use client'
import { Dispatch, SetStateAction } from "react";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { BsCartFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";

import HeaderLink from "./HeaderLink";
import logo from '@/assets/images/logo.png'; 

import MyDropdown from '../ProfileDropdown';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"

interface HeaderNavLinksProps {
    open: boolean,
    setOpenCart: Dispatch<SetStateAction<boolean>>;
    setOpen: (open: boolean) => void;

}

const HeaderNavLinks = ({open, setOpenCart, setOpen}:HeaderNavLinksProps) => {
    const pathname = usePathname()
    const { data: session, status, update } = useSession();
    const onClickCart = () => {
      setOpenCart(true);
      setOpen(false);
    }
    const onClickSignOut = () => {
      signOut({redirect: false});
      setOpen(false);
    }

  return (
    <>
      <h1 className='relative z-10 mb-1'>
        <Link href='/' ><Image src={logo} alt='Teddies VS Monsters' width={340} height={40} className='w-[200px] md:w-[250px] xl:w-[300px]'/></Link>
      </h1>
            
            <ul 
            className={`${open ? 'right-0' : '-right-full'}
            absolute py-7 px-4 bg-black h-screen w-80  top-[61px] pt-6  duration-300
             lg:relative lg:flex lg:justify-evenly lg:h-auto lg:top-0 lg:right-0 lg:p-0 lg:w-auto lg:gap-5 xl:gap-8`}>
                <HeaderLink reference='/about' setOpen={setOpen}>About us</HeaderLink>
                <HeaderLink reference='/characters'  setOpen={setOpen}>Characters</HeaderLink>
                {pathname === '/landing-page' &&  <HeaderLink reference='#'  setOpen={setOpen}>Kickstarter</HeaderLink> }
                {pathname !== '/landing-page' && <HeaderLink reference='/online-store'  setOpen={setOpen}>Online Store</HeaderLink> }
                {/* <HeaderLink reference='/news-events'  setOpen={setOpen}>News and Events</HeaderLink> */}

               {/*  {!session && 
                  <div className='visible lg:invisible block lg:hidden py-2'>
                    <HeaderLink reference='/login'  setOpen={setOpen}>Login</HeaderLink> 
                    <HeaderLink reference='/register'  setOpen={setOpen}>Register</HeaderLink> 
                  </div>
                } 
                {session &&
                  <div className='visible lg:invisible block lg:hidden py-2'>
                    <HeaderLink reference='/profile-page'  setOpen={setOpen}>Profile</HeaderLink> 
                    <button
                      className={'text-white'}
                      onClick={onClickSignOut}
                      >Logout
                    </button>                  
                  </div>
                }  */}

                {pathname !== '/landing-page' && (
                  <li className='md:border-none border-b py-2'>
                    <button onClick={onClickCart}><BsCartFill size={21}/></button>
                  </li>
                )}
                <div className='invisible lg:visible relative z-10 h-[3rem] sm:h-[0rem]'>
              {/*     <MyDropdown /> */}
                </div>
            </ul>
    </>
  )
}

export default HeaderNavLinks