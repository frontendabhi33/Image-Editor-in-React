import React, { useState } from 'react'
import './Login.css';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleSlideChange = () => {
        setIsSignup(!isSignup);
      };    


      console.log("hello")

  return (
    <>
      <div className="wrapper">
        <div className="title-text">
            <div className={`title ${isSignup ? 'signup' : 'login'}`}>
                {isSignup ? 'Signup Form' : 'Login Form'}
            </div>
        </div>
        <div className="form-container">
            <div className="slide-controls">
                <input type="radio" name="slide" id="login" checked={!isSignup}/>
                <input type="radio" name="slide" id="signup" checked={isSignup}/>
                <label htmlFor="login" className='slide login'onClick={handleSlideChange}>Login</label>
                <label htmlFor="signup" className='slide signup' onClick={handleSlideChange}>Signup</label>
                <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
                {
                    isSignup ? (
                        <form action="#" className='signup'>
                             <div className="field">
                               <input type="text" placeholder="Email Address" required />
                             </div>
                             <div className="field">
                               <input type="password" placeholder="Password" required />
                             </div>
                             <div className="field">
                               <input type="password" placeholder="Confirm password" required />
                             </div>
                             <div className="field btn">
                             <div className="btn-layer"></div>
                               <input type="submit" value="Signup" />
                             </div>
                        </form>
                     
                    ) : (
                        <form action="#" className='login'>
                        <div className="field">
                          <input type="text" placeholder='Email Address' required/>
                        </div>
                        <div className="field">
                          <input type="password" placeholder='Password' required/>
                        </div>
                        <div className="pass-link">
                          <a href="#">Forgot Password ?</a>
                        </div>
                        <div className="field btn">
                          <div className="btn-layer"></div>
                          <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">
                           Not a member? <a href="#" onClick={() => setIsSignup(true)}>Signup now</a>
                        </div>
                      </form>

                    )
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Login