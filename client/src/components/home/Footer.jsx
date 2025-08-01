import React from "react";
import "../../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // Optional placeholder icon

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-instagram">
        <i className="instagram-icon"><FaInstagram/></i>
        <p>@USERNAME</p>
      </div>

      <div className="footer-gallery">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="footer-photo">Photo {i + 1}</div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-copy">© 2025 by Crissy</p>

        <div className="footer-icons">
          <FaFacebookF />
          <RxCross2 />
          <FaInstagram />
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
