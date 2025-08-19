import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperienceLevel.css';

const ExperienceLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  const levels = [
    {
      id: 'entry',
      title: 'Entry-Level',
      description: 'I have limited work experience (0-2 years)',
      icon: '👶'
    },
    {
      id: 'mid',
      title: 'Mid-Level',
      description: 'I have some work experience (2-5 years)',
      icon: '💼'
    },
    {
      id: 'senior',
      title: 'Senior-Level',
      description: 'I have extensive work experience (5+ years)',
      icon: '👔'
    },
    {
      id: 'executive',
      title: 'Executive',
      description: 'I have leadership/management experience',
      icon: '👑'
    }
  ];

  const handleContinue = () => {
    if (selectedLevel) {
      navigate('/create-resume/choose-template');
    }
  };

  return (
    <div className="experience-level-page">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: '25%' }}></div>
      </div>
      
      <div className="content-container">
        <h1>What's your experience level?</h1>
        <p className="subtitle">Choose the option that best describes you</p>
        
        <div className="level-cards">
          {levels.map((level) => (
            <div 
              key={level.id}
              className={`level-card ${selectedLevel === level.id ? 'selected' : ''}`}
              onClick={() => setSelectedLevel(level.id)}
            >
              <div className="level-icon">{level.icon}</div>
              <h3>{level.title}</h3>
              <p>{level.description}</p>
            </div>
          ))}
        </div>
        
        <div className="action-buttons">
          <button className="back-button">Back</button>
          <button 
            className={`continue-button ${!selectedLevel ? 'disabled' : ''}`}
            disabled={!selectedLevel}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLevel;