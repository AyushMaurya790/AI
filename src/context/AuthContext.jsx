import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // App load hone par user ko check karo
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setCurrentUser(res.data.user);
      })
      .catch(() => {
        localStorage.removeItem("token");
      });
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    });
    localStorage.setItem("token", res.data.token);
    setCurrentUser(res.data.user);
  };

  // Signup function
  const signup = async (name, email, password) => {
    const res = await axios.post("http://localhost:5000/api/auth/signup", {
      name,
      email,
      password
    });
    localStorage.setItem("token", res.data.token);
    setCurrentUser(res.data.user);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
