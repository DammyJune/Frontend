import holmes from "../assets/images/holmes.png"
import "../styles/home.css"
 import React from "react";

function FeatureProduct() {

  return (

    <section className="container feature-product">

      <div className="text-center mb-5">

        <button className="btn btn-dark px-5 mb-3">
          View More
        </button>

      </div>
      

    <section className="feature-product">
      {/* LEFT SIDE IMAGE */}
      <div className="feature-image">
        <img
          src={holmes}
          alt="Peaky Blinders Fashion"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="feature-content">
        <p className="collection">Women Collection</p>

        <h1>Peaky Blinders</h1>

        <h5 className="describe">DESCRIPTION</h5>

        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
          Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>

        <div className="size-section">
          <span>Size:</span>
          <button>M</button>
        </div>

        <h2>$100.00</h2>

        <button className="buy-btn">Buy Now</button>
      </div>
    </section>
    </section>
  );
};

export default FeatureProduct;