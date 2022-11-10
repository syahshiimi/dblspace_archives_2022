import Head from 'next/head'
import FloatingPills from '../components/floatingpills'

export default function Home() {
    return (
        <>
            <Head>
                <title>DBLSPACE Residency SAJ 2022</title>
                <meta name="description" content="SAJ" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center grow">
                <div className='container mx-auto flex flex-col gap-4 items-center justify-center '>
                    <FloatingPills pillColor='bg-mikado-yellow gap-4'>
                        Green Screen Machine
                    </FloatingPills>
                    <FloatingPills pillColor='bg-brilliant-azure'>
                        Field Recordings
                    </FloatingPills>
                    <FloatingPills pillColor='bg-willpower-orange'>
                        Space Activations
                    </FloatingPills>
                    <FloatingPills pillColor='bg-vivid-raspberry' >
                        Objects On A Wall
                    </FloatingPills>
                    <FloatingPills pillColor='bg-blue-violet' >
                        Totz n Feelingz Wall
                    </FloatingPills>
                </div>
            </div>
        </>
    )
}
