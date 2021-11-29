import React from "react"
import { NavLink } from "react-router-dom"
import signup from "../components/images/sinup1.jpg"



const Signup = () => {
  return (
    <>
      <section className="signnup">
        <div className="container mt-5">
          <div className="signup-content">
          <div className="signup-image">
              <figure>
                <img src={signup} alt="registration pic"></img>
              </figure>
              <NavLink to="/login" className="signup-image-link">Iam Already Registered</NavLink>
            </div>
          <div align="center "className="signup-form">
            <h2 className="register-title" >Sign up </h2>
            <form className="register-form" id="rgister-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label><br />
                <input type="text" name="name" id="name" autoComplete="off"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label><br />
                <input type="text" name="email" id="email" autoComplete="off"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label><br />
                <input type="number" name="phone" id="phone" autoComplete="off"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="work">
                  <i classwork="zmdi zmdi-account material-icons-name"></i>
                </label><br />
                <input type="text" work="work" id="work" autoComplete="off"
                  placeholder="Enter Your Profession"
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
              <div className="form-group">
                <label htmlFor="cpasswod">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label><br />
                <input type="passwod" name="email" id="cpasswod" autoComplete="off"
                  placeholder="Confirm Your Password"
                />
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit"
                  value="register" />

              </div>
            </form>
          </div>
            
          </div>
          
          
        </div>
      </section>
    </>
  )
}

export default Signup