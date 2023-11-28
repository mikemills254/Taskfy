import React from 'react'
import Logo from '../../public/taskfy.png'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlinePrivacyTip } from "react-icons/md";

function SideBar({ handleNavigation, activeTab }) {
    return (
        <div className='sideBar w-[10rem] bg-[#eff7ff] h-[100dvh] flex flex-col items-center  '>
            <h1 className='logo text-[2rem] font-extrabold text-[#172954] mt-5'  onClick={() => handleNavigation('dashboard')}>Taskfy</h1>
            <div className='navs flex flex-col item-center justify-between h-full w-full mt-4'>
                <ul>
                    <li 
                        className={`text-[#172954] hover:cursor-pointer text-[1rem] flex flex-row items-center w-[100%] p-2 ${activeTab === 'dashboard' ? 'active' : ''}`} 
                        onClick={() => handleNavigation('dashboard')}
                    >
                        <span>
                            <MdOutlineDashboardCustomize className='mr-2'/>
                        </span>
                        Dashboard
                    </li>

                    <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'calender' ? 'active' : ''}`} onClick={() => handleNavigation('calender')}>

                        <span>
                            <CiCalendar className='mr-2'/>
                        </span>
                        Calendar
                    </li>
                    <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'members' ? 'active' : ''}`} onClick={() => handleNavigation('members')}>

                        <span>
                            <BsPeople className='mr-2'/>
                        </span>
                        Members
                    </li>
                    <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => handleNavigation('completed')}>

                        <span>
                            <BsPeople className='mr-2'/>
                        </span>
                        Completed
                    </li>
                    <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'sprints' ? 'active' : ''}`} onClick={() => handleNavigation('sprints')}>

                        <span>
                            <BsPeople className='mr-2'/>
                        </span>
                        Sprints
                    </li>
                </ul>
                <ul>
                <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => handleNavigation('settings')}>
                        <span>
                            <HiOutlineCog6Tooth className='mr-2'/>
                        </span>
                        Settings
                    </li>
                    <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'help' ? 'active' : ''}`} onClick={() => handleNavigation('help')}>
                        <span>
                            <TfiHelpAlt className='mr-2'/>
                        </span>
                        Help
                    </li>
                    <li className={`text-[#172954] text-[1rem] flex flex-row items-center w-[100%] p-2 hover:cursor-pointer ${activeTab === 'private-policy' ? 'active' : ''}`} onClick={() => handleNavigation('private-policy')}>
                        <span>
                            <MdOutlinePrivacyTip className='mr-2'/>
                        </span>
                        Privacy Policy
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default SideBar
