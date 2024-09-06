import React from 'react'
import './services.css';
import banner1 from '../../assets/cocoa.webp'
import banner2 from '../../assets/cocoa 3.jpeg'

const Services = () => {
  return (
    <div className='services-container'>
      <h2>Who We Serve</h2>
      <p className='who-p'>We proudly serve a diverse clientele, including shipping lines, importers, goverment agencies among others.</p>
      <p className='who-p'>Whether you are a stakeholder in the agricultural supply chain or seeking premium commodities our</p>
      <p className='who-p'>expertise, reliability, and commitment to quality cater to the unique needs of each sector.</p>
      <div className='service-flex1'>
        <p><a href="#">Local Buying Agent</a></p>
        <p><a href="#">Buyers</a></p>
        <p><a href="#">Government Agencies</a></p>
      </div>
      <div className='banner-1'>
        <img src={banner1} alt="banner1" />
        <div className='banner1-text'>
          <h3>Local Buying Agent (LBA)</h3>
          <p>As a vital link between farmers and the market, our Liscend Buying Agents play a crucial role in ensuring the</p>
          <p>quality and constitency of agricultural produtcs. Starlink Global & Ideal Limited supports LBAs with</p>
          <p>comprehensive training, fair compensation, and logistical assitance to optimise the supply chain, ensuring</p>
          <p>that the best quality produce reaches international markets.</p>
        </div>
      </div>

      <div className='service-flex2'>
        <div className='service-links'>
          <p><a href="#">Farmers</a></p>
          <p><a href="#">Traders</a></p>
          <p><a href="#">Processor</a></p>
          <p><a href="#">Shipping Lines</a></p>
          <p><a href="#">Government Agencies</a></p>
        </div>  

        <div className='banner-1'>
          <img src={banner2} alt="banner2" />
          <div className='banner1-text'>
            <h3>Local Buying Agent (LBA)</h3>
            <p>As a vital link between farmers and the market, our Liscend Buying Agents play a crucial role in ensuring the</p>
            <p>quality and constitency of agricultural produtcs. Starlink Global & Ideal Limited supports LBAs with</p>
            <p>comprehensive training, fair compensation, and logistical assitance to optimise the supply chain, ensuring</p>
            <p>that the best quality produce reaches international markets.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
