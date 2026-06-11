import React from 'react'
import '../Styles/footer.css'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  
  return (
    <div className='footer'>

        <div className="leftFooter">
            <h3> Contacts </h3>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores ab commodi? </p>
       <p>
         <Link> info@tharetreats.com </Link>
        </p>
        <p> +92 300 123 45 67 </p>
        <Link> 
        <img className='imgIcon' src={require('../../images/icons/linkedIn.png')} alt="" />
        </Link>

        <Link> 
        <img className='imgIcon' src={require('../../images/icons/fb.png')} alt="" />
        </Link>
        
        <Link> 
        <img className='imgIcon' src={require('../../images/icons/instagram.png')} alt="" />
        </Link>
        
        <Link> 
        <img className='imgIcon' src={require('../../images/icons/youtube.png')} alt="" />
        </Link>
        
        </div>
        
        <div className="centreFooter">

        <h3 style={{marginLeft:'240px'}}> Explore </h3>

        <ul>
            <li> <Link className="footerLink"> Home </Link> </li>
            <li> <Link className="footerLink"> Room and Suites </Link> </li>
            <li> <Link className="footerLink"> About Us </Link> </li>
            <li> <Link className="footerLink"> Contact Us </Link> </li>
            <li> <Link className="footerLink"> Terms & Conditions </Link> </li>
        </ul>

        </div>

        <div className="rightFooter">
            <h3> Newsletter </h3>
            <input type="email" placeholder='Your Email' />
            <Link>
            <FontAwesomeIcon icon="paper-plane" className="sendIcon" />
            </Link> 
        <p style={{width:'300px', lineHeight:'25px',marginTop:'20px'}}> Receive latest offers and promos without spam. You can cancel anytime. </p>
        </div>
    </div>
  )
}
