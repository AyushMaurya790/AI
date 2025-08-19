import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Selectresume.css";

const Selectresume = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  // Template data (from ChooseTemplate page)
  const templateData = location.state?.templateData || null;

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleNext = () => {
    if (!selected) {
      alert("⚠️ Please select an option to continue.");
      return;
    }

    if (selected === "upload" && !uploadedFile) {
      alert("⚠️ Please upload your CV to continue.");
      return;
    }

    // ✅ Navigate to Contact Info Page (Cntc.jsx)
    navigate("/create-resume/contact-info", {
      state: {
        selectedOption: selected,
        uploadedFile: uploadedFile,
        templateData: templateData,
      },
    });
  };

  return (
    <div className="select-resume-container">
      <h2 className="title">Are you uploading an existing CV?</h2>
      <p className="subtitle">
        Just review, edit, and update it with new information
      </p>

      <div className="options-wrapper">
        {/* Upload Option */}
        <div
          className={`option-card ${selected === "upload" ? "active" : ""}`}
          onClick={() => handleSelect("upload")}
        >
          <span className="recommended">RECOMMENDED OPTION TO SAVE YOU TIME</span>
          <div className="icon">⬆️</div>
          <h3>Yes, upload from my CV</h3>
          <p>
            We'll give you expert guidance to fill out your info and enhance your CV,
            from start to finish
          </p>

          {selected === "upload" && (
            <div className="upload-box">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              {uploadedFile && (
                <p className="file-name">Uploaded: {uploadedFile.name}</p>
              )}
            </div>
          )}
        </div>

        {/* Scratch Option */}
        <div
          className={`option-card ${selected === "scratch" ? "active" : ""}`}
          onClick={() => handleSelect("scratch")}
        >
          <div className="icon">📝</div>
          <h3>No, start from scratch</h3>
          <p>We'll guide you through the whole process so your skills can shine</p>
        </div>
      </div>

      <div className="buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <button className="next-btn" onClick={handleNext}>
          Next →
        </button>
      </div>

      <footer className="footer">
        <span>TERMS AND CONDITIONS</span> | <span>PRIVACY POLICY</span> |{" "}
        <span>ACCESSIBILITY</span> | <span>CONTACT US</span>
        <p>© 2025, Works Limited. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Selectresume;
