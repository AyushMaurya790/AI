import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cntc.css';

const Cntc = () => {
  const [formData, setFormData] = useState({
    firstName: 'Saamvi',
    surname: 'Patel',
    profession: 'Retail Sales Associate',
    city: 'New Delhi',
    country: 'India',
    pinCode: '110034',
    phone: '+91 22 1234 5677',
    email: 'saamvipatel@samplain'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate('/next-step'); // Adjust the route as needed
  };

  return (
    <div className="cntc-container">
      <div className="main-content">
        <h1>What's the best way for employers to contact you?</h1>
        <p className="suggestion">We suggest including an email and phone number.</p>
        <p className="required-note">* Indicates a required field</p>

        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Profession</label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>

          <div className="location-fields">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group required">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="save-continue-btn">
              Save & Continue
            </button>
          </div>
        </form>
      </div>

      <div className="sidebar">
        <div className="results-card">
          <h2>Our CV builder delivers results *</h2>
          <div className="statistic">
            <strong>42% Higher response rate from recruiters</strong>
          </div>
          <p className="disclaimer">
            The results are based on a study with over 1000 participants, among whom 287 used CV tools provided on our family sites.
          </p>
        </div>

        <div className="change-template">
          <button className="change-template-btn">
            Change template
          </button>
        </div>

        <div className="footer-links">
          <a href="#">Terms And Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Contact Us</a>
          <p className="copyright">© 2025 White Limited, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Cntc;