import React, { useState,useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import urbanloom from "../assets/urbanloom.png";
import "./Navbar.css";
import userlogo from "../assets/use.png";
import serachlogo from "../assets/search.svg";
import cartlogo from "../assets/cart.png";
import downarrow from "../assets/downarrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import {CartContext} from './CartProvider'

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isNestedDropdownVisible, setIsNestedDropdownVisible] = useState(false);
  const [isBeanBagCombosVisible, setIsBeanBagCombosVisible] = useState(false);
  const [isAccessoriesVisible, setIsAccessoriesVisible] = useState(false);
  const [isCollectionVisible, setIsCollectionVisible] = useState(false)
  const { setIsDrawerOpen } = useContext(CartContext);


  const handleDropdownMouseEnter = () => setIsDropdownVisible(true);
  const handleDropdownMouseLeave = () =>{
    setTimeout(() => setIsDropdownVisible(false),2000);
  } 

  const handleNestedMouseEnter = () => setIsNestedDropdownVisible(true);
  const handleNestedMouseLeave = () => setIsNestedDropdownVisible(false);

   const handleBeanBagCombosMouseEnter = () => setIsBeanBagCombosVisible(true);
  const handleBeanBagCombosMouseLeave = () => setIsBeanBagCombosVisible(false);

  const handleAccessoriesMouseEnter = () => setIsAccessoriesVisible(true);
  const handleAccessoriesMouseLeave = ()  => setIsAccessoriesVisible(false);

  const handleCollectionMouseEnter = () => setIsCollectionVisible(true);
  const handleCollectionMouseLeave = () => setIsCollectionVisible(false);

