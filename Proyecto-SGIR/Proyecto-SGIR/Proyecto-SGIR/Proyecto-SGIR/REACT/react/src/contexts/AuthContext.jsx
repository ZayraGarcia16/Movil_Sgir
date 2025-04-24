import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    rol: null,
    user: null,
    isAuthenticated: false
  });

  // Inicializar el estado de autenticación
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem('token');
        const rol = localStorage.getItem('rol');
        const userData = localStorage.getItem('userData');
        
        return {
          token: token || null,
          rol: rol || null,
          user: userData ? JSON.parse(userData) : null,
          isAuthenticated: !!token
        };
      } catch (error) {
        console.error('Error al inicializar auth:', error);
        return {
          token: null,
          rol: null,
          user: null,
          isAuthenticated: false
        };
      }
    };

    setAuthState(initializeAuth());
  }, []);

  const login = (token, userData) => {
    try {
      localStorage.setItem('token', token);
      localStorage.setItem('rol', userData.rol || 'usuario');
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setAuthState({
        token,
        rol: userData.rol,
        user: userData,
        isAuthenticated: true
      });
    } catch (error) {
      console.error('Error al hacer login:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('userData');
    
    setAuthState({
      token: null,
      rol: null,
      user: null,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};


