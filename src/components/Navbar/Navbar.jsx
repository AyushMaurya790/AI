import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate("/login"); // logout ke baad login page
    setIsMenuOpen(false);
  };

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="logo">Reme-Ai<span className="logo-dot">.</span></span>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} role="navigation">
          <Link to="/templates" className={isActiveLink("/templates")}>Templates</Link>
          <Link to="/builder" className={isActiveLink("/builder")}>Resume Builder</Link>
          <Link to="/cover-letter" className={isActiveLink("/cover-letter")}>Cover Letter</Link>
          <Link to="/career-advice" className={isActiveLink("/career-advice")}>Career Advice</Link>

          {currentUser ? (
            <>
              {/* Show user name */}
              <span className="user-name">Hello, {currentUser.fullName}</span>

              <Link to="/dashboard" className={isActiveLink("/dashboard")}>Dashboard </Link>
              <Link to="/builder" className="nav-link btn-primary">Create Resume</Link>

              <button className="nav-link logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/signup" className={isActiveLink("/signup")}>Sign Up</Link>
              <Link to="/login" className={isActiveLink("/login")}>Login</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
