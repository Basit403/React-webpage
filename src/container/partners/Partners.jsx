import React from 'react'
import './partners.css';
import { partner1,partner2,partner3,partner4 } from './import';

const Partners = () => {
  return (
    <div className='partner-container section-padding'>
      <h1>Our Partners</h1>
      <div className='partner-img'>
        <div>
          <img src={partner1} alt="partner1" />  
        </div>  

        <div>
          <img src={partner2} alt="partner2" /> 
        </div>

        <div>
          <img src={partner3} alt="partner3" />
        </div>

        <div>
          <img src={partner4} alt="partner4" />
        </div>
      </div>
      
    </div>
  )
}

export default Partners
