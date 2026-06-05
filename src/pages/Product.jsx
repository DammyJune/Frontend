import { useState } from "react";
import "../styles/home.css"
import MiniCart from '../pages/MiniCart.jsx'
import {
  FaStar,
  FaRegStar,
  FaEye,
  FaBalanceScale,
  FaQuestionCircle,
  FaShareAlt,
  FaTruck,
  FaShieldAlt,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
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
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import carousel1 from "../assets/images/carousel1.png"
import carousel2 from "../assets/images/carousel2.png"
import carousel3 from "../assets/images/carousel3.png"
import holmes from "../assets/images/holmes.png"
import { NavLink } from "react-router";
import thumbnail1 from "../assets/images/thumbnail1.png"
import thumbnail2 from "../assets/images/thumbnail2.png"
import thumbnail3 from "../assets/images/thumbnail3.png"
import thumbnail4 from "../assets/images/thumbnail4.png"
import thumbnail5 from "../assets/images/thumbnail5.png"
import thumbnail6 from "../assets/images/thumbnail6.png"
import thumbnail7 from "../assets/images/thumbnail7.png"
import Cards from "../assets/images/Cards.png"
import FASCO from "../assets/images/FASCO.png"
import man from "../assets/images/man.png"
import woman from "../assets/images/woman.png"



const images = [
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
];

function ProductDetails() {
     const [showCart, setShowCart] = useState(false);
  const product = {
  name: "Denim Jacket",
  price: 39,
  image: thumbnail1,
};
const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const colors = [
    {
      name: "Blue",
      code: "#8eb7d6",
    },
    {
      name: "Black",
      code: "#000",
    },
    {
      name: "Pink",
      code: "#f6d8d8",
    },
  ];
  return (
    <div className="container py-5">
      <div className="row product-wrapper">
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
            </div>

          </div>
        </div>

      </div>

    </nav>




        {/* Left Side */}

        <div className="col-lg-6">
          <div className="gallery-section">

            <div className="thumbnail-column">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`thumb ${
                    selectedImage === img ? "active-thumb" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <div className="main-image">
              <img src={selectedImage} alt="" />
            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="col-lg-6">

          <small className="brand">FASCO</small>

          <h2 className="product-title">
            Denim Jacket
          </h2>

          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <span>(3)</span>
          </div>

          <div className="price-section">
            <span className="new-price">$39.00</span>

            <span className="old-price">
              $59.00
            </span>

            <span className="discount-badge">
              SAVE 33%
            </span>
          </div>

          <p className="viewing">
            <FaEye />
            24 people are viewing this right now
          </p>

          <div className="sale-box">
            <span>Hurry up! Sale ends in:</span>

            <div className="timer">
              <div>00</div>
              <div>05</div>
              <div>59</div>
              <div>47</div>
            </div>
          </div>

          <div className="stock-wrapper">
            <p>Only 9 item(s) left in stock!</p>

            <div className="progress">
              <div
                className="progress-bar bg-danger"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          {/* Sizes */}

          <h6 className="mt-4">
            Size: {selectedSize}
          </h6>

          <div className="size-buttons">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${
                  selectedSize === size
                    ? "active-size"
                    : ""
                }`}
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>
            ))}
          </div>

          {/* Colors */}

          <h6 className="mt-4">
            Color: {selectedColor}
          </h6>

          <div className="color-section">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-circle ${
                  selectedColor === color.name
                    ? "active-color"
                    : ""
                }`}
                style={{
                  backgroundColor:
                    color.code,
                }}
                onClick={() =>
                  setSelectedColor(
                    color.name
                  )
                }
              ></div>
            ))}
          </div>

          {/* Quantity */}

          <div className="quantity-cart">

            <div className="quantity-box">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(
                    quantity - 1
                  )
                }
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(
                    quantity + 1
                  )
                }
              >
                +
              </button>

            </div>

            <button className="cart-btn btn btn-dark"  onClick={() => setShowCart(true)}>
 Add to Cart 
            </button>

          </div>

          {/* Actions */}

          <div className="action-links">

            <span>
              <FaBalanceScale />
              Compare
            </span>

            <span>
              <FaQuestionCircle />
              Ask a Question
            </span>

            <span>
              <FaShareAlt />
              Share
            </span>

          </div>

          <hr />

          <div className="delivery-info">

            <p>
              <FaTruck />
              Estimated Delivery:
              Jul 30 - Aug 03
            </p>

            <p>
              <FaShieldAlt />
              Free Shipping &
              Returns on all
              orders over $75
            </p>

          </div>

          <div className="payment-icons">
            <img
              src={Cards}
              alt=""
            />
          </div>

          <p className="secure-text">
            Guarantee safe &
            secure checkout
          </p>

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

 <section className="container deals-section">

      <div className="row align-items-center">

        <div className="col-md-4">

          <h2 className="css">Deals Of The Month</h2>

          <p className="css">
            Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Scelerisque duis ultrices sollicitudin aliquam sem.<br/> Scelerisque duis ultrices sollicitudin 
          </p>

          <button className="btn btn-dark">
            Buy Now
          </button>

          <p className="text">Hurry, Before It's Too Late!</p>

          <div className="countdown d-flex gap-3 mt-4">

            <div>
              <h4 className="count">02</h4>
              <span>Days</span>
            </div>

            <div>
              <h4 className="count">06</h4>
              <span>Hr</span>
            </div>

            <div>
              <h4 className="count">05</h4>
              <span>Mins</span>
            </div>

            <div>
              <h4 className="count">30</h4>
              <span>Sec</span>
            </div>

          </div>

        </div>

        <div className="col-md-8">

          <div className="row">

            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100" alt="carousel1" className="car1"/>
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100" alt="carousel2" className="car2"/> 
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100" alt="carousel3" className="car3"/>
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>    
        </div>

      </div>

    </section>

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

<MiniCart
  showCart={showCart}
  setShowCart={setShowCart}
  product={product}
/>

    </div>
    
  );
}

export default ProductDetails;