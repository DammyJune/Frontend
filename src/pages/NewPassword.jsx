import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css"
import rectangle from "../assets/images/rectangle.png"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function NewPassword() {
  return (
    <div className="container-fluid reset-page">
      <div className="row min-vh-100">

        {/* Left Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center left-image">
          <img
            src={rectangle}
            alt="Fashion Model"
            className="img-fluid"
          />
        </div>

        {/* Right Side */}
        <div className="col-md-6 right-section">

          {/* Logo */}
          <NavLink to="/">
          <img
            src={FASCO}
            alt="FASCO Logo"
            className="logo"
          />
          </NavLink>

          {/* Title */}
          <h2 className="form-title">
            Enter Your New Password
          </h2>

          {/* Form */}
          <form>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="New Password"
            />

            <input
              type="password"
              className="form-control custom-input"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="btn submit-btn text-white w-100"
            >
              Submit
            </button>
          </form>

          {/* Footer */}
          <p className="terms">
            FASCO Terms & Conditions
          </p>

        </div>
      </div>
    </div>
  );
}

export default NewPassword;