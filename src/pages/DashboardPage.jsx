import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './DashboardPage.css';

const DashboardPage = () => {
  const { currentUser } = useAuth();

  const resumes = [
    { id: 1, title: 'Software Engineer Resume', lastEdited: '2023-11-15', progress: 85 },
    { id: 2, title: 'Marketing Manager Resume', lastEdited: '2023-11-10', progress: 60 },
    { id: 3, title: 'Product Designer Resume', lastEdited: '2023-11-05', progress: 45 }
  ];

  const activities = [
    { action: 'Edited Software Engineer Resume', time: '2 hours ago' },
    { action: 'Downloaded Marketing Resume', time: '1 day ago' },
    { action: 'Started Product Designer Resume', time: '3 days ago' }
  ];

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Welcome, {currentUser?.fullName || 'User'}!</h1>
        <Link to="/builder" className="btn btn-primary">+ Create New Resume</Link>
      </header>

      <section className="resume-stats">
        <div className="stat-card">
          <div className="stat-value">{resumes.length}</div>
          <div className="stat-label">Resumes</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {Math.round(resumes.reduce((sum, r) => sum + r.progress, 0) / resumes.length)}%
          </div>
          <div className="stat-label">Avg. Completion</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Downloads</div>
        </div>
      </section>

      <section className="resumes-section">
        <h2>My Resumes</h2>
        <div className="resumes-grid">
          {resumes.map(resume => (
            <div key={resume.id} className="resume-card">
              <div className="resume-preview"></div>
              <div className="resume-info">
                <h3>{resume.title}</h3>
                <div className="resume-meta">
                  <span>Last edited: {resume.lastEdited}</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${resume.progress}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="resume-actions">
                <Link to={`/builder/${resume.id}`} className="btn btn-secondary">Edit</Link>
                <button className="btn btn-outline">Download</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="activity-section">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {activities.map((act, idx) => (
            <div key={idx} className="activity-item">
              <div className="activity-icon"></div>
              <div className="activity-details">
                <span className="activity-action">{act.action}</span>
                <span className="activity-time">{act.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
