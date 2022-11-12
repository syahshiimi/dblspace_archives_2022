import { ReactNode } from "react";

type FloatingPillsProps = {
    pillColor: string;
    children: ReactNode;
    setIsOpen: any;
    isOpen: any;
}
const FloatingPills = ({ pillColor, children, setIsOpen }: FloatingPillsProps) => {
    return (
        <div className={`flex flex-row ${pillColor} w-fit px-4 py-5 rounded-xl`} onClick={() => setIsOpen(true)} >
            <p className="text-black text-xl font-semibold leading-[0px]">
                {children}
            </p>
        </div >
    )
}

export default FloatingPills;