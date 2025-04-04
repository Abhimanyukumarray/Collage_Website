import React from 'react'
import './Campus.css';
import gallary_1 from '../../assets/library_1.jpg';
import gallary_2 from '../../assets/library_2.jpg';
import gallary_3 from '../../assets/library_3.jpg';
import gallary_4 from '../../assets/library_4.jpg';
import white_arrow from '../../assets/white-arrow2.jpg';


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallary">
            <img src={gallary_1} alt="" />
            <img src={gallary_2} alt="" />
            <img src={gallary_3} alt="" />
            <img src={gallary_4} alt="" />
        </div> 
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus