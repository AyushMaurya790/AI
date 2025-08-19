import React from "react";
import { useNavigate } from "react-router-dom";
import "./Finalize.css";

const Finalize = () => {
  const navigate = useNavigate();

  return (
    <div className="step-wrapper">
      <div className="progress-bar">
        <div className="step active">Template</div>
        <div className="step active">Details</div>
        <div className="step active">Experience</div>
        <div className="step active">Education</div>
        <div className="step active">Finalize</div>
      </div>

      <div className="step-content">
        <h2>Finalize Your Resume</h2>
        <p>Review your details before exporting your resume.</p>

        <div className="resume-preview-box">
          <p>[Here you can show final resume preview 📝]</p>
        </div>

        <div className="final-buttons">
          <button className="back-btn" onClick={() => navigate("/resume-education")}>
            ← Back
          </button>
          <button className="next-btn">Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default Finalize;
