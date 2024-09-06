import React from 'react'
import './footer.css';
import { FaInstagram, FaYoutube, FaTwitter,FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container section-padding' id='contact'>
      <div className='footer-wrapper'>
        <div className='footer-1'>
          <h1>STARLINK</h1>
          <h3>GLOBAL&IDEALLTD</h3>
          <p>We provide a system of assurance of service for an open and flexible</p>
          <p>system of trading, by creating and promoting innovative and diverse</p>
          <p>market of opportunities, through a combination of a strong in-house</p>
          <p>specialization of our markets, collaboration and just mutual co-</p>
          <p>operation with the best partners to achieve our objectives.</p>
          
          <div className='footer-links'>
            <p><a href="#home">Home</a></p>
            <p><a href="#about us">About Us</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#carrer">Career</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#contact">Contact us</a></p>
          </div>
        </div>

        <div className='footer-2 my-cream'>
          <p className='footer-p'>let's talk</p>
          <p className='footer-p'>@info@starlinkglobalng.com</p>
          <p className='footer-p'>+234 704 451 0643</p>
          <div className='address'>
            <p>Corporate Head office:106/108, Apapa- </p>
            <p>Oshodi Express Way,Aswani Isolo Industrial</p>
            <p>Estate,Lagos, Nigeria</p>
          </div>
          <div className='footer-2-line'/>
          <div className='footer-icons'>
            <FaInstagram  className='icons'/>
            <FaYoutube className='icons'/>
            <FaTwitter  className='icons'/>
            <FaTelegram  className='icons'/>
          </div>
        </div>
      </div>

      <div  className='footer-end-line'/>
      <div className='footer-end'>
        <p>© 2024 Starlink Global and Ideal Ltd. All rights reserved.</p>
        <div className='footer-t'>
          <p className='footer-p' >Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>

      
  )
}

export default Footer
