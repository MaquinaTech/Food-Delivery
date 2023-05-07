import React, {useState, useEffect} from 'react';
import { login } from '../auxiliar';

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch(`/api/verifyToken?token=${token}`);
          if (response.ok) {
            const data = await response.json();
            const tokenExpirationDate = new Date(data.expiresAt);
            if (tokenExpirationDate > new Date()) {
              setAuthenticated(true);
            } else {
              localStorage.removeItem('token');
            }
          } else {
            localStorage.removeItem('token');
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    checkTokenValidity();
  }, []);

  const login = (token) => {
    setAuthenticated(true);
    setToken(token);
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
  };

  return { authenticated, login, logout };
};
