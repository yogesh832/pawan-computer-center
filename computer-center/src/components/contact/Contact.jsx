import React from 'react';
import contactimg from '../../assets/Images/contactimg.png'
import style from '../contact/Contact.module.css'

function Contact() {
    return (
<>
          <div className={style.title}>
          <h1 className={style.heading}>CONTACT US</h1>
          <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER SOCIAL MEDIA. </p>
          </div>
          <div className={style.container}>
        <div className={style.left}>
         <form >
          
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example1">Name</label>
                <input type="text" id="form4Example1" className="form-control" placeholder='Enter your Name...' />
                
            </div>

            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example2">Email address</label>
                <input type="email" id="form4Example2" className="form-control" placeholder='Enter you Email (abc@gmail.com)' />
                
            </div>

            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example3">Message</label>
                <textarea className="form-control" id="form4Example3" rows="4" placeholder='Enter you message...'></textarea>
                
            </div>

            <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
        </div>
        <div className={style.right}> 
        <img src={contactimg} alt='contactimg'/>
        </div>
        </div>
        </>
    );
}

export default Contact;

