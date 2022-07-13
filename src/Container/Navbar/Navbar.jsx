import React ,{useEffect} from 'react';
import {NavLink,Outlet,useLocation} from 'react-router-dom';
import './Navbar.css';
import Topbar from './Topbar';
import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaLinkedinIn} from "react-icons/fa";


const Navbar = () => {
  let location =useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location]);
  return (
    <>
       <div className='main'>
       <div className='Topbar'><Topbar/></div>
       <div className='Sidebar'>
        <div className='Sidebar_left'>
               <div className='facebook'><a href="https://www.facebook.com/hiteshsukhpal03"><FaFacebookF/></a></div>
               <div className='instagram'><FaInstagram/></div>
               <div className='twitter'><a href="https://twitter.com/harishgangani?t=7cexrTtoofRPu1TwYp3_-g&s=08"><FaTwitter/></a></div>
               <div className='github'><a href="https://github.com/Hiteshsu06"><FaGithub/></a></div>
               <div className='Linkedin'><a href="https://www.linkedin.com/in/hitesh-sukhpal-83716b137"><FaLinkedinIn/></a></div>
       </div>
            <div className="Sidebar_right"><Outlet/></div>
       </div>
       <div className="Navbar">
              <ul>
                 <li><NavLink className={`nav-link ${location.pathname==="/Home"?"active":""}`} to="/Home">Home</NavLink></li>
                 <li><NavLink className={`nav-link ${location.pathname==="/About"?"active":""}`} to="/About">About</NavLink></li>
              </ul> 
       </div>
    </div>
    </>
  )
}

export default Navbar