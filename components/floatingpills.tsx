import { Dispatch, ReactNode, SetStateAction } from "react"

interface IFLoatingPill {
  pillColor:
    | "bg-mikado-yellow"
    | "bg-brilliant-azure"
    | "bg-willpower-orange"
    | "bg-vivid-raspberry"
    | "bg-blue-violet"
    | string
    | undefined
  children?: ReactNode | undefined
  setIsOpen?: Dispatch<SetStateAction<boolean>> | undefined
}
const FloatingPills = ({ pillColor, children, setIsOpen }: IFLoatingPill) => {
  return (
    <button
      type="button"
      className={`flex flex-row ${pillColor} w-fit rounded-xl px-4 py-6 transition-all ease-in-out hover:-translate-y-2`}
      onClick={() => {
        setIsOpen != undefined ? setIsOpen(true) : null
      }}
    >
      <p className="text-xl font-semibold leading-[0px] text-black">
        {children}
      </p>
    </button>
  )
}

export default FloatingPills
