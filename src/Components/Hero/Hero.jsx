import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark_arrow.jpg';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better eduction for a better world</h1>
            <p>our cutting-edge curriculam is designed to empower students with knowledge,
                skills, and experiances needed to excel in the dynamic feild of eduction
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero