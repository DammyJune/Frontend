import React from "react";
import "../styles/home.css"
import rectangle from "../assets/images/rectangle.png"
import FASCO from "../assets/images/FASCO.png"
import {FcGoogle} from "react-icons/fc"
import {MdEmail} from"react-icons/md"
import { NavLink } from "react-router";

function SignIn() {
  return (
    <div className="container-fluid signin-page">
      <div className="row min-vh-100">

        {/* LEFT IMAGE */}
        <div className="col-md-6 image-section d-flex justify-content-center align-items-center">
          <img
            src={rectangle}
            alt="fashion"
            className="fashion-image"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="signin-box">

            {/* LOGO SPACE */}
            <NavLink to="/">
            <div className="logo-space">
              <img src={FASCO}></img>
            </div>
            </NavLink>

            <h3 className="mb-4">Sign In To FASCO</h3>

            {/* GOOGLE + EMAIL */}
            <div className="d-flex gap-3 mb-4">
              <button className="btn btn-light social-btn">
                <FcGoogle className="icon"/>
                Sign in with Google
              </button>

              <button className="btn btn-light social-btn">
                <MdEmail className="icon"/>
                Sign in with Email
              </button>
            </div>

            <div className="text-center mb-4">
              <span>— OR —</span>
            </div>

            {/* FORM */}
            <form>
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />

              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
              />

              <button className="btn btn-dark w-100 mb-3">
                Sign In
              </button>

              <button className="btn btn-outline-secondary w-100 mb-3">
                Register Now
              </button>

              <div className="text-end">
                <NavLink to="/ForgetPassword">Forgot Password?</NavLink>
              </div>
            </form>

            <p className="terms mt-5">
              FASCO Terms & Conditions
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;