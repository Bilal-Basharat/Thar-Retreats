import React from 'react'
import '../Styles/navBar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function NavBar() {
  
  return (
    <>
    <div className='navBar'> 
      <div className="leftNavBar">
          <img src={require('../../images/thar retreats logo.png')} alt="This is logo" width={'20%'} />
      </div>
<div className="centerNavBar">

  <Link>   Home </Link>
  <div className="dropDown">

<button className='dropBtn'> Accomodation </button>
<div className="dropDown_Content">
  <Link> Room Type 1 </Link>
  <Link> Room Type 2 </Link>
</div>
  </div>
<Link> News and Events </Link>
<Link> About Us </Link>
<Link> Contact Us </Link>
</div>
<div className="rightNarBar">
      <button className='btnLogin'> Login </button>
      <button className='btnSignUp'> Sign Up </button>
</div>
    </div>
    </>
  )
}

