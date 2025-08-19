import React from "react";
import { useNavigate } from "react-router-dom";
import "./Education.css";

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="step-wrapper">
      <div className="progress-bar">
        <div className="step active">Template</div>
        <div className="step active">Details</div>
        <div className="step active">Experience</div>
        <div className="step active">Education</div>
        <div className="step">Finalize</div>
      </div>

      <div className="step-content">
        <h2>Education</h2>
        <form className="resume-form">
          <div className="form-group">
            <label>School/University</label>
            <input type="text" placeholder="Harvard University" />
          </div>
          <div className="form-group">
            <label>Degree</label>
            <input type="text" placeholder="B.Sc. Computer Science" />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input type="text" placeholder="2015 - 2019" />
          </div>
          <button
            type="button"
            className="next-btn"
            onClick={() => navigate("/resume-finalize")}
          >
            Next →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Education;
