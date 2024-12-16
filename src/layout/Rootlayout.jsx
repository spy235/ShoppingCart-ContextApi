import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Rootlayout
