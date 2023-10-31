import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>saarthakverma739@gmail.com</h5>
            <a href="mailto:saarthakverma739@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h4>Connect on</h4>
            <h5>LinkedIn</h5>
            <a href="https://www.linkedin.com/in/saarthak-verma-ba7375229/" target="_blank">Connect!</a>
          </article>
          <article className='contact__option'>
            <BiPhoneCall  className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5> +91 726-684-8545 </h5>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
