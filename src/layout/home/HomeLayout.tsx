import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"

const HomeLayout = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
