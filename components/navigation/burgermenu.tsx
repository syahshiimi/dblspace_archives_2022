import { Dispatch, SetStateAction } from 'react'

interface IBurgerMenu {
  open: boolean | undefined
  setOpen: Dispatch<SetStateAction<boolean>>
}
const BurgerMenu = ({ setOpen }: IBurgerMenu) => {
  return (
    <button type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10 stroke-slate-300"
        onClick={() => setOpen(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </button>
  )
}

export default BurgerMenu
