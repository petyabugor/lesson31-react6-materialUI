import React from 'react'
import  './Login.css'
import {useNavigate} from 'react-router-dom'
import { useRef } from 'react'

const Login = (props) => {
    const email= useRef()
    const password= useRef()
    const name= useRef()
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        if(email.current.value==='petyabugor@gmail.com'&&password.current.value==='12345'&& name.current.value==="Petr"){
            localStorage.setItem('emaildata', 'petyabugor@gmail.com')
            localStorage.setItem('passworddata', '12345')
            localStorage.setItem('name', 'Petr')
            localStorage.setItem('isLoggedIn', 'true')
            props.setISLoggedIn(true)
            navigate('/')
        }
    }

  return (
    <div className="integrate">
        <div className="form-popup-block _container-narrow">
            <form  className="form-popup form-popup-flexible" onSubmit={handleSubmit} >
                <h4 className="form-popup-title">LOG IN</h4>
                <label >
                    <input className="form-popup-input" type="text" placeholder="Name" ref={name} minLength="3"/>
                </label>
                <label >
                    <input className="form-popup-input" type="email" ref={email} placeholder="Email"/>
                </label>
                <label >
                    <input className="form-popup-input" type="password" placeholder="Password" ref={password} minLength="4"/>
                </label>
                <button className="form-popup-btn" type="submit">Login</button>        
            </form>
        </div>
    </div>
  )
}

export default Login