import React from "react";
import "../styles/home.css"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function Contact() {
  return (
    <div className="contact-page">
<div className="contact-banner">

  <NavLink className="navbar-brand fw-bold fs-3" to="/">
          <img
                src={FASCO}
                alt="FASCO"
                className="logo"
              />
        </NavLink>

        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us.</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">

          <div className="col-md-6">
            <div className="contact-info">
              <h3>Get In Touch</h3>

              <p>
                <strong>Address:</strong><br />
                Lagos, Nigeria
              </p>

              <p>
                <strong>Email:</strong><br />
                junaidoluwadamilare47@gmail.com
              </p>

              <p>
                <strong>Phone:</strong><br />
                +234 913 684 404             
                 </p>

              <p>
                <strong>Working Hours:</strong><br />
                Monday - Friday, 9AM - 5PM
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-form">
              <h3>Send a Message</h3>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;