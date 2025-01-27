import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import urbanloom from '../assets/urbanloom.png'
import './Navbar.css'
import userlogo from '../assets/use.png'
import serachlogo from '../assets/search.svg'
import cartlogo from '../assets/cart.png'
import downarrow from '../assets/downarrow.svg'


const Navbar = () => {
  return (
    <>
     <header>
            <nav> 
            <div className="maindiv">
  {/* Logo Section */}
  <Link to="/"><img src={urbanloom} width={150}  height={60} className='imgLogo' alt="Logo"/></Link>

  {/* Navigation Links */}
  <ul className="nav-list">
    <li>
      <NavLink to="/about">ABOUT US</NavLink>
    </li>
    <li>
      <NavLink to="/beanbags">BEAN BAGS</NavLink>
      <img src={downarrow} alt="Down Arrow" style={{ marginLeft: '2px', width: '10px', height: '15px', verticalAlign: 'middle', border:'1px solid black;' }} />
    </li>

    <li>
      <NavLink to="/accessories">ACCESSORIES</NavLink>
      <img src={downarrow} alt="Down Arrow" style={{ marginLeft: '2px', width: '10px', height: '15px', verticalAlign: 'middle', border:'1px solid black;' }} />

    </li>
    <li>
      <NavLink to="/collections">COLLECTIONS</NavLink>
      <img src={downarrow} alt="Down Arrow" style={{ marginLeft: '2px', width: '10px', height: '15px', verticalAlign: 'middle', border:'1px solid black;' }} />

    </li>
  </ul>
  <ul className="logoList"> <li>
    <Link to="/"><img src={userlogo} width={20}  height={20} className='imgLogo' alt="Logo"/></Link>
    </li>
    <li>
    <Link to="/"><img src={serachlogo} width={20}  height={20} className='imgLogo' alt="Logo"/></Link>
    </li>
    <li>
    <Link to="/"><img src={cartlogo} width={20}  height={20} className='imgLogo' alt="Logo"/></Link>
    </li></ul>
</div>

                
            </nav>
    </header>
    </>
  )
}

export default Navbar