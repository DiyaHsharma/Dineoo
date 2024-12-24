import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.footerlogo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            impedit excepturi, omnis a nulla quas itaque maiores dignissimos
            illum ex. Velit consequuntur aspernatur, labore consectetur beatae
            quaerat quia recusandae reprehenderit.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Delivery</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-287-548-7348</li>
            <li>contact@dineo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Dineo.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
