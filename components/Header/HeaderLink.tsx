import Link from 'next/link'

interface HeaderLinkProps {
    children: React.ReactNode,
    reference: string,
    setOpen: (open: boolean) => void;
}


const HeaderLink = ({ children, reference, setOpen }: HeaderLinkProps) => {
  const handleClick = () => {
          setOpen(false); // Close the menu
  };

  return (
      <li className='py-2'>
          <Link href={reference} onClick={handleClick}>
          
                  {children}
       
          </Link>
      </li>
  );
};

export default HeaderLink;