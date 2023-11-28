import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import { PiStrategyThin } from "react-icons/pi";
import { CiCalendar, CiShare2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Logo from '../../public/taskfy.png'

function LandingPage() {
    const navigation = useNavigate()
    const objectsArray = [
        { id: 1, name: 'Capture', icon: <TfiWrite size={40} color='#182953'/> },
        { id: 2, name: 'Organize', icon: <CiCalendar size={40} color='#182953'/>},
        { id: 3, name: 'Strategize', icon:  <PiStrategyThin size={40} color='#182953'/> },
        { id: 4, name: 'Collaborate', icon: <CiShare2 size={40} color='#182953'/> },
    ];
    
    return (
        <div className='landPage flex flex-col items-center gap-4 bg-[#eff7ff]'>
            <nav className='nav bg-[#eff7ff] w-screen flex flex-row items-center justify-between px-20 py-2'>
                <img
                        src={Logo} alt='Taskfy' className='logo h-[2rem] w-[2rem]'

                    />
                <ul className='ul flex flex-row items-center justify-between'>
                    <li className='login px-4 py-2 bg-[#182953] font-medium text-white rounded-lg hover:cursor-pointer' onClick={() => navigation('/signIn') }>Login to Taskfy</li>
                </ul>
            </nav>
            <h1 className='intro-1 text-5xl font-bold max-w-[40rem] text-center text-[#182953]'>
                Bring your tasks under full control with Taskfy
            </h1>
            <h5 className='intro-2 text-[1rem] max-w-xs text-center'>
                Master your To-do list: Organize your life with a top rated Mobile Task App
            </h5>
            <button className='getStarted p-3 rounded-lg bg-[#182953] text-white font-medium px-6' onClick={() => navigation('/signUp')}>
                Get Started
            </button>
            <div className='Objects w-screen flex flex-row items-center justify-evenly mt-[8rem]'>
                {objectsArray.map((object) => (
                    <div key={object.id} className='object w-[10rem] h-[10rem] rounded-md flex flex-col items-center p-2 justify-center gap-2'>
                        <h1 className='name text-[#182953]'>{object.name}</h1>
                        {object.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingPage