import { ReactNode } from 'react'
import Footer from './navigation/footer'
import NavTitle from './navigation/navtitle'

type LayoutProps = {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gray-900 p-2">
      <NavTitle />
      <main className="flex grow flex-col">{children}</main>
      <Footer />
    </div>
  )
}
