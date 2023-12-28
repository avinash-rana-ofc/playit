import React from 'react'
import Navbar from './Navbar'
import BannerBackGround from '../Assets/home-banner-background.png';
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src = {BannerBackGround} alt = ""></img>
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
            A Tech Based Mobile App and Game Development 
            Company Offering 360-degree Solutions
            </h1>
            <p className="primary-text">
            Grow your Business with the Award-Winning Mobile App and Game Development 
            Company that is specialized in serving clients with trending technologies 
            like Blockchain, Metaverse, IoT, NFT, AR & VR, etc.with quality and perfection.
            </p>
            <button className='secondary-button'>
              Get Free Consultation <FiArrowRight/>
            </button>
          </div>
        </div>
    </div>
    
  )
}

export default Home