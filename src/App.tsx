import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route element={<h1></h1>} path="/" />
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
