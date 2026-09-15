import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo-section">
          <div className="logo-box">DS</div>

          <div className="logo-text">
            <span className="dev-text">Dev</span>
            <span className="stack-text">Stack</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link active">
            Home
          </a>

          <a href="#" className="nav-link">
            Technologies
          </a>

          <a href="#" className="nav-link">
            Projects
          </a>

          <a href="#" className="nav-link">
            About
          </a>

          <a href="#" className="nav-link">
            Contact
          </a>
        </div>

    
        <div className="auth-section">
          <a href="#" className="sign-in">
            Sign In
          </a>

          <button className="sign-up">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;