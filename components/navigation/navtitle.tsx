import BurgerMenu from './burgermenu'
import SlideOver from '../slideover'
import { useState } from 'react'
import Link from 'next/link'

const NavTitle = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <div className="flex h-fit flex-row items-center justify-between">
        <Link href={'/'}>
          <h1 className="color-white text-5xl font-black">
            an archive of a residency
          </h1>
        </Link>
        <BurgerMenu open={open} setOpen={setOpen} />
        <SlideOver open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default NavTitle
