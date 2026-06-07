import React from "react";
import "../styles/home.css"
import man from "../assets/images/man.png"
import woman from "../assets/images/woman.png"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

const Newsletter = () => {
  return (
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

        {/* RIGHT IMAGE */}
      <div className="newsletter-image right-image">
        <img
          src={woman}
          alt="Fashion"
        />
      </div>
      </div>
    </section>
  );
};

export default Newsletter;