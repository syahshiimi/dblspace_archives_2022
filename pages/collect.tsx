import { type NextPage } from 'next'

const Collect: NextPage = () => {
  return (
    <>
      <div className="container mx-auto flex  grow flex-col items-center justify-center gap-8 bg-gradient-to-b from-mikado-yellow to-vivid-raspberry bg-clip-text text-center text-transparent ">
        <p className="text-5xl font-extrabold lowercase tracking-tight">
          IF YOU HAD TAKEN A PICTURE DURING OUR RESIDENCY AND WOULD LIKE TO
          COLLECT THE PRINT, PLEASE SUBMIT THE FORM BELOW. THERE WILL BE NO
          CHARGES.
        </p>
        <p className="text-5xl font-extrabold lowercase tracking-tight">
          ALL COSTS BORNE BY THE ARTISTS.
        </p>
      </div>
    </>
  )
}

export default Collect
