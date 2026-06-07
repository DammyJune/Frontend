import React from "react";
import "../styles/home.css"
import FASCO from "../assets/images/FASCO.png"
import { NavLink } from "react-router";

function Footer() {
    return (
        <footer className="footer">

            <hr className="footer-line"/>

            <div className="footer-top">
                        <div className="footer-logo">
            <img src={FASCO}></img>
            </div>
            
                      <div className="footer-links">
                      <NavLink to="/SupportCenter">  <li>Support Center</li> </NavLink>
                        <NavLink to="/Invoicing"> <li>Invoicing</li> </NavLink>
                       <NavLink to="/Contact"> <li>Contact</li> </NavLink>
                      <NavLink to="/careers"><li>Careers</li></NavLink>
                       <NavLink to="/blog"> <li>Blog</li> </NavLink>
                       <NavLink to="/faq"> <li>FAQs</li> </NavLink>
                      </div>
                      </div>
            
            <div className="footer-bottom">
                      <p>
                        Copyright © 2022 Xpro . All Rights Reserved.
                      </p>
                      </div>

        </footer>
    );
}

export default Footer;