import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseTemplate.css";

const ChooseTemplate = () => {
  const navigate = useNavigate();

  // Templates list with unique IDs
  const templates = [
    {
      id: 1,
      name: "Modern Resume",
      preview:
        "https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg",
    },
    {
      id: 2,
      name: "Professional Resume",
      preview:
        "https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg",
    },
    {
      id: 3,
      name: "Creative Resume",
      preview:
        "https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg",
    },
    {
      id: 4,
      name: "Modern Resume",
      preview:
        "https://cdn.venngage.com/template/thumbnail/small/2477e614-cc72-489b-9075-d15df7ae786c.webp",
    },
    {
      id: 5,
      name: "Professional Resume",
      preview:
        "https://cdn.venngage.com/template/thumbnail/small/2477e614-cc72-489b-9075-d15df7ae786c.webp",
    },
    {
      id: 6,
      name: "Creative Resume",
      preview:
        "https://cdn.venngage.com/template/thumbnail/small/2477e614-cc72-489b-9075-d15df7ae786c.webp",
    },
    {
      id: 7,
      name: "Modern Resume",
      preview:
        "https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9Ja1Izd001SzFUZ2Yzd3hrYUt5d3MzR09wRmt1Z080aEFCVTZPbW9SL2ltYWdlLnBuZw~~.png",
    },
    {
      id: 8,
      name: "Professional Resume",
      preview:
        "https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9Ja1Izd001SzFUZ2Yzd3hrYUt5d3MzR09wRmt1Z080aEFCVTZPbW9SL2ltYWdlLnBuZw~~.png",
    },
    {
      id: 9,
      name: "Creative Resume",
      preview:
        "https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy9Ja1Izd001SzFUZ2Yzd3hrYUt5d3MzR09wRmt1Z080aEFCVTZPbW9SL2ltYWdlLnBuZw~~.png",
    },
    {
      id: 10,
      name: "Modern Resume",
      preview:
        "https://www.slideteam.net/media/catalog/product/cache/1280x720/c/r/creative_resume_template_self_introduction_powerpoint_sample_slide01.jpg",
    },
    {
      id: 11,
      name: "Professional Resume",
      preview:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPEf9m0NCM4EaOVQ_GyUDGyPyl_MvsTsyOQ&s",
    },
    {
      id: 12,
      name: "Creative Resume",
      preview:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPEf9m0NCM4EaOVQ_GyUDGyPyl_MvsTsyOQ&s",
    },
  ];

  // Handle template selection
  const handleTemplateSelect = (template) => {
    navigate("/create-resume/selectresume", {
      state: { templateData: template },
    });
  };

  return (
    <div className="choose-template-container">
      <h1 className="page-title">Choose Your Resume Template</h1>

      <div className="templates-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <img
              src={template.preview}
              alt={template.name}
              className="template-preview"
            />
            <h3>{template.name}</h3>
            <button
              className="use-template-btn"
              onClick={() => handleTemplateSelect(template)}
            >
              Use This Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTemplate;
