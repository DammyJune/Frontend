import "../styles/home.css"
import { useState } from "react"
import {BiCart} from "react-icons/bi"
import { NavLink } from "react-router";
import {BiUpArrowAlt} from "react-icons/bi"
import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"

function HeroSection() {

    function selectButton(button){
  document.querySelectorAll(".btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

  return (

    <section className="container hero-section">

      <div className="row g-3 align-items-center">

        <div className="col-md-3">
           
          <div className="hero-image left-image"><img
                            src={img1}
                            alt="img1"
                            className="image1"
                          /></div>
        </div>

        <div className="col-md-6">
            

          <div className="center-sale text-center">

            <div className="top-images"><img
                            src={img2}
                            alt="img2"
                            className="image2"
                          /></div>

            <h1 className="fs-2">
              ULTIMATE
            </h1>

            <h1 className="sale-text" >
              SALES
            </h1>

            <p>NEW COLLECTION</p>

            <button className="btn btn-dark px-5">
              <NavLink className="shop-link" to="/Shop"> SHOP NOW </NavLink>
            </button>

            <div className="bottom-images">
               <img
                            src={img3}
                            alt="img3"
                            className="image3"
                          />
            </div>

          </div>

        </div>

        <div className="col-md-3">
          <div className="hero-image right-image">
             <img
                            src={img4}
                            alt="img4"
                            className="image4"
                          />
          </div>
<div className="controls">
        <button className="cart-btn" 
         onclick="selectButton(this)">
            <BiCart/>
            </button>
            <button className="arrow-btn"
            onclick="selectButton(this)">
            <BiUpArrowAlt/>
            </button>
            </div>
        </div>
</div>


    </section>

  )
}

export default HeroSection