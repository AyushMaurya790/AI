import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  const resumes = [
    { id: 1, title: 'Software Engineer Resume', lastEdited: '2023-11-15', progress: 85 },
    { id: 2, title: 'Marketing Manager Resume', lastEdited: '2023-11-10', progress: 60 },
    { id: 3, title: 'Product Designer Resume', lastEdited: '2023-11-05', progress: 45 }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <Link to="/builder" className="btn btn-primary">+ New Resume</Link>
      </div>

      <div className="resume-stats">
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Resumes</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">85%</div>
          <div className="stat-label">Avg. Completion</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">12</div>
          <div className="stat-label">Downloads</div>
        </div>
      </div>

      <div className="section">
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
      </div>

      <div className="section">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {[
            { action: 'Edited Software Engineer Resume', time: '2 hours ago' },
            { action: 'Downloaded Marketing Resume', time: '1 day ago' },
            { action: 'Started Product Designer Resume', time: '3 days ago' }
          ].map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon"></div>
              <div>
                <div className="activity-action">{activity.action}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;