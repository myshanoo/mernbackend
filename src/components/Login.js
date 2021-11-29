import React from 'react'
import signin from "../components/images/signinnew.png"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <section className="signnup">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signin} alt="registration pic"></img>
              </figure>
              <NavLink to="/Signup" className="signup-image-link">Create an Account</NavLink>
            </div>
            <div className="signin-form">
              <h2 className="signin-title" >SignIn</h2>
              <form className="signin-form" id="signin-form">

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label><br />
                  <input type="text" name="email" id="email" autoComplete="off"
                    placeholder="Enter Your Email"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="passwod">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label><br />
                  <input type="passwod" name="passwod" id="passwod" autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit"
                    value="Signin" />

                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Login