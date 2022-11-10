import { ReactNode } from "react"
import Footer from "./navigation/footer"

type LayoutProps = {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-silver-sand pb-2 px-2">
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>

    )
}