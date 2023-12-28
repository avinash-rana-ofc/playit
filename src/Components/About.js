import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-game.png';
import { BsPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=''></img>
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt=''></img>
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>
                About
            </p>
            <h1 className="primary-heading">
                An App and Game Development Company Driven by Next-Gen Technologies
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe debitis dolorem recusandae eos tempore at possimus magni 
                doloribus nisi ex aspernatur laudantium error fuga, 
                ab sed quod ratione quae praesentium?
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn More</button>
                <button className="watch-video-button">
                    <BsPlayCircleFill/> Watch Video
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default About;