// const handleMouseLeave = () => {
//   setTimeout(() => setIsDropdownVisible(false), 200); // Adds slight delay
// };


  return (
    <>
      <header>
        <nav>
          <div className="maindiv">
            {/* Logo Section */}
            <Link to="/">
              <img
                src={urbanloom}
                width={150}
                height={60}
                className="imgLogo"
                alt="Logo"
              />
            </Link>

            {/* Navigation Links */}
            <ul
              className="nav-list"
              style={{ display: "flex", gap: "20px", padding: 0 }}
            >
              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>
              <li
                style={{ position: "relative" }}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <NavLink to="/beanbags">BEAN BAGS</NavLink>
                <img
                  src={downarrow}
                  alt="Down Arrow"
                  style={{
                    marginLeft: "2px",
                    width: "10px",
                    height: "15px",
                    verticalAlign: "middle",
                  }}
                />
                {isDropdownVisible && (
                  <ul
                    style={{
                      position: "absolute",
                      marginTop: "10px",
                      top: "100%",
                      left: 0,
                      width: "200px",
                      backgroundColor: "white",
                      // border: "1px solid #ccc",
                      borderRadius: "5px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      padding: "10px",
                      listStyleType: "none",
                    }}
                  >
                    <li
                      style={{ padding: "5px 2px", position: "relative" }}
                      onMouseEnter={handleNestedMouseEnter}
                      onMouseLeave={handleNestedMouseLeave}
                    >
                      <NavLink
                        to="/beanbags/cotton"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Cotton Bean Bag Cover
                      </NavLink>
                      <img
                        src={rightArrow}
                        alt="Right Arrow"
                        style={{
                          marginLeft: "2px",
                          width: "10px",
                          height: "15px",
                          verticalAlign: "middle",
                        }}
                      />
                      {isNestedDropdownVisible && (
                        <ul
                          style={{
                            position: "absolute",
                            marginTop: "10px",
                            left: "100%",
                            top: 0,
                            width: "200px",
                            backgroundColor: "white",
                            // border: "1px solid #ccc",
                            borderRadius: "5px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            padding: "10px",
                            listStyleType: "none",
                          }}
                        >
                          <li style={{ padding: "5px 2px" }}>
                            <NavLink
                              to="/beanbags/cotton/all-products"
                              style={{ textDecoration: "none", color: "black"}}
                            >
                              All Products
                            </NavLink>
                          </li>
                          <li style={{ padding: "5px 2px" }}>
                            <NavLink
                              to="/beanbags/cotton/classic-teardrops"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Classic Teardrops
                            </NavLink>
                          </li>
                          <li style={{ padding: "5px 2px" }}>
                            <NavLink
                              to="/beanbags/cotton/footballs"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Footballs
                            </NavLink>
                          </li>
                          <li style={{ padding: "5px 2px" }}>
                            <NavLink
                              to="/beanbags/cotton/loungers"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Loungers
                            </NavLink>
                          </li>
                          <li style={{ padding: "5px 2px" }}>
                            <NavLink
                              to="/beanbags/cotton/combos"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Combos
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li style={{ padding: "5px 2px" }}>
                      <NavLink
                        to="/beanbags/denim"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Denim Bean Bag Cover
                      </NavLink>
                    </li>

                    <li  style={{ padding: "5px 2px", position: "relative" }}
                     onMouseEnter={handleBeanBagCombosMouseEnter}
                     onMouseLeave={handleBeanBagCombosMouseLeave}>
                      <NavLink
                        to="/beanbags/combos"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Bean Bag Combos
                        
                      </NavLink>
                      <img
                        src={rightArrow}
                        alt="Right Arrow"
                        style={{
                          marginLeft: "2px",
                          width: "10px",
                          height: "15px",
                          verticalAlign: "middle",
                        }}
                      />
                    {isBeanBagCombosVisible && (
                      <ul
                        style={{
                          position: "absolute",
                          marginTop: "10px",
                          left: "100%",
                          top: 0,
                          width: "200px",
                          backgroundColor: "white",
                          // border: "1px solid #ccc",
                          borderRadius: "5px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          padding: "10px",
                          listStyleType: "none",
                        }}
                      >
                        <li style={{ padding: "5px 2px" }}>
                          <NavLink
                            to="/beanbags/combos/all"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            All Combos
                          </NavLink>
                        </li>
                        <li style={{ padding: "5px 2px" }}>
                          <NavLink
                            to="/beanbags/combos/classic"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            Classic Combos
                          </NavLink>
                        </li>
                        <li style={{ padding: "5px 2px" }}>
                          <NavLink
                            to="/beanbags/combos/football"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            Football Combos
                          </NavLink>
                        </li>
                        <li style={{ padding: "5px 2px" }}>
                          <NavLink
                            to="/beanbags/combos/lounger"
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            Lounger Combos
                          </NavLink>
                        </li>
                      </ul>
                    )}
                    </li>

                    <li style={{ padding: "5px 2px" }}>
                      <NavLink
                        to="/beanbags/refill"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Bean Bag Refill
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li style={{position:'relative'}} onMouseEnter={handleAccessoriesMouseEnter} onMouseLeave={handleAccessoriesMouseLeave}>
                <NavLink to="/accessories">ACCESSORIES</NavLink>
                <img
                  src={downarrow}
                  alt="Down Arrow"
                  style={{
                    marginLeft: "2px",
                    width: "10px",
                    height: "15px",
                    verticalAlign: "middle",
                  }}
                />
{isAccessoriesVisible && (
     <ul
     style={{
       position: "absolute",
       marginTop: "20px",
       left: "0%",
       width: "160px",
       backgroundColor: "white",
      //  border: "1px solid #ccc",
       borderRadius: "5px",
       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
       padding: "10px",
       listStyleType: "none",
      // border:'1px solid black'
     }}>
    <li style={{ padding: "5px 1px" }}><NavLink  to="/beanbags/combos/all" 
    style={{textDecoration: "none",color: "black",}}>Moroccan Poufs</NavLink></li>
    <li style={{ padding: "5px 2px" }}><NavLink  to="/beanbags/combos/all" 
    style={{textDecoration: "none",color: "black",}}>Traditional Poufs</NavLink></li>
    <li style={{ padding: "5px 2px" }}><NavLink  to="/beanbags/combos/all" 
    style={{textDecoration: "none",color: "black",}}>Mobile Bean Poufs</NavLink></li>
    </ul>     
)}</li>

              <li style={{position:'relative'}} onMouseEnter={handleCollectionMouseEnter} onMouseLeave={handleCollectionMouseLeave} >
                <NavLink to="/collections">COLLECTIONS</NavLink>
                <img
                  src={downarrow}
                  alt="Down Arrow"
                  style={{
                    marginLeft: "2px",
                    width: "10px",
                    height: "15px",
                    verticalAlign: "middle",
                  }}
                />
               {isCollectionVisible && (
                <ul style={{
                  position: "absolute",
                  marginTop: "20px",
                  left: "0%",
                  width: "160px",
                  backgroundColor: "white",
                  // border: "1px solid #ccc",
                  borderRadius: "5px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  listStyleType: "none",
                //  border:'1px solid black'
                }}>
                    <li style={{ padding: "5px 1px" }}>
                      <NavLink  to="/beanbags/combos/all" style={{textDecoration: "none", color: "black",}}>Monochrome</NavLink>
                    </li>
                    <li style={{ padding: "5px 1px" }}>
                      <NavLink  to="/beanbags/combos/all" style={{textDecoration: "none", color: "black",}}>Dual Tone</NavLink>
                    </li>
                    <li style={{ padding: "5px 1px" }}>
                      <NavLink  to="/beanbags/combos/all" style={{textDecoration: "none", color: "black",}}>Colors</NavLink>
                    </li>
                </ul>
               )} 
              </li>
            </ul>
            <ul className="logoList" style={{ display: "flex", listStyleType: "none", alignItems: "center"}}>
              <li>
                <Link to="/loginPage">
                  <img
                    src={userlogo}
                    width={20}
                    height={20}
                    className="imgLogo"
                    alt="User Logo"
                  />
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <img
                    src={serachlogo}
                    width={20}
                    height={20}
                    className="imgLogo"
                    alt="Search Logo"
                  />
                </Link>
              </li>
              <li onMouseEnter={() => setIsDrawerOpen(true)} onMouseLeave={() => setIsDrawerOpen(false)} >
                <Link to="/cart">
                  <img
                    src={cartlogo}
                    width={20}
                    height={20}
                    className="imgLogo"
                    alt="Cart Logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
