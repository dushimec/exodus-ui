import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = ({ isAdminRoute }) => {
  const { isLoggedIn, isAdmin } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" />;
  }

  if (isAdminRoute && !isAdmin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
