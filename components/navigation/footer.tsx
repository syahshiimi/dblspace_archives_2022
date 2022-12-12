import Link from "next/link"
import FloatingPills from "../floatingpills"

const Footer = () => {
  return (
    <footer className="flex flex-row items-end justify-between">
      <div>
        <p className="text-sm font-thin italic">
          Inspired by the floating DVD and in no way related to it.
        </p>
      </div>
      <FloatingPills pillColor="bg-brilliant-azure">
        <Link href={"/collect"}>COLLECT</Link>
      </FloatingPills>
    </footer>
  )
}

export default Footer
