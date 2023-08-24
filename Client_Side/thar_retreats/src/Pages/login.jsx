import React from 'react'
import '../styles/login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Login() {
  return (
    
    <div className='login'>

        <div className="loginCont">

<div className="loginInside">

            <div className='loginLeftPic'>
          
            </div>
            
                <form action="" className='loginForm'>
            <h1> Login </h1>

                    <label className='lable'> Email </label>
                    <input type="email  " className='input' />
                    
                    <label htmlFor="" className='lable'> Password </label>
                    <input type="password" className='input ' />
            <button className='btnLogin' > login </button>
                    <p> Don't have an account. <Link to="/signUp"> Sign Up </Link> </p>
                    </form>           
</div>
        </div>
    </div>
  )
}
