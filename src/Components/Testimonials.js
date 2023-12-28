import React from 'react'
import ProfilePic from '../Assets/workspace.jpg'
import {AiFillStar} from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className='primary-heading'>
                What they are saying?
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nihil delectus voluptatibus officia sapiente nostrum laudantium maiores quasi, 
                enim possimus aliquid quis sed perspiciatis dolore? Itaque error iure iusto veritatis sed!
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt=""/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempora culpa pariatur consectetur libero repudiandae iste aspernatur?
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Play Bit Tech Company</h2>
        </div>
    </div>
  )
}

export default Testimonials