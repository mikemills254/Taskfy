import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LandingPage from '../Pages/LandingPage';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Home from '../Pages/Home';
import { setIsAuthenticated } from '../Utils/Slicer';

function Navigation() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');


    useEffect(() => {
        const isAuthenticatedNow = accessToken !== null;

        if (isAuthenticatedNow !== isAuthenticated) {
            dispatch(setIsAuthenticated(isAuthenticatedNow));
        }
    }, [dispatch, isAuthenticated]);

    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={isAuthenticated && accessToken ? <Navigate to="/home" /> : <SignIn />} />
                    <Route path="/home" element={isAuthenticated && accessToken ? <Home /> : <Navigate to="/signin" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navigation;
