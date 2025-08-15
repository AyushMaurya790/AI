import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const statsData = [
    { number: '41M+', label: 'Job applications created' },
    { number: '1,400+', label: 'Free career guides' },
    { number: '40M+', label: 'Readers a year' },
    { number: '30+', label: 'Career Experts' }
  ];

  const testimonials = [
    {
      quote: "Got 3 interviews in the first week! The templates are professional and ATS-friendly.",
      name: "Sarah K.",
      role: "Software Engineer",
      company: "Microsoft"
    },
    {
      quote: "The AI suggestions helped me highlight my key achievements perfectly.",
      name: "Michael T.",
      role: "Marketing Manager",
      company: "Google"
    },
    {
      quote: "Finally, a resume builder that recruiters actually recommend.",
      name: "David L.",
      role: "Product Designer",
      company: "Apple"
    }
  ];

  const resumeExamples = [
    { title: 'Accounting Resume', category: 'Finance' },
    { title: 'Software Engineer Resume', category: 'Technology' },
    { title: 'Marketing Manager Resume', category: 'Marketing' },
    { title: 'Project Manager Resume', category: 'Management' },
    { title: 'Nurse Resume', category: 'Healthcare' },
    { title: 'Teacher Resume', category: 'Education' },
    { title: 'Sales Representative Resume', category: 'Sales' },
    { title: 'Graphic Designer Resume', category: 'Design' }
  ];

  const templates = [
    { name: 'Professional', description: 'Clean and modern design', popular: true },
    { name: 'Creative', description: 'Stand out with color and style' },
    { name: 'Executive', description: 'Perfect for senior positions' },
    { name: 'Modern', description: 'Contemporary layouts' },
    { name: 'Simple', description: 'Minimalist and clean' },
    { name: 'Classic', description: 'Traditional and timeless' }
  ];

  const handleLinkClick = (section) => {
    console.log(`Navigate to: ${section}`);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Professional Resume & Cover Letter Tools
              <span className="highlight">For Any Job</span>
            </h1>
            <p>
              Create a job-winning resume in minutes with our easy-to-use builder. 
              ATS-friendly templates designed by career experts.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => handleLinkClick('signup')}
                className="btn-primary"
              >
                Create your resume now
              </button>
              <button 
                onClick={() => handleLinkClick('templates')}
                className="btn-secondary"
              >
                View Templates
              </button>
            </div>
            <div className="hero-trust">
              <div className="stars">
                ★★★★★
              </div>
              <span>Trusted by <strong>40M+</strong> job seekers worldwide</span>
            </div>
          </div>
          <div className="resume-preview-container">
            <div className="resume-preview">
              <div className="resume-header">
                <div className="resume-name"></div>
                <div className="resume-title"></div>
              </div>
              <div className="resume-body">
                <div>
                  <div className="resume-section"></div>
                  <div className="resume-line"></div>
                  <div className="resume-line"></div>
                  <div className="resume-line short"></div>
                  <div className="resume-section" style={{marginTop: '16px'}}></div>
                  <div className="resume-line"></div>
                  <div className="resume-line"></div>
                </div>
                <div className="resume-skills">
                  <span className="skill-chip js">JavaScript</span>
                  <span className="skill-chip react">React</span>
                  <span className="skill-chip node">Node.js</span>
                  <span className="skill-chip mongodb">MongoDB</span>
                </div>
              </div>
              <div className="resume-footer">
                <div className="resume-line"></div>
                <div className="resume-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ResumeAI Section */}
      <section className="section bg-gray">
        <div className="container text-center">
          <h2>What is ResumeAI?</h2>
          <p>
            ResumeAI is an all-in-one career platform powered by some of the best career experts and AI technology. 
            We offer you the best online resume and cover letter builder, as well as free professional advice from career experts.
          </p>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">How Can We Help You?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon blue">
                <span>📄</span>
              </div>
              <h3>Resume Builder</h3>
              <p>
                Save time with our expert tips every step of the way. Creating a professional resume has never been easier.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green">
                <span>🎨</span>
              </div>
              <h3>ATS-Friendly Templates</h3>
              <p>
                Grab recruiters' attention with 18 professional resume templates designed by career experts.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon purple">
                <span>📚</span>
              </div>
              <h3>Free Career Resources</h3>
              <p>
                Shape your career with helpful guides and resume examples. Learn from our 1,400+ expert articles.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon red">
                <span>🔍</span>
              </div>
              <h3>Resume Check</h3>
              <p>
                Score and check your resume in real-time with actionable improvement tips.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon yellow">
                <span>🤖</span>
              </div>
              <h3>AI Content Suggestions</h3>
              <p>
                Discover expert-crafted content suggestions and create professional applications in minutes.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon indigo">
                <span>👥</span>
              </div>
              <h3>HR Recommended</h3>
              <p>
                Industry experts recommend our platform as a proven way to boost your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Easy Steps Section */}
      <section className="section bg-blue">
        <div className="container">
          <h2 className="text-center">Create a Perfect Resume in 4 easy steps</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Pick a template</h3>
              <p>Choose from 18 templates crafted by career professionals to help you land the interview.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Add expert-written content</h3>
              <p>With just a few clicks, add tailored, job-specific content created by career experts.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Make it yours</h3>
              <p>Adjust the colors, fonts, and layout with our user-friendly interface.</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Download in PDF or DOC</h3>
              <p>Download your polished resume in the preferred file format. Ready to apply!</p>
            </div>
          </div>
          <div className="text-center mt-48">
            <button 
              onClick={() => handleLinkClick('signup')}
              className="btn-primary"
            >
              Create Your Resume Now
            </button>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Pick from 18 Professional Resume Templates</h2>
            <p>
              Build your resume quickly and effortlessly. Our ATS-optimized templates help you find your desired job faster.
            </p>
          </div>
          <div className="templates-grid">
            {templates.map((template, index) => (
              <div key={index} className="template-card">
                {template.popular && (
                  <div className="template-popular">
                    Most Popular
                  </div>
                )}
                <div className="template-preview">
                  <div className="template-mockup">
                    <div className="template-mockup-header"></div>
                    <div className="template-mockup-subheader"></div>
                    <div className="template-mockup-lines">
                      <div className="template-mockup-line"></div>
                      <div className="template-mockup-line w-75"></div>
                      <div className="template-mockup-line w-50"></div>
                    </div>
                  </div>
                </div>
                <div className="template-content">
                  <h3>{template.name}</h3>
                  <p>{template.description}</p>
                  <button 
                    onClick={() => handleLinkClick(`templates/${template.name.toLowerCase()}`)}
                    className="btn-template"
                  >
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-32">
            <button 
              onClick={() => handleLinkClick('templates')}
              className="btn-link"
            >
              See All Resume Templates →
            </button>
          </div>
        </div>
      </section>

      {/* Resume Examples Section */}
      <section className="section bg-gray">
        <div className="container">
          <div className="text-center">
            <h2>Get Inspired with Resume Samples</h2>
            <p>
              Explore our vast library of over 600 resume examples tailored to most professions and industries. 
              Written by Certified Professional Resume Writers.
            </p>
          </div>
          <div className="examples-grid">
            {resumeExamples.map((example, index) => (
              <div key={index} className="example-card">
                <div className="example-preview">
                  <div className="example-mockup">
                    <div className="example-mockup-header"></div>
                    <div className="example-mockup-subheader"></div>
                    <div className="example-mockup-lines">
                      <div className="example-mockup-line"></div>
                      <div className="example-mockup-line w-75"></div>
                      <div className="example-mockup-line w-50"></div>
                      <div className="example-mockup-line w-66"></div>
                    </div>
                  </div>
                </div>
                <div className="example-content">
                  <div className="example-category">{example.category}</div>
                  <h3>{example.title}</h3>
                  <button 
                    onClick={() => handleLinkClick(`examples/${example.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    See the example →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-32">
            <button 
              onClick={() => handleLinkClick('examples')}
              className="btn-primary"
            >
              Check All Resume Examples
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  ★★★★★
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar"></div>
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient">
        <div className="container text-center">
          <h2>Transform your career today and join thousands of satisfied users</h2>
          <p>
            Experience our intuitive resume builder and take a shortcut to your dream career. 
            Discover why thousands of job seekers and HR experts trust us.
          </p>
          <button 
            onClick={() => handleLinkClick('signup')}
            className="btn-cta"
          >
            Try our resume maker
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;