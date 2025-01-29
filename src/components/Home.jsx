import React from 'react'
import firstcar from '../assets/happynew.jpg'
import secondcar  from '../assets/landscapehandcrafted.jpg'
import thirdcar from '../assets/yellow_multiple.jpg'

const Home = () => {
  return (
    <>
    <h1>Header </h1>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
  <div className="carousel-item active">
            <img src={firstcar}  className="d-block w-100" alt="Slide 1" />
     </div>
    <div className="carousel-item">
             <img src={secondcar}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={thirdcar}  className="d-block w-100" alt="..." />
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
</div>
    
    
    </>
  )
}

export default Home