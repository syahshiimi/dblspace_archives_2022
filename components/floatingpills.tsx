import { ReactNode } from 'react'

interface IFLoatingPill {
  pillColor: string
  children: ReactNode
  setIsOpen: any
  isOpen: any
}
const FloatingPills = ({ pillColor, children, setIsOpen }: IFLoatingPill) => {
  return (
    <button
      type="button"
      className={`flex flex-row ${pillColor} w-fit rounded-xl px-4 py-5`}
      onClick={() => setIsOpen(true)}
    >
      <p className="text-xl font-semibold leading-[0px] text-black">
        {children}
      </p>
    </button>
  )
}

export default FloatingPills
