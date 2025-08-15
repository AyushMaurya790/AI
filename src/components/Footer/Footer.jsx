import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Resume Builder</h3>
            <ul className="footer-links">
              <li><Link to="/templates" className="footer-link">Free Templates</Link></li>
              <li><Link to="/resume-check" className="footer-link">Resume Check</Link></li>
              <li><Link to="/career-advice" className="footer-link">Career Advice</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Tools</h3>
            <ul className="footer-links">
              <li><Link to="/resume-builder" className="footer-link">Resume Builder</Link></li>
              <li><Link to="/cover-letter" className="footer-link">Cover Letter Builder</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Zety</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <ul className="footer-links">
              <li><Link to="/linkedin" className="footer-link">LinkedIn</Link></li>
              <li><Link to="/twitter" className="footer-link">Twitter</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/zety" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/zetyofficial" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/zetyofficial/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            This site uses cookies to ensure you get the best experience.{' '}
            <Link to="/cookies" className="footer-link">Learn more</Link>
          </p>
          <p>&copy; 2025 Zety. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;