import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import emailsender from '../../assets/emailsender.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ContactUs = () => {
  const notify = () => toast("SENT SUCCESSFULLY !");


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   

    emailjs
      .sendForm('service_Abisheik27', 'template_3uaq25c', form.current, {
        publicKey: 'IQcGAimg815OjOWrG',
      })
      .then(
        (result)=>{
          console.log('success',resul.text);
        },
        (error)=>{
          console.log('faild',error.text);
        },
      );
    };

  return (
    <div id='connect' >
     
      <div className='get'>
      <h1>GET TOUCH WITH ME</h1>
      </div>
    
      <div className='contact-cont'>
        <img src={emailsender} id="emailsender" />
    <form className="contact-left"   ref={form} onSubmit={sendEmail}>
       <div className='contact-title'>
       <h2>contact me</h2>
       <hr />
       </div>
      <label id='email'>Name</label>
      <input type="text" name="from_name" className='contact-input' />
      <label id='email'>Your Email</label>
      <input type="email" name="from_email"  className='contact-input'/>
      <label id='email'>Message</label>
      <textarea name="message"  className='contact-input' />
      <button onClick={notify}>SEND</button>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
       />
    </form>
    
   
    </div>
    </div>
  );
};


export default ContactUs