import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-white py-4">
      <div className="container">

        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          <img
                src={FASCO}
                alt="FASCO"
                className="logo"
              />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">

          <ul className="navbar-nav mx-auto gap-4 me-3">

            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <NavLink to="/deals" className="nav-link" href="#">Deals</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/newarrivals">New Arrivals</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/packages">Packages</NavLink>
            </li>

            <li className="nav-item">
 <NavLink className="nav-link" to="/signin">Sign In</NavLink>
            </li>

          </ul>
 <NavLink to="/signup">
          <button className="btn btn-dark px-4">
           Sign Up
          </button>
          </NavLink>

        </div>

      </div>
    </nav>
  )
}

export default Navbar