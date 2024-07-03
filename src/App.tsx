import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"
import Footer from "./components/Footer"
import { Dashboard } from "./components/Dashboard"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route element={<Dashboard/>} path="/" />
        <Route element={<h1>hola</h1>} path="/register" />
        <Route element={<Signup/>} path="/signup" />
        <Route element={<Login/>} path="/login" />
        <Route element={<h1>hola</h1>} path="/" />
      </Routes>
    <Footer/>

    </>
  )
}

export default App
