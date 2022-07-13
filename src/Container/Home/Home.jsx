import React from 'react';
import './Home.css';
import Home_img from '../Images/Home.png';
import CV from './CV.pdf';
const Home = () => {
  return (
    <div className='Home_main'>
       <div className='Home_main-1'>
            <span className='Home_main_intro'>Hy! I AM</span><br />
            <span className='Home_main-1-1'>
                <span className='Home_main-1-1-1'>H</span>
                <span className='Home_main-1-1-2'>itesh</span>
            </span><br />
            <span className='Home_main-1-1'>
                <span className='Home_main-1-1-1'>S</span>
                <span className='Home_main-1-1-2'>ukhpal</span>
            </span>
            <div className="Home_para">Frontend Developer with expertise in designing and development , and producing the Quality work.</div>
            <a href={CV}download><button className='Home_btn'>CV</button></a>
       </div>
       <div className='Home_main-2'>
       <img src= {Home_img} className="Home_img" alt="Home_image" width="500px" height="500px" /> 
       </div>
    </div>
  )
}

export default Home