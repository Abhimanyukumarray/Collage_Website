import React from 'react'
import './Programs.css';
import program_1 from '../../assets/classroom.jpg';
import program_2 from '../../assets/allfriclassroom.jpg';
import program_3 from '../../assets/rahul.jpg';
import program_icon_1 from '../../assets/readbook.jpg';
import program_icon_2 from '../../assets/readbook.jpg';
import program_icon_3 from '../../assets/readbook.jpg';

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>B.Tech Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>B.Tech Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>B.Tech Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs