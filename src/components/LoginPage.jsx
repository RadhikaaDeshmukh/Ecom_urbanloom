import React from 'react'
import './LoginPage.css'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
        <h1>Login</h1>
       <div className='mainContainer'>
       <input className='form_email' type='email' placeholder='Email'/>
        <input className='form_password' type='password' placeholder='Password'/>
        <button className='btn' type='submit'> SIGN IN</button>
       <NavLink to={'/registration'}><p>Create Account</p></NavLink>
        <p>Return to Store</p>
        <p>Forget Your Password?</p>
       </div>

    </>
  )
}

export default LoginPage