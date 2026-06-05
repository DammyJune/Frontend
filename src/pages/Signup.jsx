import React from "react";
import "../styles/home.css"
import model from "../assets/images/model.png"
import FASCO from "../assets/images/FASCO.png"
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router";

function SignUp() {
  return (
    <div className="signup-page">
      <div className="container-fluid">
        <div className="row min-vh-100">

          {/* Left Side Image */}
          <div className="col-lg-6 d-none d-lg-flex image-section">
            <img
              src={model}
              alt="Fashion Model"
              className="model-image"
            />
          </div>

          {/* Right Side Form */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="signup-form-container">

              <NavLink to="/">
                          <div className="logo-space">
                            <img src={FASCO}></img>
                          </div>
                          </NavLink>
                          
              <h3 className="mb-4">Create Account</h3>

              <div className="social-buttons">
                <button className="btn btn-outline-secondary social-btn">
                  <FcGoogle size={22} />
                  <span>Sign up with Google</span>
                </button>

                <button className="btn btn-outline-secondary social-btn">
                  <MdEmail size={22} />
                  <span>Sign up with Email</span>
                </button>
              </div>

              <div className="divider">
                <span>OR</span>
              </div>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      className="form-control custom-input"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="password"
                      className="form-control custom-input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="password"
                      className="form-control custom-input"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>

                <button className="btn create-btn w-100">
                  Create Account
                </button>

                <p className="login-text">
                  Already have an account? <a href="/signin">Login</a>
                </p>
              </form>

              <p className="terms">
                FASCO Terms & Conditions
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;