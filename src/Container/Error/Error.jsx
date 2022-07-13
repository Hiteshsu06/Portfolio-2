import React from 'react';
import Error_img from './Error.png'; 
import './Error.css';

const Error = () => {
  return (
    <div className="Error_main">
      <div className='heading'>
      <span>404 ERROR </span>
      <br />
      <span>Page Not Found</span>
      </div>
      <div className='Image'><img src={Error_img} alt="" width="500px" height="500px"/></div>
    </div>
  )
}

export default Error