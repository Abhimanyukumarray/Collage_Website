import React, { useRef} from 'react'
import './Testimonials.css';
import next_icon from '../../assets/next_arrow3.jpg';
import back_icon from '../../assets/back_arrow.jpg';
import user_1 from '../../assets/user01.jpg';
import user_2 from '../../assets/user02.jpg';
import user_3 from '../../assets/user03.jpg';
import user_4 from '../../assets/user05.jpg';

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
     if(tx > -50){
      tx -= 25;
     }
     slider.current.style.transform =`translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
     }
     slider.current.style.transform =`translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
         <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
         <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
         <div className="slider">
            <ul ref={slider}>
               <li>
                  <div className="slide">
                      <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                          <h3>Abhimanyu Ray</h3>
                          <span>Collage, india</span>
                        </div>
                      </div>
                      <p>
                          BBIT is a reputed institute with modern infrastructure, quality education, strong placements, and skill development programs. 
                          It prepares students with technical expertise, soft skills, and real-world experience, making it a great choice for a successful career.
                      </p>
                  </div>
               </li>

               <li>
                  <div className="slide">
                      <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                          <h3>Tanu Ray</h3>
                          <span>Collage, india</span>
                        </div>
                      </div>
                      <p>
                          BBIT offers well-maintained hostels with comfortable rooms, Wi-Fi, and a good study environment. 
                          The canteen serves hygienic and tasty food with a variety of options. Both provide a safe and friendly atmosphere,
                          making campus life Style enjoyable.
                      </p>
                  </div>
               </li>

               <li>
                  <div className="slide">
                      <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                          <h3>Aditya Raj</h3>
                          <span>Collage, india</span>
                        </div>
                      </div>
                      <p>
                         BBIT focuses on technical & soft skills, offering modern labs, industry projects, coding competitions, and placement training. 
                         Students gain practical experience through internships and workshops, making them industry-ready for a successful career! 
                      </p>
                  </div>
               </li>

               <li>
                  <div className="slide">
                      <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                          <h3>Aashika Roy</h3>
                          <span>Collage, kolkata</span>
                        </div>
                      </div>
                      <p>
                         I am pursuing engineering at BBIT because of its quality education, modern labs, experienced faculty, and strong placement opportunities. 
                         The practical learning environment and industry-focused training make it the perfect place to build a successful career in engineering
                      </p>
                  </div>
               </li>
            </ul>
         </div>
    </div>
  )
}

export default Testimonials;