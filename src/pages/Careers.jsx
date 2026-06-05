import { useState } from "react";
import "../styles/home.css"
import { NavLink } from "react-router";

function Careers() {
  return (
    <div className="careers-page">

      <section className="career-hero text-center">
        <h1>Join Our Team</h1>
        <p>Help us shape the future of fashion.</p>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-4">Why Work With Us?</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="career-card">
              <h5>Creative Environment</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="career-card">
              <h5>Career Growth</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="career-card">
              <h5>Flexible Culture</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="career-card">
              <h5>Great Benefits</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="mb-4">Open Positions</h2>

        <div className="job-box">
          <h5>Fashion Designer</h5>
          <button className="btn btn-dark">
            Apply Now
          </button>
        </div>

        <div className="job-box">
          <h5>Marketing Specialist</h5>
          <button className="btn btn-dark">
            Apply Now
          </button>
        </div>

        <div className="job-box">
          <h5>Frontend Developer</h5>
          <button className="btn btn-dark">
            Apply Now
          </button>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="mb-4">Apply Today</h2>

        <form className="career-form">
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="form-control mb-3"
          />

          <select className="form-select mb-3">
            <option>Select Position</option>
            <option>Fashion Designer</option>
            <option>Marketing Specialist</option>
            <option>Frontend Developer</option>
          </select>

          <input
            type="file"
            className="form-control mb-3"
          />

          <button
            type="submit"
            className="btn btn-dark"
          >
            Submit Application
          </button>
        </form>
      </section>

    </div>
  );
}

export default Careers;