"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BiSolidUser } from 'react-icons/bi';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import Link from 'next/link';
import HeaderLink from './Header/HeaderLink';
import  MyModal  from '@/components/modal'

export default function ProfileDropDownHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { data: session, status, update } = useSession();

  const onModalButtonClick = () => {
    signOut({redirect: false})
    setModalIsOpen(false);
  }

  const onLogoutButtonClick = () => {
    setModalIsOpen(true);
  }

  return (
    <>
      <MyModal  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title="Sign out" paragraph="Are you sure you want to sign out?" button="Sign out" onModalButtonClick={onModalButtonClick} />
  
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-3 pt-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <BiSolidUser size={23}/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
             {!session && 
                <Menu.Item>
                    {({ active }) => (
                        <button
                            className={`${active ? 'bg-fuchsia-950 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            <Link href="/login" shallow className='w-full'>Login</Link>
                        </button>
                    )}
                </Menu.Item>}
            {!session && 
                <Menu.Item>
                    {({ active }) => (
                        <button
                            className={`${active ? 'bg-fuchsia-950 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            <Link href="/register" shallow className='w-full'>Register</Link>
                        </button>
                    )}
                </Menu.Item>}
            </div>
            <div className="px-1 py-1">
              {session && 
              <Menu.Item>
                {({ active }) => (
                    <button
                        className={`${active ? 'bg-fuchsia-950 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        <Link href="/profile-page" className='w-full'>Profile</Link>
                    </button>
                )}
            </Menu.Item>}
            {session && 
                <Menu.Item>
                    {({ active }) => (
                        <button
                            className={`${active ? 'bg-fuchsia-950 text-white' : 'text-gray-900'} group flex w-full text-center flex justify-center items-center rounded-md px-2 py-2 text-sm`}
                            onClick={onLogoutButtonClick}
                        >
                        Logout
                        </button>
                    )}
                </Menu.Item>}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>
  )
}
