import React from 'react'
import '../Styles/navBar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function NavBar() {

  // Function to handle smooth scrolling
const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

  return (
    <>
    <div className='navBar'> 
      <div className="leftNavBar">
          <img src={require('../../images/thar retreats logo.png')} alt="This is logo" width={'20%'} />
      </div>
<div className="centerNavBar">

  <Link to="/">   Home </Link>
  <div className="dropDown">

<button className='dropBtn'> Accomodation </button>
<div className="dropDown_Content">
  <Link> Superior Room </Link>
  <Link> Deluxe Room </Link>
  <Link> Junior Suite Room </Link>
</div>
  </div>
<Link to="/" onClick={() => handleScroll("newsEvents")}> News and Events </Link>
<Link > About Us </Link>
<Link to="/ContactUs"> Contact Us </Link>
</div>
<div className="rightNarBar">
     <Link to="/login">
      <button className='btnLoginNav'> Login </button>
     </Link>
     <Link to="/signUp">

      <button className='btnSignUpNav'> Sign Up </button>
    </Link>
</div>
    </div>
    </>
  )
}

