interface HamuburgerProps {
    headerRef: any;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Hamburger = ({headerRef, setOpen, open}:HamuburgerProps) => {
    
  return (
    <div ref={headerRef} className="block lg:hidden relative z-10 h-[3rem]">
        <button className='relative w-8 h-6' onClick={() => setOpen(!open)}>
            <span className={`absolute top-0 left-0 right-0 bg-white h-0.5 block duration-200 origin-center ${open ? 'top-[11px] rotate-45' : ''}`}></span>
            <span className={`absolute left-0 right-0 bg-white h-0.5 block duration-100 ${open ? 'w-0' : 'w-full'}`}></span>
            <span className={`absolute bottom-0 left-0 right-0 bg-white w-8 h-0.5 block duration-200 origin-center ${open ? 'bottom-[11px] -rotate-45' : ''}`}></span>
        </button>
    </div>
  )
}

export default Hamburger