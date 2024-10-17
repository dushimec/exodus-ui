import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, login, logout, signup } from '../slices/authSlice';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isLoggedIn, loading, error } = useSelector((state) => state.auth);
  const [getProfileAfterLogin, setgetProfileAfterLogin] = useState(false);

  useEffect(() => {
    if (isLoggedIn && getProfileAfterLogin) {
      dispatch(getProfile())
        .unwrap()
        .catch((error) => {
          console.error('Failed to fetch profile:', error.message || error);
        });
      setgetProfileAfterLogin(false); // Reset flag after fetching profile
    }
  }, [isLoggedIn, dispatch, getProfileAfterLogin]);

  const signupUser = async (userData) => {
    await dispatch(signup(userData));
    // Do not fetch profile after registration
  };

  const loginUser = (credentials) => {
    setgetProfileAfterLogin(true); // Set flag to fetch profile after login
    return dispatch(login(credentials));
  };

  const logoutUser = () => {
    setgetProfileAfterLogin(false); // Reset flag on logout
    return dispatch(logout());
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoggedIn, 
        loading, 
        error, 
        isAdmin: user ? user.isAdmin : false, // Ensure user is not null
        signupUser, 
        loginUser, 
        logoutUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
