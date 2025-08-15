import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPage.css';

const PricingPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        '1 Resume Template',
        'Basic AI Suggestions',
        'PDF Download (with watermark)',
        '3 Resumes Limit'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      popular: true,
      features: [
        'All 25+ Templates',
        'Advanced AI Optimization',
        'Unlimited PDF Downloads',
        'Unlimited Resumes',
        'Cover Letter Builder',
        'ATS Score Checker'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Annual',
      price: '$59.99',
      period: '/year',
      discount: 'Save 50%',
      features: [
        'All Premium Features',
        'Priority Support',
        'Custom Branding',
        'LinkedIn Profile Review'
      ],
      cta: 'Get Discount'
    }
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that works best for your job search</p>
      </div>

      <div className="pricing-toggle">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Annual (Save 50%)</span>
      </div>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            {plan.discount && <div className="discount-badge">{plan.discount}</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              {plan.price} <span>{plan.period}</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link to="/signup" className="btn btn-primary">{plan.cta}</Link>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {[
            {
              question: "Is there a free trial?",
              answer: "Yes, our Premium plan comes with a 7-day free trial."
            },
            {
              question: "Can I cancel anytime?",
              answer: "Absolutely, no long-term contracts or cancellation fees."
            },
            {
              question: "Do you offer student discounts?",
              answer: "Yes, students get 40% off all plans with valid ID."
            },
            {
              question: "How does the AI builder work?",
              answer: "Our AI analyzes job descriptions and suggests optimal content."
            }
          ].map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;