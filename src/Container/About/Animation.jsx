import React from 'react';
import './Animation.css';

const Animation = () => {
  return (
    <div className='skill'>
        <h1>MY SKILL</h1>
        <li><h3>HTML</h3>
        <div className='bar'>
            <div className='bar_left1'></div >
            <div className="bar_right">90%</div>
        </div>
        </li>
        <li><h3>CSS</h3>
        <div className='bar'>
            <div className='bar_left2'></div >
            <div className="bar_right">80%</div>
        </div>
        </li>
        <li><h3>JAVASCRIPT</h3>
        <div className='bar'>
            <div className='bar_left3'></div>
            <div className="bar_right">60%</div>
        </div>
        </li>
        <li><h3>REACT.JS</h3>
        <div className='bar'>
            <div className='bar_left4'></div>
            <div className="bar_right">70%</div>   
        </div>
        </li>
    </div>
  )
}

export default Animation