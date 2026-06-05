import React, { useState } from "react";
import "../styles/home.css"
import man from "../assets/images/man.png"
import woman from "../assets/images/woman.png"
import { NavLink } from "react-router";
import FASCO from "../assets/images/FASCO.png"
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  BsShieldCheck,
  BsBoxSeam,
  BsHeadset,
  BsStar,
} from "react-icons/bs";
import {
  Search,
  Person,
  Star,
  Cart3,
} from "react-bootstrap-icons";
import holmes from "../assets/images/holmes.png"
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import insta1 from "../assets/images/insta1.png"
import insta2 from "../assets/images/insta2.png"
import insta3 from "../assets/images/insta3.png"
import insta4 from "../assets/images/insta4.png"
import insta5 from "../assets/images/insta5.png"
import insta6 from "../assets/images/insta6.png"
import insta7 from "../assets/images/insta7.png"


const products = [
  {
    id: 1,
    name: "Rounded Red Hat",
    price: 80,
    image: p1,
    colors: ["#f1c40f", "#000"],
  },
  {
    id: 2,
    name: "Linen Blend Shirt",
    price: 77,
    image: p2,
    colors: ["#87CEEB", "#fff"],
  },
  {
    id: 3,
    name: "Long Sleeve Coat",
    price: 106,
    image: p3,
    colors: ["#ddd", "#90EE90"],
  },
  {
    id: 4,
    name: "Boxy Denim Hat",
    price: 39,
    image: p4,
    colors: ["#87CEEB", "#00008B"],
  },
  {
    id: 5,
    name: "Loose Plain Top",
    price: 20,
    image: p5,
    colors: ["#fff", "#90EE90"],
  },
  {
    id: 6,
    name: "Oversized T-shirt",
    price: 110,
    image:p6,
    colors: ["pink", "#ddd"],
  },
  {
    id: 7,
    name: "Printed Sweatshirt",
    price: 18,
    image: p7,
    colors: ["#000", "#8B4513"],
  },
  {
    id: 8,
    name: "Leather Jacket",
    price: 29,
    image: p8,
    colors: ["#90EE90", "#ddd"],
  },
  {
    id: 9,
    name: "Dotted Black Dress",
    price: 20,
    image: p9,
    colors: ["#00008B", "#000", "#ddd"],
  },
];


  const instagramImages = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7
  ];



function Shop() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const colors = [
    "#ff6b6b",
    "#feca57",
    "#48dbfb",
    "#1dd1a1",
    "#5f31bc",
    "#000",
    "#ff9ff3",
    "#54a0ff",
    "#10ac84",
    "#ee5253",
  ];

  return (
    <div className="container-fluid py-5">
      <div className="row">

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
                <NavLink className="nav-link" to="/Shop">
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
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
                <Cart3 size={18} />
              </div>
            </div>
          </div>
        </div>
        </nav>


      {/* Checkout Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">
         Fashion
         <p>Home -- Fashion</p>
        </h2>
        </div>

        {/* Sidebar */}
        <div className="col-lg-3">
          <div className="filter-box">

            <h3>Filters</h3>

            <h6>Size</h6>

            <div className="size-container">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${
                    selectedSize === size ? "active-size" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <h6 className="mt-4">Colors</h6>

            <div className="color-container">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className={`filter-color ${
                    selectedColor === color ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></span>
              ))}
            </div>

            <h6 className="mt-4">Prices</h6>

            <ul className="list-unstyled">
              <li>$0 - $50</li>
              <li>$50 - $100</li>
              <li>$100 - $150</li>
              <li>$150 - $200</li>
              <li>$300 - $400</li>
            </ul>

            <h6 className="mt-4t brand-list">Brands</h6>

            <ul className="list-unstyled">
              <li>Minimog</li>
              <li>Retrolie Brook</li>
              <li>Learts</li>
              <li>Vagabond</li>
              <li>Abby</li>
            </ul>


            <h6 className="mt-4">Collections</h6>

            <ul className="list-unstyled">
              <li>All Products</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Accessories</li>
            </ul>

            <h6 className="mt-4 tag-list">Tags</h6>

            <ul className="list-unstyled">
              <li>Fashion</li>
              <li>Hats</li>
              <li>Sandal</li>
              <li>Belt</li>
              <li>Bags</li>
              <li>Snacker</li>
              <li>Denim</li>
              <li>Minimog</li>
              <li>Vagabond</li>
              <li>Sunglasses</li>
              <li>Beachwear</li>
            </ul>

          </div>
        </div>

        {/* Products */}
        <div className="col-lg-9">
          <div className="row">

            {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="product-card">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <div className="p-2">
                    <h6>{product.name}</h6>

                    <p>${product.price}</p>

                    <div className="d-flex gap-2">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="product-color"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Pagination */}
          <div className="pagination-wrapper">

            <button className="page-btn active-page">
              1
            </button>

            <button className="page-btn">
              2
            </button>

            <button className="page-btn">
              3
            </button>

            <button className="page-btn">
              4
            </button>

            <button className="page-btn">
              5
            </button>

          </div>
        </div>
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

     <section className="services-section container py-5">
          <div className="row text-center gy-4">
    
            {/* Service 1 */}
            <div className="col-md-3 col-6">
              <div className="service-box">
                <BsStar className="service-icon" />
    
                <div>
                  <h5>High Quality</h5>
                  <p>crafted from top materials</p>
                </div>
              </div>
            </div>
    
            {/* Service 2 */}
            <div className="col-md-3 col-6">
              <div className="service-box">
                <BsShieldCheck className="service-icon" />
    
                <div>
                  <h5>Warranty Protection</h5>
                  <p>Over 2 years</p>
                </div>
              </div>
            </div>
    
            {/* Service 3 */}
            <div className="col-md-3 col-6">
              <div className="service-box">
                <BsBoxSeam className="service-icon" />
    
                <div>
                  <h5>Free Shipping</h5>
                  <p>Order over 150 $</p>
                </div>
              </div>
            </div>
    
            {/* Service 4 */}
            <div className="col-md-3 col-6">
              <div className="service-box">
                <BsHeadset className="service-icon" />
    
                <div>
                  <h5>24 / 7 Support</h5>
                  <p>Dedicated support</p>
                </div>
              </div>
            </div>
    
          </div>
        </section>

         <div className="instagram-section">

      {/* Instagram Part */}
      <div className="top-section">
        <h1>Follow Us On Instagram</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
        </p>

        <div className="image-gallery">
          {instagramImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt="fashion" />
            </div>
          ))}

          
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

export default Shop;