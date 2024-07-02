import { useState } from 'react'
import './navbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
export const Navbar=()=>{
    const location=useLocation()
    const [active,setActive]=useState(location.pathname=='/'?'home':location.pathname=='/Login'?'signup':location.pathname.slice(1))
    const activeStyle={
        textDecoration:"underline"
    }
    const navigate=useNavigate()

    return (
        <>
            <div className="nav-1">
                <p className="navText">Some text for marketing, I could not see the text from the image, change it accordingly</p>
                <select defaultValue="English">
                    <option value="english">English</option>
                    <option value="korean">Korean</option>

                </select>
            
            </div>
            <div className="nav-2">
                <p className='title'>E-buy</p>
                <div className='links'>
                    <p onClick={()=>{setActive('home'); navigate('/')}} style={active=="Home" ? activeStyle:{}}>Home</p>
                    <p onClick={()=>{setActive('contact'); navigate('/contact')}}  style={active=="contact" ? activeStyle:{}}>Contact</p>
                    <p onClick={()=>{setActive('about'); navigate('/about')}}  style={active=="about" ? activeStyle:{}}>About</p>
                    <p onClick={()=>{setActive('signup'); navigate('/signup')}}  style={active=="signup" ? activeStyle:{}}>Sign Up</p>
                </div>
                <div className='search'>
                    <input placeholder='What are you looking for' type='text'/>      
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>

            </div>
        </>
    )
}  