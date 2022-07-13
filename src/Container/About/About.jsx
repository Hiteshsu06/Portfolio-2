import React from 'react';
import './About.css';
import about_img from '../Images/About.png';
import Animation from './Animation.jsx'

const About = () => {
  return (
    <div className='About_main'>
           <div className="About_1">
            <Animation/>
           </div>
           <div className="About_2">
                       <div className='About_2_up'>
                            <span className='A_2_1'>MY INTRODUCTION:-</span><br /><br />
                            <div className='A_2_2'>I AM </div><br />
                            <div className='A_2_2'>UI/UX designer,</div><br />
                            <div className='A_2_2'>Delivering Quality Work</div>
                       </div>
                       <div className='About_2_down'>
                             <span className='About_2_down_1'>1+</span><br /><br />
                             <span className='About_2_down_2'>completed</span><br />
                             <span className='About_2_down_3'>projects</span>
                       </div>
           </div>
           <div className="About_3">
              <img src={about_img} className="About_left_down" width="400px" height="400px" alt="" />
           </div> 
    </div>
  )
}

export default About