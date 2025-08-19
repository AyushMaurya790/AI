import React from 'react';
import './BoldProfile.css';

const BoldProfile = () => {
  return (
    <div className="bold-profile-editor">
      <div className="welcome-section">
        <h1>Welcome to your Bold Profile Editor, <span className="user-name">Ayush</span></h1>
        <p className="welcome-text">
          We're just getting started. Fill out the sections below so your published <strong>Bold.pro</strong> profile can really stand out!
        </p>
      </div>

      <div className="profile-container">
        <div className="left-sidebar">
          <div className="sidebar-section">
            <h3>MY PROFILE</h3>
            <div className="profile-strength">
              <span>Profile Strength</span>
              <div className="strength-indicator fantastic">Fantastic</div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Core</h3>
            <div className="completion-indicator">
              <span>5/6</span>
            </div>
            <ul className="section-list">
              <li>Contact Info</li>
              <li>Summary</li>
              <li>Education</li>
              <li>Work History</li>
              <li>Skills</li>
            </ul>
          </div>
        </div>

        <div className="main-content">
          <div className="profile-header">
            <h2 className="profile-name">AYUSH MAURYA</h2>
            <button className="contact-button">CONTACT ME</button>
          </div>

          <div className="design-section">
            <h3>DESIGN</h3>
            <div className="design-option">
              Professional - Light Mode
            </div>
          </div>

          <div className="background-section">
            <h3>BACKGROUND PHOTO</h3>
            <div className="photo-preview">
              Preview
            </div>
            <button className="publish-button">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoldProfile;