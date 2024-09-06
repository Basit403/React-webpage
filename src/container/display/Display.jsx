import React from 'react'
import './display.css';
import { slide1,slide2,slide3,slide4,slide5,slide6 } from './imports';

const Display = () => {
  return (
    <div className='slider'>
      <div className='slide-track'>
        <div className='slide'>
          <img src={slide1} alt="slide1" />  
        </div>

        <div className='slide'>
          <img src={slide2} alt="slide2" />
        </div>

        <div className='slide'>
          <img src={slide3} alt="slide3" />
        </div>

        <div className='slide'>
          <img src={slide4} alt="slide4" />
        </div>

        <div className='slide'>
          <img src={slide5} alt="slide5" />
        </div>

        <div className='slide'>
          <img src={slide6} alt="slide6" />
        </div>

      </div>
    </div>
  )
}

export default Display
