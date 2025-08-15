import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signInWithGoogle, signInWithLinkedIn, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/dashboard');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch {
      setError('Failed to sign in with Google');
    }
    setLoading(false);
  };

  const handleLinkedInSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithLinkedIn();
      navigate('/dashboard');
    } catch {
      setError('Failed to sign in with LinkedIn');
    }
    setLoading(false);
  };

  const handleFacebookSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithFacebook();
      navigate('/dashboard');
    } catch {
      setError('Failed to sign in with Facebook');
    }
    setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h1>Log in to Zety</h1>
        <p>Access your professional resumes and build HR-approved applications in minutes.</p>
        <p>Choose from 18+ templates and get expert content suggestions instantly.</p>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your resumes</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button disabled={loading} type="submit" className="btn-primary">
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </form>

          <div className="social-login">
            <p className="social-login-text">or sign in with</p>
            <div className="social-buttons">
              <button className="social-btn google-btn" onClick={handleGoogleSignIn} disabled={loading}>
                <span className="social-icon google-icon"></span> Google
              </button>
              <button className="social-btn linkedin-btn" onClick={handleLinkedInSignIn} disabled={loading}>
                <span className="social-icon linkedin-icon"></span> LinkedIn
              </button>
              <button className="social-btn facebook-btn" onClick={handleFacebookSignIn} disabled={loading}>
                <span className="social-icon facebook-icon"></span> Facebook
              </button>
            </div>
          </div>

          <div className="login-footer">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;