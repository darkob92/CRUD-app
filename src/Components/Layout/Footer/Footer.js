import React from 'react';
import './footer.css';

const Footer = () => {
  return(
    <div className="footer-container">
      <div className="socials-container">
        <span className="icon"><i className="fab fa-facebook-f"></i></span>
        <span className="icon"><i className="fab fa-instagram"></i></span>
        <span className="icon"><i className="fab fa-twitter"></i></span>
      </div>
      <div className="newsletter-container">
        <h4>Subscribe to our newsletter</h4>
        <div className="inputs-container">
          <input className="newsletter-text" type="text" />
          <input className="submit-button" type="submit" />
        </div>
      </div>
    </div>
  );
}

export default Footer;