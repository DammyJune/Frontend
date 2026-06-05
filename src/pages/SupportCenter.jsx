import React from "react";
import "../styles/home.css"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";


function SupportCenter() {
  return (
    <div className="support-page">
      <div className="support-header text-center">

<NavLink className="navbar-brand fw-bold fs-3" to="/">
          <img
                src={FASCO}
                alt="FASCO"
                className="logo"
              />
        </NavLink>


        <h1>Support Center</h1>
        <p>How can we help you today?</p>

        <div className="search-box">
          <input
            type="text"
            className="form-control"
            placeholder="Search for help..."
          />
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="support-card">
              <h4>📦 Orders</h4>
              <p>
                Track orders, delivery information, and order history.
              </p>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="support-card">
              <h4>💳 Payments</h4>
              <p>
                Payment methods, billing questions, and refunds.
              </p>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="support-card">
              <h4>🔄 Returns</h4>
              <p>
                Learn about returns, exchanges, and return policies.
              </p>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="support-card">
              <h4>🚚 Shipping</h4>
              <p>
                Shipping options, delivery times, and tracking.
              </p>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="support-card">
              <h4>👤 Account</h4>
              <p>
                Manage account settings, passwords, and profile details.
              </p>
              <button className="btn btn-dark">Learn More</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="support-card">
              <h4>📞 Contact Us</h4>
              <p>
                Reach out to our support team for additional assistance.
              </p>
              <button className="btn btn-dark">Contact</button>
            </div>
          </div>
        </div>

        <div className="contact-support text-center mt-5">
          <h3>Still Need Help?</h3>
          <p>Our support team is available 24/7.</p>
          <button className="btn btn-primary">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default SupportCenter;