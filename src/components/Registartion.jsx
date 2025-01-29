import React from 'react'
import './Registration.css';
import { NavLink } from 'react-router-dom'

const Registartion = () => {
  return (
    <>
      <h1>Create Account</h1>
       <div className='mainContainer'>
       <input className='form_name' type= 'text'   placeholder='First Name'/>
       <input className='form_lname' type='text'   placeholder='Last Name'/>
       <input className='form_email' type= 'email' placeholder='Email'/>
      <input className='form_password'type='text'  placeholder='Password'/>
      <button className='btn' type='submit' >CREATE</button>
      <NavLink to='/'><p>Return to Store</p></NavLink>
       </div>
    </>
  )
}

export default Registartion;