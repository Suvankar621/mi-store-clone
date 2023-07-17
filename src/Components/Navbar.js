import React from 'react'
import '../Stylesheet/Navbar.css'
import Data from '../data/data.json'

function Navbar() {
  return (
    <div className="nav">
       <div className="logo">
       <a  href="/logo">
           <img id="logoimage" src={Data.logo} alt="Not" />
       </a>
       </div>
      <a className="navlinks" href="/miphones">Mi Phones</a>
      <a className="navlinks" href="/redmiphones">Redmi Phones</a>
      <a className="navlinks"href="/tv">TV</a>
      <a className="navlinks"href="/laptop">Laptop</a>
      <a className="navlinks"href="/lifestyle">Fitness & Lifestyle</a>
      <a className="navlinks"href="/home">Home</a>
      <a className="navlinks"href="/audio">Radio</a>
      <a className="navlinks" href="/accessories">Accessories</a>
      
      

   </div>
  )
}

export default Navbar