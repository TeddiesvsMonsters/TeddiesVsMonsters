import { Products } from '@/type/orders';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface ProductDropDownProps {
  products?: Products[] | null;
}

const ProductDropDown= ({products}: ProductDropDownProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative ${menuOpen ? 'z-20' : 'z-5'} inline-flex w-full justify-center rounded-md bg-fuchsia-950 bg-opacity-80 px-3 py-3 text-sm font-medium text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          Products
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        show={menuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          className={`absolute md:right-0 right-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${menuOpen ? 'z-30' : 'z-10'}`}
        >
          {products?.map((product: Products) => (
            <Menu.Item key={product.name}>
     
                <div
                  className=" px-1 py-1"
                >
                  {product.name} - Quantity: {product.quantity}
                </div>
         
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default ProductDropDown;