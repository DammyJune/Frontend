import React from "react";
import "../styles/home.css"
import rectangle from "../assets/images/rectangle.png"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function ConfirmationWindow() {
  return (
    <div className="container-fluid confirmation-page">
      <div className="row min-vh-100">

        {/* Left Image */}
        <NavLink to="/">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src={rectangle}
            alt="Fashion"
            className="confirmation-image"
          />
        </div>
        </NavLink>

        {/* Right Side */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="confirmation-form">

            {/* Logo */}
            <img
              src={FASCO}
              alt="Fasco Logo"
              className="logo"
            />

            <h2 className="confirmation-title">
              Enter The Confirmation Code
            </h2>

            <form>
              <input
                type="text"
                placeholder="Confirmation Code"
                className="form-control confirmation-input"
              />

              <button
                type="submit"
                className="btn btn-dark w-100 recover-btn"
              >
                Recover Account
              </button>
            </form>

            <p className="resend-text">
              Didn't receive Confirmation Code?
              <a href="#"> Resend Now</a>
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

export default ConfirmationWindow;