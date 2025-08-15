import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BuilderPage.css';

const BuilderPage = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [resumeData, setResumeData] = useState({
    contact: {
      name: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const tabs = [
    { id: 'contact', label: 'Contact' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];

  const handleInputChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="builder-page">
      <div className="builder-header">
        <h1>Resume Builder</h1>
        <div className="builder-actions">
          <button className="btn btn-secondary">Save Draft</button>
          <button className="btn btn-primary">Download PDF</button>
        </div>
      </div>

      <div className="builder-container">
        <div className="builder-sidebar">
          <div className="builder-steps">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`step ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="template-selector">
            <h3>Template</h3>
            <select>
              <option>Modern</option>
              <option>Classic</option>
              <option>Creative</option>
            </select>
          </div>
          <div className="ai-assistant">
            <h3>AI Assistant</h3>
            <button className="btn btn-outline">Improve with AI</button>
          </div>
        </div>

        <div className="builder-content">
          {activeTab === 'contact' && (
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={resumeData.contact.name}
                    onChange={(e) => handleInputChange('contact', 'name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={resumeData.contact.email}
                    onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    value={resumeData.contact.phone}
                    onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={resumeData.contact.location}
                    onChange={(e) => handleInputChange('contact', 'location', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>LinkedIn</label>
                  <input
                    type="url"
                    value={resumeData.contact.linkedin}
                    onChange={(e) => handleInputChange('contact', 'linkedin', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Portfolio</label>
                  <input
                    type="url"
                    value={resumeData.contact.portfolio}
                    onChange={(e) => handleInputChange('contact', 'portfolio', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Other form sections would go here */}
        </div>

        <div className="builder-preview">
          <div className="preview-container">
            <h3>Live Preview</h3>
            <div className="resume-preview">
              <div className="resume-header">
                <h2>{resumeData.contact.name || 'Your Name'}</h2>
                <p>{resumeData.contact.email || 'your.email@example.com'}</p>
                <div className="contact-info">
                  {resumeData.contact.phone && <span>{resumeData.contact.phone}</span>}
                  {resumeData.contact.location && <span>{resumeData.contact.location}</span>}
                  {resumeData.contact.linkedin && <span>{resumeData.contact.linkedin}</span>}
                </div>
              </div>
              <div className="resume-body">
                {/* Resume content would be rendered here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;