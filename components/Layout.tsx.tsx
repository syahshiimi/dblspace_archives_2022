import { ReactNode } from "react"
import Footer from "./navigation/footer"
import NavTitle from "./navigation/navtitle";

type LayoutProps = {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-silver-sand pb-2 px-2">
            <NavTitle />
            <main className="grow flex flex-col">
                {children}
            </main>
            <Footer />
        </div>

    )
}