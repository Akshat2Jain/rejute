import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="fullscreen-container">
    <div className="sign-up-container">
      <h1 className="signup-header">Login Here</h1>
      {/* <p className="signup-text">It's Free and Only Take a Minute!</p> */}
        <form className="form">  
          <div className="input-container">
            <label for="first-name">Username</label>
            <input type="text" id="first-name" name="first-name"/>
          </div>

          
          <div className="input-container">
            <label for="email">Email</label>
            <input type="email" id="email" name="email"/>
          </div>

          <div className="input-container">
            <label for="password">Password</label>
            <input type="password" id="password" name="password"/>
          </div> 

         
          
          <button>Login</button>
          
        <div className="login-here">  
          <p className="account">Didn't  have an account?</p>
          <Link to="/joinus" className='login'>Sign up</Link>
        </div> 
          
        </form>
    </div>
  </div>
    </>
  )
}

export default Signup