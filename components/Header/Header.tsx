'use client'
import { useEffect, useRef, useState } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import HeaderNavLinks from './HeaderNavLinks';
import Hamburger from './Hamburger';
import { usePathname } from 'next/navigation'
import useFetchLocalStorage from '@/hooks/useFetchLocalStorage';

const Header = ({referer}:{referer: string | null}) => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [openCart, setOpenCart] = useState(false);
  const [openHeader, setOpenHeader] = useState(true);
  const pathname = usePathname()
  useFetchLocalStorage()
  useEffect( ()=> {
    if(pathname == "/login" || pathname == "/register"){
      setOpenHeader(false);
    }else{
      setOpenHeader(true)
    }
  }, [pathname])

  return (
    <>
    {openHeader && 
      <div className='z-50 lg:h-[120px] py-4 lg:py-10 border-b border-white text-white fixed top-0 left-0 right-0 bg-black'>
        <nav className='flex justify-between items-center container mx-auto px-6'>
          <HeaderNavLinks open={open} setOpenCart={setOpenCart} setOpen={setOpen}/>
          <Hamburger headerRef={headerRef} setOpen={setOpen} open={open} />
        </nav>
          <ShoppingCart referer={referer} openCart={openCart} setOpenCart={setOpenCart}/>
      </div>
    }
      </>
  )
}

export default Header