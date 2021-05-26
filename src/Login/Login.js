import React from 'react'
import { Link, } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Login.css'


export default function Login() {

    return (
        <div className = "login">
            <div className = "login_left">
            <div className = "login_leftHeader">
            <Link to="/">
                        <ArrowBackIcon className="login__rightArrow"/>
                     </Link>
            <img 
                    className="login__logo" 
                    src="https://www.ikea.com/nl/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"
                    alt=""
                />
            </div>
                <h1 className = "login_leftTitle"><span className = "yellow">Login</span> to your IKEA account.</h1>
               <div className = "login_para">
               <div className = "login_paraOne">
                <p>Too many passwords?</p>
                <p>You can now login with an OTP we will send on your email address or verified mobile number.</p>
                </div>
                <p className = "login_paraTwo">Access your IKEA account using your email address to add and verify your mobile number.</p>
               </div>
            </div>
           <div className = "login_right">
               <form className = "login_form">
                   <input className = "login_input" type = "email" placeholder = "Email or Verified Mobile Number" />
                   <label className = "inputLabel">Login {" "} <a href = "#">with an OTP</a></label>
                   <input className = "login_input" placeholder = "Password" type = "password" />
                   <label className = "inputLabel"><a href = "#">Forget Your Password?</a></label>
                   <button className = "continue_button">Continue</button>
                   <button className = "signup_button">Not a Member? Sign up</button>

               </form>
               <div className = "formDown_para">
                   <h3>IKEA for Business</h3>
                   <p>Are you a business? Our loyalty club provides exciting offers, planning services, and more! Sign up to IKEA for Business
                      <a href = "#">{" "} Signup to IKEA for Business</a></p>
               </div>
           </div>
        </div>
    )
}
