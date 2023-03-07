import { Footer, Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

type Props = {}
const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
