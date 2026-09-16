import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Top Footer */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">

            <div className="footer-logo-section">

              {/* Empty DS image/logo area */}
              <div className="footer-logo">
                DS
              </div>

              <div className="footer-brand-name">
                <span>Dev</span>
                <strong>Stack</strong>
              </div>

            </div>

            <p className="footer-description">
              Curated tools, technologies, and resources for developers building
              <br />
              modern software.
            </p>

            <div className="social-links">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>

          </div>

          {/* Product */}
          <div className="footer-column">
            <h3>PRODUCT</h3>

            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>COMPANY</h3>

            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>LEGAL</h3>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;