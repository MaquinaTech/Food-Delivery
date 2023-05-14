import React, {useState, useEffect} from 'react';
import {verifyToken} from '../auxiliar';

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
          if(authenticated){
            const {data} = await verifyToken(token);
            if (data) {
                setAuthenticated(true);
            } else {
              localStorage.removeItem('token');
            }
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
    setToken(token.value);
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
  };

  return { authenticated, login, logout };
};
