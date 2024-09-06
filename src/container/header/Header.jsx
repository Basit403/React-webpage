import React from 'react'
import './header.css';
import cocoa from '../../assets/cocoa.webp'

const Header = () => {
  return (
    <div className='head-container section-padding my-cream' id='home'>
      <div className='head-1'>
        <p className='headtext-1'>Reliable Haulage Solutions</p>
        <h1>Agricultural Excellence Secure Haulage Services For Your <span className='head-span'>Agricultural  Needs Experience in</span> Freshness and Quality of Cocoa</h1>
        <p className='headtext-2'>Indulge in an exquisite journey and experience the unparalleled freshness and quality of our cocoa. Sourced from the heart of Nigeria's cocoa-producing zones, our commitment to excellence ensures each cocoa bean carries the essence of superior agricultural practices.</p>
        <div className='head-button'>
         <a href="#" className='my-brown' >Explore Our Services</a>
        </div>
      </div>

      <div className='head-2'>
        <img src={cocoa} alt="cocoa" />
      </div>
      
    </div>
  )
}

export default Header
