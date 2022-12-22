import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { t } from 'i18next'


// headlessui kütüphanesinden kullandığımız Modal: https://headlessui.com/react/dialog
// fonksiyonumuzun almış olduğu ilk 2 parametre src ve link açılacak modalın resmi ve linki için diğerleri ise hangi buttona bastığımızda hangi modalın açılacağı ve kapanacağı içindir

function Modal({ src, link, state, closeModal }) {
  return (
    <Transition appear show={state} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/75" aria-hidden="true" /> {/* Modal açıldıktan sonra arka planın ne kadar kararacağı burada belirleniyor */}
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

        <div className="fixed inset-0 overflow-y-auto">
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
              <Dialog.Panel className="w-full transform overflow-hidden text-center align-middle transition-all">
                <button type='button' onClick={closeModal}>
                  <AiOutlineClose className='text-[white] relative top-[35px] left-[480px] xl:left-[630px]' size={'1.8em'}/>
                </button>
                <img src={src} alt="" className='xl:w-[1200px] xl:h-[675px] w-[900px] h-[506px] m-auto' />

                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex justify-center border-b-2 text-[#FCFCFC] text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <a href={link} target="_blank" rel="noopener noreferrer" className='text-xl font-normal text-[#FCFCFC] tracking-widest'>{t('siteyi ziyaret et')}</a>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal