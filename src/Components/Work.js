import React from 'react';
import Research from '../Assets/research_project.png';
import Testing from '../Assets/testing.png';
import Development from '../Assets/development.png';

const Work = () => {
    const workInfoData = [
        {
            id : 1,
            image : Research,
            title : "Research",
            text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugit voluptates! In dolor quisqua"
        },
        {
            id : 2,
            image : Testing,
            title : "Testing",
            text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
        },
        {
            id : 3,
            image : Development,
            title : "Developement",
            text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, fugit voluptates!"
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How it Works!</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum nulla, 
                maxime similique deleniti quos porro recusandae aperiam magnam ut 
                accusamus ea optio, perferendis aliquid sit veritatis, nihil error odio?
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div key={data.id} className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt= ""></img>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Work