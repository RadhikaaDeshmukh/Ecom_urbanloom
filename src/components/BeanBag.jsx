import React,{useState} from 'react'
import './BeanBag.css'
import { Dropdown, DropdownButton } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom'
import downarrow from '../assets/downarrow.svg'

const BeanBag = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
      setIsDropdownVisible(true);
    };
    const handleMouseLeave = () => {
      setIsDropdownVisible(false);
    };
  return (
    <>
    {/* <ul style={{ listStyleType: "none", display: "flex", gap: "20px", padding: 0 }}>
    <li style={{ position: "relative" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavLink to="/beanbags" style={{ textDecoration: "none", color: "black" }}>BEAN BAGS</NavLink>
    <img src={downarrow} alt="Down Arrow"  style={{marginLeft: "5px",width: "10px",height: "15px", verticalAlign: "middle",}}/>
        {isDropdownVisible && (
<ul style={{ position: "absolute", top: "100%",left: 0,backgroundColor: "white", border: "1px solid #ccc",borderRadius: "5px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "10px",listStyleType: "none",  margin: 0, zIndex: 1000,}}>
        
    <li style={{ padding: "5px 10px" }}>
              <NavLink to="/beanbags/cotton" style={{ textDecoration: "none", color: "black" }}>
                Cotton Bean Bag Cover
              </NavLink>
    </li>
            
    <li style={{ padding: "5px 10px" }}>
              <NavLink to="/beanbags/denim" style={{ textDecoration: "none", color: "black" }}>
                Denim Bean Bag Cover
              </NavLink>
    </li>
    
    <li style={{ padding: "5px 10px" }}>
              <NavLink to="/beanbags/combos" style={{ textDecoration: "none", color: "black" }}>
                Bean Bag Combos
              </NavLink>
    </li>
            
    <li style={{ padding: "5px 10px" }}>
              <NavLink to="/beanbags/refill" style={{ textDecoration: "none", color: "black" }}>
                Bean Bag Refill
              </NavLink>
    </li>
 </ul>
        )}
      </li>

<li><NavLink to="/accessories" style={{ textDecoration: "none", color: "black" }}>ACCESSORIES</NavLink>
      <img src={downarrow}  alt="Down Arrow" style={{marginLeft: "5px",width: "10px", height: "15px",verticalAlign: "middle",}}/></li>

<li><NavLink to="/collections" style={{ textDecoration: "none", color: "black" }}>COLLECTIONS</NavLink>
<img src={downarrow} alt="Down Arrow" style={{ marginLeft: "5px", width: "10px", height: "15px", verticalAlign: "middle",}}/></li>
</ul> */}
    </>
  )
}

export default BeanBag