import React, { createContext, useContext } from 'react';
// import jwt_decode from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const token = sessionStorage.getItem('admin-jwtToken');
  let user = null;

  if (token) {
    try {
      user = jwt_decode(token);
    } catch (e) {
      sessionStorage.removeItem('token');
    }
  }

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};