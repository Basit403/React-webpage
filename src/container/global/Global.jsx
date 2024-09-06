import React from 'react'
import './global.css';
import { cocoa2,cocoa3,truck } from './imports';

const Global = () => {
  return (
    <div className='global-head my-cream' id='about us'>
      <h1 className='welcome'>Welcome to Starlink Global & Ideal</h1>
      <div className='global-p'>
        <p>Our history dates back to 1948, however, our operation as it is today was incorporated in 2002, with formation and transition period between 1999-2002.We</p>
        <p>emanated from R.A. Adeniji Enterprises, a prominent cocoa producer and supplier to many international buyers for more than 50 years.We have continued</p>
        <p>this knowledge and skills successfully from the farms to many of our clients many of whom are cocoa processors and chocolate producers globally</p>
      </div>

      <div className='global-pics-container section-padding my-cream'>
        <div className='global-pics1'>
          <div className='global-pics-text1'>
            <img src={cocoa2} alt="cocoa2" />
            <h1 className='agr'>Agricultural</h1>
            <p>Cocoa sourced from the heart of Nigeria's<br/>cocoa-producing zones, our commitment<br/>  to excellence ensures each cocoa bean<br/>carries the essence of superior<br/>agricultural practices.</p>
          </div>
        </div>

        <div className='global-pics2'>
          <div className='global-pics-text2'> 
            <img src={truck} alt="truck" />
            <div className='rel'>
              <h1 className='agr'>Reliable Haulage Solutions</h1>
              <p>Cocoa sourced from the heart of Nigeria's<br/>cocoa-producing zones, our commitment<br/>  to excellence ensures each cocoa bean<br/>carries the essence of superior<br/>agricultural practices</p>
            </div>
          </div>

          <div className='global-pics3'>
            <div className='global-pics3-text'>
              <h1 className='text-p'>State-of-the-Art Warehousing</h1>
              <p className='cocoa-p'>Cocoa sourced from the heart of Nigeria's<br/>cocoa-producing zones, our commitment<br/>  to excellence ensures each cocoa bean<br/>carries the essence of superior<br/>agricultural practices</p>
            </div>

            <div className='global-pics3-img'>
              <img src={cocoa3} alt="cocoa3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Global
