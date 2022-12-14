import { useState } from "react"
import Head from "next/head"
import FloatingPills from "../components/floatingpills"
import { NextPage } from "next"
import DialogBox from "../components/dialog/dialog"

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>an archive of a residency</title>
        <meta name="description" content="SAJ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex grow flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 ">
          <FloatingPills pillColor="bg-mikado-yellow" setIsOpen={setIsOpen}>
            Green Screen Machine
          </FloatingPills>
          <FloatingPills pillColor="bg-willpower-orange" setIsOpen={setIsOpen}>
            Space Activations
          </FloatingPills>
          <FloatingPills pillColor="bg-vivid-raspberry" setIsOpen={setIsOpen}>
            Objects On A Wall
          </FloatingPills>
          <FloatingPills pillColor="bg-blue-violet" setIsOpen={setIsOpen}>
            Totz n Feelingz Wall
          </FloatingPills>
        </div>
      </div>
      <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Home
