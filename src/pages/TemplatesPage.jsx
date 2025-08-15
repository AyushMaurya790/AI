import React from 'react';
import { Link } from 'react-router-dom';
import './TemplatesPage.css';

const TemplatesPage = () => {
  const templates = [
    {
      id: 1,
      name: 'Professional',
      category: 'Modern',
      description: 'Clean, contemporary design perfect for any industry',
      popular: true,
      previewColor: '#dbeafe'
    },
    {
      id: 2,
      name: 'Creative',
      category: 'Modern',
      description: 'Stand out with this colorful, eye-catching design',
      previewColor: '#fce7f3'
    },
    {
      id: 3,
      name: 'Simple',
      category: 'Classic',
      description: 'Minimalist layout that focuses on your content',
      previewColor: '#ecfccb'
    },
    {
      id: 4,
      name: 'Executive',
      category: 'Classic',
      description: 'Elegant design for senior-level professionals',
      previewColor: '#e0e7ff'
    },
    {
      id: 5,
      name: 'Basic',
      category: 'Simple',
      description: 'Straightforward layout that works with any ATS',
      previewColor: '#fef3c7'
    },
    {
      id: 6,
      name: 'Modern',
      category: 'Modern',
      description: 'Sleek design with subtle color accents',
      previewColor: '#ccfbf1'
    },
    {
      id: 7,
      name: 'Harvard',
      category: 'Academic',
      description: 'Formal layout preferred in academic circles',
      previewColor: '#ede9fe'
    },
    {
      id: 8,
      name: 'Minimal',
      category: 'Simple',
      description: 'Ultra-clean layout with maximum readability',
      previewColor: '#fee2e2'
    }
  ];

  const categories = [
    { name: 'All', count: templates.length },
    { name: 'Modern', count: templates.filter(t => t.category === 'Modern').length },
    { name: 'Classic', count: templates.filter(t => t.category === 'Classic').length },
    { name: 'Simple', count: templates.filter(t => t.category === 'Simple').length },
    { name: 'Academic', count: templates.filter(t => t.category === 'Academic').length }
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredTemplates = activeCategory === 'All' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <div className="templates-page">
      <section className="templates-hero">
        <div className="container">
          <h1>Professional CV Templates</h1>
          <p>Choose from our collection of ATS-friendly, recruiter-approved templates</p>
        </div>
      </section>

      <section className="templates-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name} <span className="count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="templates-grid-section">
        <div className="container">
          <div className="templates-grid">
            {filteredTemplates.map(template => (
              <div key={template.id} className="template-card">
                {template.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <div 
                  className="template-preview" 
                  style={{ backgroundColor: template.previewColor }}
                >
                  <div className="template-mockup">
                    <div className="header-line"></div>
                    <div className="subheader-line"></div>
                    <div className="content-line short"></div>
                    <div className="content-line"></div>
                    <div className="content-line"></div>
                    <div className="content-line short"></div>
                  </div>
                </div>
                <div className="template-info">
                  <h3>{template.name}</h3>
                  <p className="category">{template.category}</p>
                  <p className="description">{template.description}</p>
                  <Link to={`/templates/${template.id}`} className="use-template-btn">
                    Use This Template
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="templates-cta">
        <div className="container">
          <h2>Can't decide which template to choose?</h2>
          <p>Our resume builder will recommend the best template for your experience level and industry</p>
          <Link to="/builder" className="cta-button">Build My Resume Now</Link>
        </div>
      </section>
    </div>
  );
};

export default TemplatesPage;