import React from 'react';
import './Topbar.css';
import {AiOutlineMail} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Topbar = () => {
  
  return (
    <div className='Topbar'>
        <div className="title">HITESH SUKHPAL</div>
        <div className="mail">
        <Link exact activeClassName="activebar" to="/Contact"><AiOutlineMail/></Link>
        </div>
    </div>
  )
}

export default Topbar