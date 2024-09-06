import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi';
import './navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="my-navbar my-cream section-padding">
      <div className="my-navbar-starlink">
          <h1>STARLINK</h1>
      </div>
      
      <div className="my-navbar-links"> 
        <p><a href="#home">Home</a></p>
        <p><a href="#about us">About Us</a></p>
        <p><a href="#services">Services</a></p>
        <p><a href="#carrer">Career</a></p>
        <p><a href="#blog">Blog</a></p>
      </div>

      <div className="my-navbar-button">
        <a href="#contact" className='my-brown' >Contact Us</a>
      </div>

      <div className="my-navbar-smallscreen">
        {toggleMenu
          ? <RiCloseLine color="#6d4c41" size={40} onClick={() => setToggleMenu(false)} />
          : <GiHamburgerMenu color="#6d4c41" size={40} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
        <div className="my-navbar-container">
          <div className="my-navbar-small">
            <p><a href="#home">Home</a></p>
            <p><a href="#about us">About Us</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#carrer">Career</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
        </div>
        )}
      </div>        
    </div>
  )
}

export default Navbar