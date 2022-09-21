import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="fullscreen-container">
    <div className="sign-up-container">
      <h1 className="signup-header">Sign Up</h1>
      {/* <p className="signup-text">It's Free and Only Take a Minute!</p> */}
        <form className="form">  
          <div className="input-container">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name"/>
          </div>

          <div className="input-container">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name"/>
          </div>

          <div className="input-container">
            <label for="email">Email</label>
            <input type="email" id="email" name="email"/>
          </div>

          <div className="input-container">
            <label for="password">Password</label>
            <input type="password" id="password" name="password"/>
          </div> 

          <div className="input-container">
            <label for="confirm-password">Confirm Password</label>
            <input type="confirm-password" id="confirm-password" name="confirm-password"/>
          </div>
          
          <button>Sign Up</button>
          
        <div className="login-here">  
        <p className="account">Already have an account?</p>
          <Link to="/signup" className='login'>Login Here</Link>
        </div> 
          
        </form>
    </div>
  </div>
  )
}

export default Login;