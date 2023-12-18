import React, { useState } from 'react';
import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import Dashboard from '../Pages/Dashboard.jsx'
import Members from '../Pages/Members.jsx'
import Completed from '../Pages/Completed.jsx'
import Calendar from '../Pages/Calendar.jsx'
import Sprints from "../Pages/Sprints.jsx"
import Settings from '../Pages/Settings.jsx'
import PrivatePolicy from "../Pages/Private-Policy.jsx"

function Home() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleNavigation = (tab) => {
        setActiveTab(tab);
    };

    const renderComponent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'calendar':
                return <Calendar />;
            case 'completed':
                return <Completed />;
            case 'members':
                return <Members />;
            case 'sprints':
                return <Sprints />;
            case 'settings':
                return <Settings />;
            case 'private-policy':
                return <PrivatePolicy />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className='body bg-white h-[100dvh] w-full flex flex-row'>
            <SideBar activeTab={activeTab} handleNavigation={handleNavigation} />
            <div className='body-1 w-full h-[100dvh]'>
                <NavBar />
                {renderComponent()}
            </div>
        </div>
    );
}

export default Home;
