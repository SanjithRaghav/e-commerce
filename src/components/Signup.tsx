import './login.css'
import cartImage from '../assets/card.png' 
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Signup=()=>{
    const navigate=useNavigate()
    const [page,setPage]=useState(1)
    const [data,setData]=useState({
    })
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setData((data)=>{
            return {
                ...data,
                [name]:value
            }
        })
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(data)
        if(page==1){
            setPage(2)
        }
        else{
           //submit logic
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
                         {(page==1) && ( <>
                         <input onChange={handleChange} type="text" name="firstName" placeholder="First Name" />
                            <input onChange={handleChange} type="text" name="lastName" placeholder="Last Name" />
                            <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                            <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                            <input onChange={handleChange} type="password" name="rePassword" placeholder="Re-enter Password" />
                            <button type="submit">Continue</button></>)}
                        {(page==2) && ( <>
                         <input onChange={handleChange} type="text" name="Address" placeholder="Address" />
                            <input onChange={handleChange} type="text" name="City" placeholder="City" />
                            <input onChange={handleChange} type="email" name="State" placeholder="State" />
                            <input onChange={handleChange} type="text" name="country" placeholder="country" />
                            <input onChange={handleChange} type="text" name="ZipCode" placeholder="ZipCode" />
                            <input onChange={handleChange} type="number" name="Phone" placeholder="Phone" />
                            <div className='buttons'>
                                <button className='back' onClick={()=>{setPage(1)}}>Back</button>
                                <button type="submit">Create Account</button>
                            </div>
                            </>
                        )}
                            
                            <p className="login-link">Already have an account? <a onClick={()=>{navigate('/login')}}>Log in</a></p>
                        </form>
                    </div>
                </div>
            </div>
                
        </>
    )
}