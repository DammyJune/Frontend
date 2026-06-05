import React from "react";
import {
  Search,
  Person,
  Star,
  Cart3,
} from "react-bootstrap-icons";
import "../styles/home.css"
import FASCO from "../assets/images/FASCO.png"
import checkout from "../assets/images/checkout.png"
import man from "../assets/images/man.png"
import woman from "../assets/images/woman.png"
import { NavLink } from "react-router";

function Checkout() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-2" to="/">
           <img src={FASCO}/>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><NavLink className="dropdown-item" to="/signin">Sign In</NavLink></li>
            <li><NavLink className="dropdown-item" to="/signup">Sign Up</NavLink></li>
            <li><NavLink className="dropdown-item" to="/deals">Deals</NavLink></li>
              <li><NavLink className="dropdown-item" to="/packages">Packages</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-4">
              <Search size={18} />
              <Person size={18} />
              <Star size={18} />

              <div className="position-relative">
                <Cart3 size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Checkout Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          FASCO Demo Checkout
        </h2>

        <div className="row">
          {/* Left Side */}
          <div className="col-lg-7">

            {/* Contact */}
            <div className="border p-4 mb-4">
              <h2>Contact</h2>

              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email Address"
              />
            </div>

            {/* Delivery */}
            <div className="border p-4 mb-4">
              <h2>Delivery</h2>

              <select className="form-select mt-3">
                <option>Country / Region</option>
                <option>Nigeria</option>
                <option>United States</option>
              </select>

              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <input
                className="form-control mt-3"
                placeholder="Address"
              />

              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="City"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Postal Code"
                  />
                </div>
              </div>

              <div className="form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                />

                <label className="form-check-label">
                  Save this information
                </label>
              </div>
            </div>

            {/* Payment */}
            <div className="border p-4">
              <h2>Payment</h2>

              <select className="form-select mt-3">
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>

              <input
                className="form-control mt-3"
                placeholder="Card Number"
              />

              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Expiration Date"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Security Code"
                  />
                </div>
              </div>

              <input
                className="form-control mt-3"
                placeholder="Card Holder Name"
              />

              <button className="btn btn-dark w-100 mt-4">
                Pay Now
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5">
            <div className="border p-4">

              <div className="d-flex align-items-center mb-4">
                <span className="position-absolute top-3 start-10 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
                <img
                  src={checkout}
                  alt=""
                  className="me-3"
                  />
 <div className="flex-grow-1">
                  <h6>Mini Dress With Ruffled Straps</h6>
                  <small>Red</small>
                </div>
                </div>

                <strong>$100.00</strong>
              </div>

              <div className="d-flex mb-4">
                <input
                  className="form-control me-2"
                  placeholder="Discount Code"
                />

                <button className="btn btn-dark">
                  Apply
                </button>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>$100.00</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>$40.00</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>$140.00</span>
              </div>

          </div>
        </div>


        <section className="newsletter">
              {/* LEFT IMAGE */}
              <div className="newsletter-image left-image">
                <img
                  src={man}
                  alt="Fashion"
                />
              </div>
        
              {/* CENTER CONTENT */}
              <div className="newsletter-content">
                <h1>Subscribe To Our Newsletter</h1>
        
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Scelerisque duis ultrices sollicitudin aliquam sem.
                  Scelerisque duis ultrices sollicitudin.
                </p>
        
                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder="michael@gmail.com"
                  />
        
                  <button type="submit">
                    Subscribe Now
                  </button>
                </form>
        
                {/* FOOTER */}
                <div className="footer-section">
                    <hr className="style"></hr>
                    <div className="footer-logo">
        <img src={FASCO}></img>
        </div>
        
                  <ul>
                  <NavLink to="/SupportCenter">  <li>Support Center</li> </NavLink>
                    <NavLink to="/Invoicing"> <li>Invoicing</li> </NavLink>
                   <NavLink to="/Contact"> <li>Contact</li> </NavLink>
                  <NavLink to="/careers"><li>Careers</li></NavLink>
                   <NavLink to="/blog"> <li>Blog</li> </NavLink>
                   <NavLink to="/faq"> <li>FAQs</li> </NavLink>
                  </ul>
        
                  <p className="copyright">
                    Copyright © 2022 Xpro . All Rights Reserved.
                  </p>
                </div>
              </div>
        
              {/* RIGHT IMAGE */}
              <div className="newsletter-image right-image">
                <img
                  src={woman}
                  alt="Fashion"
                />
              </div>
            </section>

      </div>
    </>
  );
}

export default Checkout;