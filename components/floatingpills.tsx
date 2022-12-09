import { ReactNode } from 'react'

type FloatingPillsProps = {
  pillColor: string
  children: ReactNode
  setIsOpen: any
  isOpen: any
}
const FloatingPills = ({
  pillColor,
  children,
  setIsOpen,
}: FloatingPillsProps) => {
  return (
    <div
      className={`flex flex-row ${pillColor} w-fit rounded-xl px-4 py-5`}
      onClick={() => setIsOpen(true)}
    >
      <p className="text-xl font-semibold leading-[0px] text-black">
        {children}
      </p>
    </div>
  )
}

export default FloatingPills
