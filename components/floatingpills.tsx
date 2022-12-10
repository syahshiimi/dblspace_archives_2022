import { Dispatch, ReactNode, SetStateAction } from 'react'

interface IFLoatingPill {
  pillColor: string | undefined
  children: ReactNode | undefined
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean | undefined
}
const FloatingPills = ({ pillColor, children, setIsOpen }: IFLoatingPill) => {
  return (
    <button
      type="button"
      className={`flex flex-row ${pillColor} w-fit rounded-xl px-4 py-6`}
      onClick={() => setIsOpen(true)}
    >
      <p className="text-xl font-semibold leading-[0px] text-black">
        {children}
      </p>
    </button>
  )
}

export default FloatingPills
