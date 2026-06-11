import React from "react";
import "../styles/home.css"
import rectangle from "../assets/images/rectangle.png"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function ConfirmationWindow() {
  return (
    <div className="confirm-page container-fluid">
      <div className="row confirn-container">

        {/*Left Image*/}

        <div className="col-lg-6 image-section">
          <img src={rectangle} alt="Fashion" className="fashion-img"/>
        </div>

        {/*Right Form*/}

        <div className="col-lg-6 form-section">
          <div className="form-content">
            <NavLink> <img src={FASCO} className="logo"/> </NavLink>

            <h3 className="title">Enter The Confirmation Code</h3>
            <input type="text" placeholder="Confirmation Code" className="form-control code-input"/>

            <button className="btn recover-btn btn btn-dark">Recover Account</button>

            <p className="resend-text">Didn't receive Confirmation Code?

            <span className="resend-link">Resend Now</span>
            </p>

            <div className="terms">
              FASCO terms and conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationWindow;