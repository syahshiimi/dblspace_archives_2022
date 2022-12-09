import { useState, Fragment, useRef } from 'react'
import Head from 'next/head'
import FloatingPills from '../components/floatingpills'
import { Dialog, Transition } from '@headlessui/react'
import { NextPage } from 'next'
import DialogBox from '../components/dialog/dialog'

const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState(false)
  let buttonRef = useRef(null)

  return (
    <>
      <Head>
        <title>DBLSPACE Residency SAJ 2022</title>
        <meta name="description" content="SAJ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <div>
          <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </Transition>

      <div className="flex grow flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 ">
          <FloatingPills
            pillColor="bg-mikado-yellow gap-4"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            Green Screen Machine
          </FloatingPills>
          <FloatingPills
            pillColor="bg-brilliant-azure"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            Field Recordings
          </FloatingPills>
          <FloatingPills
            pillColor="bg-willpower-orange"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            Space Activations
          </FloatingPills>
          <FloatingPills
            pillColor="bg-vivid-raspberry"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            Objects On A Wall
          </FloatingPills>
          <FloatingPills
            pillColor="bg-blue-violet"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            Totz n Feelingz Wall
          </FloatingPills>
        </div>
      </div>
    </>
  )
}

export default Home
