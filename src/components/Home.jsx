import React from 'react'
import firstcar from '../assets/happynew.jpg'
import secondcar  from '../assets/landscapehandcrafted.jpg'
import thirdcar from '../assets/yellow_multiple.jpg'
import './Home.css'
import mindLogo from '../assets/mind.jpg'
import handcraftedLogo from '../assets/handcrafted.jpg'
import artisanal from '../assets/artisanal.jpg'
import sustainable from '../assets/sustainable.jpg'
import firstcard from '../assets/Card/classic1.jpg'
import secondcard from '../assets/Card/football2.jpg'
import thirdcard from '../assets/Card/comboclas3.jpg'
import fourtcard from '../assets/Card/chair_bean_.jpg'
import fifthcard from '../assets/Card/footballc.jpg'
import sixthcard from '../assets/Card/poufs.jpg'
import trendingCard from '../assets/binbag.jpg'
import trendingCard1 from '../assets/binbag2.jpg'
import { Input } from '@mui/material'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className="container-fluid" style={{marginTop:'40px'}}>
  <div className="row justify-content-center">
    <div className="col-10"  > 
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
  <div className="carousel-item active">
            <img src={firstcar}  className="d-block w-100" alt="Slide 1" height={450} />
            <div className="carousel-caption d-none d-md-block">
              <h6>UNMATCHED COMFORT</h6>
              <h1 style={{marginBottom:'140px'}}>Unbelievably good looks</h1>
            </div>
     </div>
    <div className="carousel-item">
             <img src={secondcar}  className="d-block w-100" alt="..." height={400}/>
    </div>
    <div className="carousel-item">
      <img src={thirdcar}  className="d-block w-100" alt="..." height={400} />
    </div>
  </div>
  </div>
  </div>
</div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>


 <div className='textContainer'>
<p>Urbanloom products are carefully hand crafted to perfection from pure cotton fabric made in traditional looms. Now buy bean bags, ottomans & cushions  in host of vibrant colors and designs and spice up your living room, bed room or study. Our products are skin-friendly, eco-friendly , breathable and fun!</p>
    </div>
 

<div className='circleLogo'>
  <img className="imgcircleLogo" src={mindLogo} alt="" />
  <img className="imgcircleLogo" src={sustainable} alt="" />
  <img className="imgcircleLogo" src={handcraftedLogo} alt="" />
  <img className="imgcircleLogo" src={artisanal} alt="" />
</div>

<div className='homeCardmain'>
  <div>
  <h3>Cotton Bean Bags
  {/* <span
    style={{ position: "absolute",bottom: "-10px",left: "50%", transform: "translateX(-50%)", width: "60px", height: "2px", backgroundColor: "skyblue", display: "block", }}/> */}
  </h3>
  </div>
  <div className="card-container">
    <div className="imgdiv">
        <img src={firstcard} alt="" className="cardImg" />
        <div className="overlay"></div>  {/* Dark overlay */}
        <div className="cardText">Classic Teardrops</div>
    </div>
    <div className="imgdiv">
        <img src={secondcard} alt="" className="cardImg" />
        <div className="overlay"></div>
        <div className="cardText">Footballs</div>
    </div>
    <div className="imgdiv">
        <img src={thirdcard} alt="" className="cardImg" />
        <div className="overlay"></div>
        <div className="cardText">Classic Combos</div>
    </div>
    <div className="imgdiv">
        <img src={fourtcard} alt="" className="cardImg" />
        <div className="overlay"></div>
        <div className="cardText">Loungers</div>
    </div>
    <div className="imgdiv">
        <img src={fifthcard} alt="" className="cardImg" />
        <div className="overlay"></div>
        <div className="cardText">Football Combos</div>
    </div>
    <div className="imgdiv">
        <img src={sixthcard} alt="" className="cardImg" />
        <div className="overlay"></div>
        <div className="cardText">Poufs</div>
    </div>
</div>



</div>

<div className='homeCardmain'>
  <div>
  <h3>Trending Products
  {/* <span
    style={{position: "absolute",bottom: "-10px",left: "50%", transform: "translateX(-50%)", width: "60px", height: "2px", backgroundColor: "skyblue", display: "block", }}/> */}
  </h3>
  </div>

<div className='trendingProducts'>
    <div className="trendingCard">
      <img src={trendingCard} alt='trendingCard' className='imgtrending'/>
      <p className="paraTrending">Auburn cotton handloom bean bag Cover without beans<br/>
         <b className="oldPrice">Rs. 2,999.00</b> Rs. 2,199.00</p>
    </div>
    <div className="trendingCard">
    <img src={trendingCard1} alt='trendingCard'  className='imgtrending'/>
    <p className="paraTrending">Acacia cotton handloom bean bag Cover without beans<br/>
    <b className="oldPrice">Rs. 2,999.00</b> Rs. 2,199.00</p>
    </div>
    <div className="trendingCard">
    <img src={trendingCard} alt='trendingCard' className='imgtrending' />
    <p className="paraTrending">Kiera XXXL cotton handloom bean bag lounger without beans (Red)<br/>
    <b className="oldPrice">Rs. 2,999.00</b> Rs. 2,299.00</p>
    </div>
    <div className="trendingCard">
    <img src={trendingCard1} alt='trendingCard' className='imgtrending' />
    <p className="paraTrending">Cotton Handloom Moroccan Pouf cover , Blue & Red<br/>
    <b className="oldPrice">Rs. 2,999.00</b> Rs. 999.00</p>
    </div>
    <div className="trendingCard">
    <img src={trendingCard} alt='trendingCard' className='imgtrending' />
    <p className="paraTrending">Scarlet cotton handloom bean bag cover & Footstool cover<br/>
    <b className="oldPrice">Rs. 2,999.00</b> Rs. 2,999.00</p>
    </div>
    <div className="trendingCard">
    <img src={trendingCard1} alt='trendingCard' className='imgtrending' />
    <p className="paraTrending">Bumblebee cotton handloom Football bean bag Cover & Footstool cover<br/>
    <b className="oldPrice">Rs. 2,999.00</b> Rs. 2,999.00</p>
    </div>
</div>

<div className='subscribesec'>
   <h2>Subscribe to our newsletter</h2>
   <p></p>
   <p>Promotions, new products and sales. Directly to your inbox.
   </p>
<br /><br />

   <div className='subscribeChilddiv'>
   <Input className='subscribeemail' type='email' placeholder='Your email' />
   <button type='submit' className='subscribeBtn'>SUBSCRIBE</button>
   </div>
</div>


<br/>
<br/>
<br/>
<br/>
<Footer />
</div>
</div>
    
    
    </>
  )
}

export default Home