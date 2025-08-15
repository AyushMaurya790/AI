import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);

      const res = await fetch('http://213.210.36.79:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          fullName: name,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to create an account');
      }

      // ✅ Use API token if available, otherwise use given fixed token
      const token =
        data.token ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJGWEJJRW9UaEpyVFpzQUxuaFZHZHZGbTU2Zm4yIiwiaWF0IjoxNzU1MjUzNTcyLCJleHAiOjE3NTU4NTgzNzJ9.CAKbrgy7YmsEtC_RTGY0XMeJtFbmdjw-RpyzOL2Fgkg';

      const userInfo =
        data.user || {
          fullName: 'Amanmmmm Maurya',
          email: 'yasmin@gmail.co',
        };

      // ✅ Save to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userInfo));

      console.log('Signup Success:', data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <h1>Create Your Perfect Resume</h1>
        <p>Join thousands of professionals using Zety to craft HR-approved resumes in minutes.</p>
        <p>Choose from 18+ professional templates, get expert content suggestions, and download your resume instantly.</p>
      </div>

      <div className="signup-right">
        <div className="signup-card">
          <h2>Create Your Zety Account</h2>
          <p className="subtitle">It’s quick and easy to get started.</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

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

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </span>
            </div>

            <button disabled={loading} type="submit" className="btn-primary">
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
