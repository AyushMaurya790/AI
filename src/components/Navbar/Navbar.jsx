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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

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
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

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
          <Link to="/templates" className={isActiveLink("/templates")}>
            Templates
          </Link>
          <Link to="/builder" className={isActiveLink("/builder")}>
            Resume Builder
          </Link>
          <Link to="/cover-letter" className={isActiveLink("/cover-letter")}>
            Cover Letter
          </Link>
          <Link to="/career-advice" className={isActiveLink("/career-advice")}>
            Career Advice
          </Link>
          {currentUser ? (
            <>
              <Link to="/dashboard" className={isActiveLink("/dashboard")}>
                My Documents
              </Link>
              <Link to="/builder" className="nav-link btn-primary">
                Create Resume
              </Link>
              <button
                className="nav-link logout-btn"
                onClick={handleLogout}
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className={isActiveLink("/signup")}>
                Sign In
              </Link>
          
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;