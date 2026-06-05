import React from "react";
import "../styles/home.css"
import rectangle from "../assets/images/rectangle.png"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function ForgetPassword() {
  return (
    <div className="container-fluid forget-page">
      <div className="row min-vh-100">

        {/* Left Image */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src={rectangle}
            alt="Fashion"
            className="forget-image"
          />
        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="forget-form">

            {/* Logo */}
            <NavLink to="/">
            <img
              src={FASCO}
              alt="Fasco Logo"
              className="logo"
            />
            </NavLink>

            <h2 className="forget-title">
              Forget Password
            </h2>

            <form>

              <div className="row">

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control mb-4"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control mb-4"
                  />
                </div>

              </div>

              <div className="row">

                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control mb-4"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-control mb-4"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="btn btn-dark w-100 send-btn"
              >
              <NavLink className="confirm" to="/ConfirmationWindow"> Send Confirmation Code </NavLink>
              </button>

            </form>

            <p className="login-text">
              Already have an account?
              <NavLink to="/signin"> Login</NavLink>
            </p>

            <p className="terms">
              FASCO Terms & Conditions
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ForgetPassword;