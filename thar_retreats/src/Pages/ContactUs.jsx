import React from 'react'
import '../styles/contactUs.css';
import NavBar from '../Components/Pages/navBar';
import Footer from '../Components/Pages/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactUs() {
  return (
    <>
    <NavBar />

    <div className='contactUs'> 
            
        <div className="contactBackground">
          <div className="belowHeader">
            <h4> Best Hotel Reservation Services In Pakistan </h4>
            <h1> Contact Us </h1>
          </div>

        </div>

    <div className="ContactSection">

        <div className="contactInside">
            <h1> Get in Touch </h1>
            <form action="" className='contactForm'>

                <input type="text" placeholder='Name'  />
                <input type="email" placeholder='Email'  />
                <input type="number" placeholder='Mobile'  />
                <input type="number" placeholder='Telephone' />

                <textarea name="" id="" cols="30" rows="10">

                </textarea>
                <button className='submitQuery'> Submit </button>
            </form>
        </div>

    <div className="contactInside2">

        <FontAwesomeIcon icon='fa-location-dot' className='iconStyle' size='2x' />
        <h1> Address </h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, a. </p>

        <FontAwesomeIcon icon='fa-envelope' className='iconStyle' size='2x' />
        <h1> Email </h1>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, a. </p>

        <FontAwesomeIcon icon='fa-phone' className='iconStyle' size='2x' />
        <h1> Telephone </h1>
        <p style={{marginBottom:'10px'}}> +92 300 123 45 67 </p>
        <span className='spanTag'>  Monday to Friday: 9am to 7pm  </span>

    </div>
    
    </div>

    </div>
    <Footer />
    </>
  )
}
