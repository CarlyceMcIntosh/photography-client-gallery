import React from "react";
import '../../styles/ContactMe.css';

function ContactMe() {
  return (
    <section className="contact-section">
      <div className="contact-box-frame">
        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-subtitle">Can you picture yourself in my photos?</p>
            <h2 className="contact-heading">
              If you see beauty the way I do, <br /> let's work together!
            </h2>
            <p className="contact-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/contact-form" className="contact-button">Contact Me</a>
          </div>

          <div className="contact-image">
            <div className="placeholder-photo-box">Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
