import './login.css'
import cartImage from '../assets/card.png' 
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../api'
export const Login=()=>{
    const [login, { isLoading, error }]  = useLoginMutation()
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setData((data)=>{
            return {
                ...data,
                [name]:value
            }
        })
    }
    const handleSubmit=async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       try{ const {token}=await login(data).unwrap()
            console.log(token)
            localStorage.setItem('token',token)
            navigate('/')
        }
        catch(e){
            console.error("failed to login",error)
        }

        

    }

    return(
        <>
        
            <div className="container">
                <div className="image-container">
                    <img src={cartImage} alt="Phone and Shopping Cart"/>
                </div>
                <div className="form-container">
                    <div style={{width:'50%'}}>

                        <h1>Create an account</h1>
                        <p>Enter your details below</p>
                        <form onSubmit={handleSubmit}>

                            <input onChange={handleChange} type="text" name="username" placeholder="username" />
                            <input onChange={handleChange} type="text" name="password" placeholder="Password" />
                           
                          
                            <div className='buttons'>
                            <button type="submit">Log in</button>
                                <p>Forgot Password?</p>
                            </div>
                            <p className="login-link">Don't have an account? <a onClick={()=>{navigate('/signup')}}>Sign up</a></p>
                        </form>
                    </div>
                </div>
            </div>
                
        </>
    )
}