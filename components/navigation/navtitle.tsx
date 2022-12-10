import BurgerMenu from './burgermenu'
import SlideOver from '../slideover'
import { useState } from 'react'

const NavTitle = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1 className="color-white text-5xl font-black">WORKING TITLE, 2022</h1>
        <BurgerMenu open={open} setOpen={setOpen} />
        <SlideOver open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default NavTitle
