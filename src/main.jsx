import React from 'react'
import ReactDOM from "react-dom/client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route} from "react-router";
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Brands from './components/Brands.jsx'
import DealsSection from './components/DealsSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import NewArrivals from './components/NewArrivals.jsx'
import Services from './components/Services.jsx'
import Instagram from './components/Instagram.jsx'
import FeatureProduct from './components/FeatureProduct.jsx'
import Newsletter from './components/Newsletter.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import ConfirmationWindow from './pages/ConfirmationWindow.jsx'
import NewPassword from './pages/NewPassword.jsx'
import Shop from './pages/Shop.jsx'
import SupportCenter from './pages/SupportCenter.jsx'
import Invoicing from './pages/Invoicing.jsx'
import Contact from './pages/Contact.jsx'
import Signup from './pages/Signup.jsx'
import Deals from './pages/Deals.jsx'
import Packages from './pages/Packages.jsx'
import Checkout from './pages/Checkout.jsx'
import MiniCart from './pages/MiniCart.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Careers from './pages/Careers.jsx'
import Thumbnail from './pages/Thumbnail.jsx'
import Thankyou from './pages/Thankyou.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/brands" element={<Brands/>} />
      <Route path="/dealssection" element={<DealsSection/>} />
      <Route path="/herosection" element={<HeroSection/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/newarrivals" element={<NewArrivals/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/instagram" element={<Instagram/>} />
      <Route path="/featureproduct" element={<FeatureProduct/>} />
      <Route path="/Newsletter" element={<Newsletter/>} />
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/ForgetPassword" element={<ForgetPassword/>}/>
      <Route path="/ConfirmationWindow" element={<ConfirmationWindow/>}/>
      <Route path="/NewPassword" element={<NewPassword/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/SupportCenter" element={<SupportCenter/>}/>
      <Route path="/Invoicing" element={<Invoicing/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/deals" element={<Deals/>}/>
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/minicart" element={<MiniCart/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/thumbnail" element={<Thumbnail/>}/>
      <Route path="/thankyou" element={<Thankyou/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
