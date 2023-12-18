import React, { useState } from 'react'
import TaskModal from "../Components/Task-modal.jsx"
import Wrapper from "../Components/Wrapper.jsx"
import { CiCirclePlus } from "react-icons/ci";

export default function Completed() {
    const [ modalOpen, setModalOpen ] = useState(false)

    return (
        <>
            <TaskModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
            <div className='main-wrapper flex flex-col w-full h-[88dvh]'>
                <div className='the-wrapper flex flex-row w-full gap-4 h-[100%] p-3 justify-between'>
                    <Wrapper>
                        <div className='header border-b-[1px] py-1 border-[#172954]'>   
                            <h1>In Progress</h1>
                        </div>
                    </Wrapper>
                    <div className='task-in-progress w-[30dvw] border-l-2 p-2'>
                        <h1>Tasks in progress</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
