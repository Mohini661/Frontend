import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./layout/home/HomeLayout"
import DashboardLayout from "./layout/dashboard/DashboardLayout"
import Home from "./features/Home/pages/Home"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/signup" element={<h1>Signup</h1>} />

          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home/>} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
