import React from 'react'
import './About.css';
import about_img from '../../assets/topigirl.jpg';
import play_icon from '../../assets/play_icon.jpg';


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Students Today</h2>
            <p>
              Budge Budge Institute of Technology (BBIT) is a private technical college in Nischintapur, Kolkata, established in 2009. 
              It offers diploma, B.Tech, M.Tech, and MBA programs. BBIT is affiliated with MAKAUT and WBSCTE and is AICTE-approved. 
              The campus has modern infrastructure, research facilities, and strong industry connections for placements. 
              More details: bbit.edu.in.
             </p>
        </div>
    </div>
  )
}

export default About