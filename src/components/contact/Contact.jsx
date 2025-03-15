import React from 'react'
import './contact.css'
import {BsFillWalletFill, BsWhatsapp} from 'react-icons/bs'
import {FaPhone,FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {
    
    // sweet alert function 
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })


  return (
    <div className='contact-section' id='contact'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text contact-p" >
            <div className="header" data-aos="fade-up">
                <span className="header-line contact-line"></span>
                <h2 className='contact-h1'>contact us</h2>
            </div>
            <h1 data-aos="fade-up">keep in touch</h1>
            <p data-aos="fade-up">
                Any question? Reach out to us and we’ll get back to you shortly.
            </p>
            <div className="contact-card" data-aos="fade-up">
                <a href='https://t.me/+t037wRWxHuA1NGFk' className="ball contact-ball">
                    <FaTelegramPlane />
                </a>
                <a href='mailto:vertexglobalwealth@gmail.com' className="ball contact-ball">
                    <FiMail />
                </a>
                <a href="https://api.whatsapp.com/send?phone=19833332992"className="ball contact-ball">
                    <BsWhatsapp />
                </a>
            </div>
        </div>
        <div className="contact-form-container">
            
        </div>
        </div>
    </div>
  )
}

export default Contact