import React from 'react'
import './reviews.css';

const Reviews = () => {
  return (
    <div className='reviews-container section-padding my-cream'>
      <h2>Hear What Our Customers</h2>
      <h2>Have to Say</h2>
      <div className='reviews-box'>
        <div className='box'>
          <div className='profile'>
            <div className='profile-pic' />
            <h4>Enya Abua</h4>
          </div>
          <div className='comment my-cream'>
            <p>Nice company to deal with.Excellent and very good at</p>
            <p>exporting,logistics and human capital development.</p>
          </div>
        </div>
          
        <div className='box'>
          <div className='profile'>
            <div className='profile-pic' />
            <h4>Bashiru Basit</h4>
          </div>
          <div className='comment my-cream'>
            <p>Nice company to deal with.Excellent and very good at</p>
            <p>exporting,logistics and human capital development.</p>
          </div>
        </div>  

        <div className='box'>
          <div className='profile'>
            <div className='profile-pic' />
            <h4>Adekunle Moruf</h4>
          </div>
          <div className='comment my-cream'>
            <p>Nice company to deal with.Excellent and very good at</p>
            <p>exporting,logistics and human capital development.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Reviews
