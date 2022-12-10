import { Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface IDialogue {
  isOpen: boolean | undefined
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const DialogBox = ({ isOpen, setIsOpen }: IDialogue) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-75 opacity-0"
      as={Fragment}
    >
      <Dialog
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center "
      >
        <div className="fixed inset-0 bg-black/70 " aria-hidden="true" />
        <Dialog.Panel className="z-10 rounded-xl bg-mikado-yellow px-6 py-4">
          <Dialog.Title className={'text-2xl font-bold text-black'}>
            Deactivate account
          </Dialog.Title>

          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <div className="flex flex-row gap-8">
            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  )
}

export default DialogBox
