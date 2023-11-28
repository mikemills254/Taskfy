import React, { useState } from 'react';
import SideBar from '../Components/SideBar';
import NavBar from '../Components/NavBar';
import Dashboard from '../Components/Dashboard';
import Calendar from '../Components/Calender';
import Completed from '../Components/Completed';
import Members from '../Components/Members';
import Sprints from '../Components/Sprints';
import Help from '../Components/Help';
import PrivatePolicy from '../Components/Private-Policy';
import Settings from '../Components/Settings';

function Home() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleNavigation = (tab) => {
        setActiveTab(tab);
    };

    const renderComponent = () => {
        switch (activeTab) {
        case 'dashboard':
            return <Dashboard />;
        case 'calender':
            return <Calendar />;
        case 'completed':
            return <Completed />;
        case 'members':
            return <Members />;
        case 'sprints':
            return <Sprints />;
        case 'settings':
            return <Settings/>
        case 'help': 
            return <Help />;
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
