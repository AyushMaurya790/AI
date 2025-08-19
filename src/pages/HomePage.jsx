import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides for rotation
    }, 5000); // Matches Zety's ~5-second slide interval
    return () => clearInterval(interval);
  }, []);

  const statsData = [
    { number: '41M+', label: 'Job applications created' },
    { number: '1,400+', label: 'Free career guides' },
    { number: '40M+', label: 'Readers annually' },
    { number: '30+', label: 'Career experts' }
  ];

  const testimonials = [
    {
      quote: "I landed 3 interviews in a week! The templates are ATS-friendly and professional.",
      name: "Sarah K.",
      role: "Software Engineer",
      company: "Microsoft"
    },
    {
      quote: "The AI suggestions made my achievements stand out perfectly.",
      name: "Michael T.",
      role: "Marketing Manager",
      company: "Google"
    },
    {
      quote: "Recruiters love this builder—finally a tool they recommend!",
      name: "David L.",
      role: "Product Designer",
      company: "Apple"
    }
  ];

  const resumeExamples = [
    { title: 'Accountant Resume', category: 'Finance' },
    { title: 'Software Engineer Resume', category: 'Technology' },
    { title: 'Marketing Manager Resume', category: 'Marketing' },
    { title: 'Project Manager Resume', category: 'Management' },
    { title: 'Registered Nurse Resume', category: 'Healthcare' },
    { title: 'Teacher Resume', category: 'Education' },
    { title: 'Sales Representative Resume', category: 'Sales' },
    { title: 'Graphic Designer Resume', category: 'Design' }
  ];

  const templates = [
    { name: 'Professional', description: 'Clean, modern design', popular: true },
    { name: 'Creative', description: 'Bold colors and unique style' },
    { name: 'Executive', description: 'Ideal for senior roles' },
    { name: 'Modern', description: 'Sleek, contemporary layouts' },
    { name: 'Simple', description: 'Minimalist and elegant' },
    { name: 'Classic', description: 'Timeless and traditional' }
  ];

  const handleLinkClick = (section) => {
    navigate(section);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Build a Professional Resume & Cover Letter
              <span className="highlight">for Any Job</span>
            </h1>
            <p>
              Create a resume in minutes with our AI-powered builder. Use ATS-friendly templates designed by career experts.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => handleLinkClick('/create-resume/experience-level')}
                className="btn-primary"
              >
                Create My Resume
              </button>
              <button
                onClick={() => handleLinkClick('/templates')}
                className="btn-secondary"
              >
                View All Templates
              </button>
            </div>
            <div className="hero-trust">
              <div className="stars">★★★★★</div>
              <span>Trusted by <strong>40M+</strong> job seekers globally</span>
            </div>
          </div>
          <div className="hero-slideshow">
            <div className="resume-preview-container">
              <div className="resume-preview slide active" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <div className="resume-slide">
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
                      <div className="resume-section" style={{ marginTop: '16px' }}></div>
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
                <div className="resume-slide">
                  <div className="resume-header">
                    <div className="resume-name"></div>
                    <div className="resume-title"></div>
                  </div>
                  <div className="resume-body">
                    <div>
                      <div className="resume-section"></div>
                      <div className="resume-line"></div>
                      <div className="resume-line w-75"></div>
                      <div className="resume-line w-50"></div>
                    </div>
                    <div className="resume-skills">
                      <span className="skill-chip python">Python</span>
                      <span className="skill-chip django">Django</span>
                      <span className="skill-chip sql">SQL</span>
                    </div>
                  </div>
                  <div className="resume-footer">
                    <div className="resume-line"></div>
                    <div className="resume-line short"></div>
                  </div>
                </div>
                <div className="resume-slide">
                  <div className="resume-header">
                    <div className="resume-name"></div>
                    <div className="resume-title"></div>
                  </div>
                  <div className="resume-body">
                    <div>
                      <div className="resume-section"></div>
                      <div className="resume-line"></div>
                      <div className="resume-line w-66"></div>
                      <div className="resume-line w-75"></div>
                    </div>
                    <div className="resume-skills">
                      <span className="skill-chip java">Java</span>
                      <span className="skill-chip spring">Spring</span>
                      <span className="skill-chip aws">AWS</span>
                    </div>
                  </div>
                  <div className="resume-footer">
                    <div className="resume-line"></div>
                    <div className="resume-line short"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-indicators">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is ResumeAI Section */}
      <section className="section bg-gray">
        <div className="container text-center">
          <h2>What is ResumeAI?</h2>
          <p>
            ResumeAI is your all-in-one career platform, powered by top career experts and AI technology. 
            Get the best resume and cover letter builder, plus free expert advice.
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
                Save time with expert tips at every step. Build a professional resume effortlessly.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon green">
                <span>🎨</span>
              </div>
              <h3>ATS-Friendly Templates</h3>
              <p>
                Attract recruiters with 18+ professional, ATS-optimized resume templates.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon purple">
                <span>📚</span>
              </div>
              <h3>Free Career Resources</h3>
              <p>
                Access 1,400+ expert articles and resume examples to shape your career.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon red">
                <span>🔍</span>
              </div>
              <h3>Resume Check</h3>
              <p>
                Get real-time resume scores with actionable improvement suggestions.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon yellow">
                <span>🤖</span>
              </div>
              <h3>AI Content Suggestions</h3>
              <p>
                Use AI to get tailored content and build professional applications fast.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon indigo">
                <span>👥</span>
              </div>
              <h3>HR Recommended</h3>
              <p>
                Trusted by HR experts as a proven career-boosting tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Easy Steps Section */}
      <section className="section bg-blue">
        <div className="container">
          <h2 className="text-center">Create a Perfect Resume in 4 Easy Steps</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Pick a Template</h3>
              <p>Choose from 18+ templates designed by career pros to land your interview.</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Add Expert Content</h3>
              <p>Add job-specific content with a few clicks, crafted by career experts.</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Customize It</h3>
              <p>Adjust colors, fonts, and layouts with our easy-to-use editor.</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Download Your Resume</h3>
              <p>Download in PDF or DOC format, ready to apply!</p>
            </div>
          </div>
          <div className="text-center mt-48">
            <button
              onClick={() => handleLinkClick('/signup')}
              className="btn-primary"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Choose from 18+ Professional Resume Templates</h2>
            <p>
              Build your resume fast with ATS-optimized templates to accelerate your job search.
            </p>
          </div>
          <div className="templates-grid">
            {templates.map((template, index) => (
              <div key={index} className="template-card">
                {template.popular && (
                  <div className="template-popular">Most Popular</div>
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
                    onClick={() => handleLinkClick(`/templates/${template.name.toLowerCase()}`)}
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
              onClick={() => handleLinkClick('/templates')}
              className="btn-link"
            >
              See All Templates →
            </button>
          </div>
        </div>
      </section>

      {/* Resume Examples Section */}
      <section className="section bg-gray">
        <div className="container">
          <div className="text-center">
            <h2>Get Inspired with Resume Examples</h2>
            <p>
              Explore over 600 resume examples for various professions, crafted by Certified Resume Writers.
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
                    onClick={() => handleLinkClick(`/examples/${example.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    View Example →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-32">
            <button
              onClick={() => handleLinkClick('/examples')}
              className="btn-primary"
            >
              Explore All Examples
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">What Our Users Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
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
          <h2>Start Your Career Journey Today</h2>
          <p>
            Join millions of users and boost your career with our resume builder. Trusted by HR experts worldwide.
          </p>
          <button
            onClick={() => handleLinkClick('/signup')}
            className="btn-cta"
          >
            Start Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;