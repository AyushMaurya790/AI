import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, socialLogin } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    signup(name, email, password); // local signup
    setLoading(false);
    navigate('/dashboard');
  };

  const handleSocial = (platform) => {
    setLoading(true);
    socialLogin(platform); // mock login
    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <h1>Create Your Perfect Resume</h1>
        <p>Join thousands of professionals using Zety to craft HR-approved resumes in minutes.</p>
      </div>
      <div className="signup-right">
        <div className="signup-card">
          <h2>Create Your Zety Account</h2>
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required />
              <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <span className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? 'Hide' : 'Show'}</span>
            </div>
            <button disabled={loading} type="submit" className="btn-primary">{loading ? 'Signing Up...' : 'Sign Up'}</button>
          </form>

          <div className="social-login">
            <p>or sign up with</p>
            <button onClick={() => handleSocial('Google')} disabled={loading}>Google</button>
            <button onClick={() => handleSocial('Facebook')} disabled={loading}>Facebook</button>
            <button onClick={() => handleSocial('LinkedIn')} disabled={loading}>LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
