import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...props }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return isAuthenticated ? (
        <Route {...props} element={element} />
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoute;
