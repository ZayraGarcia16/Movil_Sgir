// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate } from 'react-router-dom';
import AccessDenied from '../paginas/AccesoDenegado/AccesoDenegado';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const roles = JSON.parse(localStorage.getItem('roles') || '[]');

  if (!token) {
    console.log('No hay token, redirigiendo a pagina principal');
    return <Navigate to="/" />;
  }

  // eslint-disable-next-line react/prop-types
  const hasAccess = allowedRoles.some((role) => roles.includes(role));
  console.log('Acceso concedido:', hasAccess);

  return hasAccess ? children : <AccessDenied />;
};

export default ProtectedRoute;