import React, { createContext, useContext, useState } from 'react';
import { login as authLogin, signup as authSignup } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const userData = await authLogin(credentials);
    setUser(userData);
  };

  const signup = async (userData) => {
    const newUser = await authSignup(userData);
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
