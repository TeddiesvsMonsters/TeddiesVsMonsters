import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from '@/components/Button';

interface MyModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: (modalIsOpen: boolean) => void;
    title: string;
    paragraph: string;
    button: string;
    onModalButtonClick: () => void;
  }

export default function MyModal({
    modalIsOpen,
    setModalIsOpen,
    title,
    paragraph,
    button,
    onModalButtonClick,
}: MyModalProps) {
  function closeModal() {
    setModalIsOpen(false)
  }

  function openModal() {
    setModalIsOpen(true)
  }

  return (
    <>

      <Transition appear show={modalIsOpen} as={Fragment}>
        <Dialog as="div"  onClose={closeModal}>
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto z-60">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform z-60 overflow-hidden rounded-2xl bg-white h-3/4 p-8 rounded-lg p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     {paragraph}
                    </p>
                  </div>

                  <div className="mt-4 text-white">
                    <Button
                      type="button"
/*                       className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
 */                    onClick={onModalButtonClick}
                        width="w-full"
                    >
                     {button}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
