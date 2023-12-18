import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import { selectAuth, setIsAuthenticated } from './Utils/Slicer';

function App() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(selectAuth);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            dispatch(setIsAuthenticated(true));
        }
        setLoading(false);
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path='/' element={isAuthenticated ? <Home /> : <LandingPage />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
