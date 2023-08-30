import React from 'react'
import '../styles/signUp.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export default function SignUp() {
  return (
    
    <div className='signUp'>

        <div className="signUpCont">

<div className="signUpInside">

            <div className='signUpLeftPic'>
          
            </div>
            
                <form action="http://localhost:4000/register" method='post' className='signUpForm'>
            <h1> SignUp </h1>

                    <label className='lable'> Username </label>
                    <input name='name' type="text" className='input' />

                    <label className='lable'> Email </label>
                    <input name='email' type="email" className='input' />
                    
                    <label htmlFor="" className='lable'> Password </label>
                    <input name='password' type="password" className='input ' />

            <button className='btnSignUp' > Sign Up </button>
                    <p> Already have an account. <Link to="/login"> Login here </Link> </p>

                    <button className='btnGoogle'> </button>
                    <button className='btnGoogle'> </button>
                    </form>           
</div>
        </div>
    </div>
  )
}
