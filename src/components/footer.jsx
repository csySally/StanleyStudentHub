import React from "react";
import "../styles/footer.css";
import Facebook from "../assets/icons/Facebook.png";
import Instagram from "../assets/icons/Instagram.png";
import YouTube from "../assets/icons/YouTube.png";
import Linkedin from "../assets/icons/Linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-about">
        <h4>About Stanley College</h4>
        <p>
          Multi-award winning Stanley College is a privacy owned and operated
          Institute of Higher Learning and Registered Training Provider.
        </p>
        <p>
          At Stanley College, we strive to create a secure and inclusive space
          for the LGBTQIA+ communities.
        </p>
      </div>
      <div className="footer-useful-links">
        <h4>Useful Links</h4>
        <ul className="footer-useful-links-list">
          <li>
            <a href="/">About Stanley College</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Agent Portal</a>
          </li>
          <li>
            <a href="/">Domestic Student Portal</a>
          </li>
        </ul>
      </div>
      <div className="footer-stay-connected">
        <h4>Stay Connected</h4>
        <p>Follow us on social media to stay updated.</p>
        <div>
          <a href="/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="/">
            <img src={Instagram} alt="Instagram" />
          </a>

          <a href="/">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="/">
            <img src={YouTube} alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
