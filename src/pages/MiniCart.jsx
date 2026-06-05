import { useState } from "react";
import "../styles/home.css"
import thumbnail2 from "../assets/images/thumbnail2.png"



function MiniCart({ showCart, setShowCart, product }) {
  if (!showCart) return null;

  return (
    <>
     
    {showCart && (
  <>
    <div
      className="cart-overlay"
      onClick={() => setShowCart(false)}
    ></div>

    <div className="mini-cart">
      <button
        className="close-btn"
        onClick={() => setShowCart(false)}
      >
        ×
      </button>

      <h3>Shopping Cart</h3>

      <p className="shipping-text">
          Buy <strong>$122.35</strong> More And Get
          <strong> Free Shipping</strong>
        </p>
        <div className="cart-item">
          <img src={thumbnail2} alt={product.name} />

          <div className="cart-info">
            <h5>Denim Jacket</h5>

            <p>Color: Red</p>

            <h6>$14.80</h6>

            <div className="quantity-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="gift-wrap">
          <input type="checkbox" />
          <span>
            For $10.00 Please Wrap The Product
          </span>
        </div>

        <div className="subtotal">
          <h5>Subtotal</h5>
          <h5>$100.00</h5>
        </div>

        <button className="checkout-btn btn btn-dark">
             Checkout
        </button>

        <div className="view-cart-btn">
          View Cart
        </div>
        </div>

  </>
)}

    </>

  );
}

export default MiniCart;