import React, { useState } from 'react'
import "./RegistrationForm.css"
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'

const RegistrationForm = () => {
  const [action, setAction] = useState('')
  function registerLink() {
    setAction('active');
  }
  function loginLink() {
    setAction('');
  }
  return (
    <div className="RegistrationForm">
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icons' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='password' required />
              <FaLock className='icons' />
            </div>
            <div className="remember-forgot">
              <label > <input type="checkbox" />Remember me</label>
              <a href='#'>Forgot password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className="register-link">
              <p>Don't have a account? <a href='#' onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>

        {/* ----------------------Registration------------------------------------ */}
        <div className="form-box register">
          <form action="">
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icons' />
            </div>
            <div className="input-box">
              <input type="email" placeholder='Email' required />
              <FaEnvelope className='icons' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='password' required />
              <FaLock className='icons' />
            </div>
            <div className="remember-forgot">
              <label > <input type="checkbox" />I agree to the terms and conditions</label>
            </div>
            <button type='submit'>Register</button>
            <div className="register-link">
              <p>Already have a account? <a href='#' onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm;
