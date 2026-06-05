import { useState } from "react";
import "../styles/home.css"
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import FASCO from "../assets/images/FASCO.png"
import Jacket from "../assets/images/Jacket.png"
import { NavLink } from "react-router";
import man from "../assets/images/man.png"
import woman from "../assets/images/woman.png"


function Cart() {
  const [quantity, setQuantity] = useState(1);

  const price = 14.9;
  const subtotal = (price * quantity).toFixed(2);

  return (
    <div className="container py-5">
    <nav className="navbar navbar-expand-lg bg-white py-4 border-bottom">

      <div className="container">

        {/* Logo */}
       <NavLink to="/">
            <div className="logo-space">
              <img src={FASCO}></img>
            </div>
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
          {/* Center Menu */}
          <ul className="navbar-nav mx-auto gap-4">

            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
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

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Contact
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </li>

          </ul>

          {/* Icons */}
          <div className="nav-icons search-icons">

            <FiSearch size={18} />

            <FiUser size={18}/>

            <FiHeart size={18}/>

            <div className="cart-icon">
              <FiShoppingBag size={20}/>
               <span className="position-absolute top-40 start-110 translate-middle badge rounded-pill bg-danger">
                  1
                </span>
            </div>

          </div>
        </div>

      </div>

    </nav>

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="cart-title">Shopping Cart</h1>
        <p className="text-muted">Home -- Your Shopping Cart</p>
      </div>

      {/* Table Header */}
      <div className="row fw-bold border-bottom pb-3">
        <div className="col-md-4">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-3">Quantity</div>
        <div className="col-md-3 text-end">Total</div>
      </div>

      {/* Product Row */}
      <div className="row align-items-center py-4 border-bottom">

        <div className="col-md-4 d-flex gap-3">
          <img
            src={Jacket}
            alt=""
            className="cart-img"
          />

          <div>
            <h5>Mini Dress With Ruffled Straps</h5>
            <p className="text-muted mb-1">Color : Red</p>

            <button className="btn btn-link text-danger p-0">
              Remove
            </button>
          </div>
        </div>

        <div className="col-md-2">
          ${price}
        </div>

        <div className="col-md-3">
          <div className="qty-box">

            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button>

          </div>
        </div>

        <div className="col-md-3 text-end fw-bold">
          ${subtotal}
        </div>

      </div>

      {/* Gift Wrap */}
      <div className="row justify-content-end mt-4">

        <div className="col-md-5">

          <div className="gift-box">
            <input
              type="checkbox"
              className="form-check-input me-2"
            />

            <span>
              For $10.00 Please Wrap The Product
            </span>
          </div>

          <hr />

          <div className="d-flex justify-content-between mb-4">
            <h5>Subtotal</h5>
            <h5>$100.00</h5>
          </div>

          <button className="btn checkout-btn w-100 btn btn-dark">
            Checkout
          </button>

          <div className="text-center mt-3">
            <a href="#">View Cart</a>
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
  );
}

export default Cart;