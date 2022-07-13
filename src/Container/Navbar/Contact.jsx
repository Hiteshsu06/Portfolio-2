import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_y4jpvzr', 'template_wy5ojh5', e.target, 'c8AIGo2P8cAOBTjye')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='contact_main'>
      <form className="contact-form" onSubmit={sendEmail}> 
      <div className="contact-form1">
      <input type="text" className="contact-form1" placeholder='NAME*' name="name" />
      </div>
      
      <div className="contact-form1">
      <input type="email" className="contact-form1" placeholder='EMAIL*' name="email" />
      </div>

      <div className="contact-form1">
      <input type="text" className="contact-form1" placeholder='SUBJECT*' name="subject" />
      </div>

      <div className="contact-form2">
      <textarea className="contact-form2" placeholder='MESSAGE*' name="message" />
      </div>

      <div className="contact-form4">
      <input type="submit" className="contact-form3"  value="SEND MESSAGE" />
      </div>
    </form>


    </div>
  )
}

export default Contact