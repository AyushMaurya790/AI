import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setCurrentUser(JSON.parse(user));
    setLoading(false);
  }, []);

  const signup = (name, email, password) => {
    const user = { fullName: name, email };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "mock-token");
    setCurrentUser(user);
  };

  const socialLogin = (platform) => {
    const user = {
      fullName: `${platform} User`,
      email: `${platform.toLowerCase()}user@example.com`,
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", `${platform.toLowerCase()}-auth-token`);
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, socialLogin, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
