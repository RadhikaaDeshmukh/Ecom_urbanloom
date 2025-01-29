import React from 'react'
import './LoginPage.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <div className='mainContainer'>
      <input className='form_email' type='email' placeholder='Email'/>
      <input className='form_password' type='password' placeholder='Password'/>
      <button className='btn' type='submit'> SIGN IN</button>
      <NavLink to='/registration'><p>Create Account</p></NavLink>
      <NavLink to ='/' ><p>Return to Store</p></NavLink>
      <p>Forget Your Password?</p>
      </div>

    </>
  )
}

export default LoginPage