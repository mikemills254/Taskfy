import React, { useState } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch, CiUser } from "react-icons/ci";
import TaskModal from './Task-modal';
import SprintModal from './Sprint-modal';

export const SearchBox = ({ searchBoxStyles }) => {
    return(
        <div className={`search-box flex flex-row items-center bg-white rounded-sm h-[1.5rem] ${searchBoxStyles}`}>
            <CiSearch 
                size={20}
                className='search-icon m-2 '
            />
            <input 
                type="text" 
                placeholder="search task...." 
                className='search-input w-full h-full outline-none text-[13px]'
            />
        </div>
    )
}

export default function NavBar() {
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ sprintOpen, setSprintOpen ] = useState(false)
    return (
        <>
            <TaskModal
                isOpen={modalOpen}
                handleClose={() => setModalOpen(false)}
            />
            <SprintModal
                isOpen={sprintOpen}
                handleClose={() => setSprintOpen(false)}
            />
            <nav className='nav h-[12%] items-center justify-between flex flex-col mx-3 gap-1 w-[88dvw]'>
                <div className='topNav w-full flex flex-row items-center justify-between px-5 rounded-lg'>
                    <div className='taskName flex flex-row items-center p-2'>
                        <small className=' font-bold'>Task 1</small>
                        <small>Due in 12 hours</small>
                    </div>
                    <div className='taskName flex flex-row items-center justify-between w-[20rem]'>
                        <button className='sprintBtn px-5 border-[1px] border-[red] text-[red]' onClick={() => setSprintOpen(true)}>create sprint</button>
                        <button className='sprintBtn px-5 border-[1px] bg-[blue] text-white' onClick={() => setModalOpen(true)}>create task</button>
                        <IoIosNotificationsOutline className='notification bg-[white]' size={20}/>
                        <CiUser
                            className='userAccount h-5 w-5 rounded-full'
                        />
                    </div>
                    
                </div>
                <div className='bottomNav bg-[#eff7ff] w-full px-5 flex flex-row items-center justify-between p-2 rounded-lg'>
                    <div className='searchBody bg-white w-1/2'>
                        <SearchBox/>
                    </div>
                    <div className='moreOptions w-[20rem] flex flex-row justify-around '>
                        <button className='logout bg-red-3'>Analytics</button>
                        <button className='logout bg-red-3'>Filter</button>
                        <button className='logout bg-red-3'>Filter</button>
                        <button className='logout bg-red-3'>Filter</button>
                    </div>
                </div>
            </nav>
        </>
        
    )
}
