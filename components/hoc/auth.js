import React, {useState, useEffect} from 'react';
import {verifyToken} from '../auxiliar';

export const setToken = (token) => {
  console.log("Seteamos token");
  console.log(token);
  localStorage.setItem('token', token);
  const token2 = localStorage.getItem('token');
  console.log(token2);
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
              console.log("Token valido");
                setAuthenticated(true);
            } else {
              console.log("Token NO valido");
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
