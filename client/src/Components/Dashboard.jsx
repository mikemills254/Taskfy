import React, { useState } from 'react'
import Wrapper from './Wrapper.jsx'
import { CiCirclePlus } from "react-icons/ci";
import TaskModal from './Task-modal.jsx';

export default function Dashboard() {
    const [ modalOpen, setModalOpen ] = useState(false)
    return (
        <>
            <TaskModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
            <div className='main-wrapper flex flex-col w-full h-[88dvh]'>
                <div className='the-wrapper flex flex-row w-full gap-4 h-[100%] p-3'>
                    <Wrapper>
                        <div className='header border-b-[1px] py-1 border-[#172954] flex flex-row items-center justify-between'>
                            <h1 className="heading font-medium text-[#172954]">To do</h1>
                            <CiCirclePlus size={25} onClick={() => setModalOpen(true)} className='plus hover:cursor-pointer'/>
                        </div>
                    </Wrapper>
                    <Wrapper>
                        <div className='header border-b-[1px] py-1 border-[#172954]'>   
                            <h1>In Progress</h1>
                        </div>
                    </Wrapper>
                    <div className='task-in-progress w-[24dvw] border-l-2 p-2'>
                        <h1>Tasks in progress</h1>
                    </div>
                </div>
            </div>
        </>
        

    )
}
