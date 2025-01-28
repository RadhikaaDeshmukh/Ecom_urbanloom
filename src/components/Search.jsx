import React from 'react'
import './Search.css'
import serachfill from '../assets/searchsill.svg'

const Search = () => {
  return (
    <>
        <h1>Search</h1>
        <div className="mainDiv">
        <input type="text" className="inputField" placeholder="Search our store" />
        <img src={serachfill} className="searchIcon" alt="Search" />
        </div>


    </>
  )
}

export default Search