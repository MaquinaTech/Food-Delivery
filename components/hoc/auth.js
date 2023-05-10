import React, {useState, useEffect} from 'react';
import {verifyToken} from '../api/auxiliar';

export const setToken = (token) => {
  console.log("Seteamos token");
  console.log(token);
  localStorage.setItem('token', token);
};

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const {data} = await verifyToken(token);
          if (data) {
              setAuthenticated(true);
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
