import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ element }) => {
  const { isAdmin } = useContext(AuthContext);
  
  // Ensure isAdmin is updated correctly
  useEffect(() => {
    // You can add any additional logic if needed
  }, [isAdmin]);

  // Redirect to login if not an admin
  return isAdmin ? element : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
