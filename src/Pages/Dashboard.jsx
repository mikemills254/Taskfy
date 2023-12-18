import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import TaskModal from "../Components/Task-modal.jsx";
import Task from "../Components/Task.jsx";
import Wrapper from '../Components/Wrapper.jsx'

export default function Dashboard() {
    const [ modalOpen, setModalOpen ] = useState(false)
    const task = [
        {title: "An introduction to project management course coursera", due: "12.10.2023", category: "school", marks: '4'},
        {title: "task one", due: "12.10.2023", category: "school", marks: '4'},
        {title: "task one", due: "12.10.2023", category: "school", marks: '2'},
        {title: "task one", due: "12.10.2023", category: "school", marks: '6'},
        {title: "task one", due: "12.10.2023", category: "school", marks: '9'},
        {title: "task one", due: "12.10.2023", category: "school", marks: "0"},
        {title: "task one", due: "12.10.2023", category: "school", marks: '1'},
        {title: "task one", due: "12.10.2023", category: "school", marks: '6'},
        {title: "task one", due: "12.10.2023", category: "school", marks: '10'},
    ]
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
                        {task.map((item, index) => (
                            <Task
                                key={index}
                                taskTitle={item.title}
                                dueDate={item.due}
                                category={item.category}
                                bookmarks={item.marks}
                            />
                        ))}
                    </Wrapper>
                    <Wrapper>
                        <div className='header border-b-[1px] py-1 border-[#172954]'>   
                            <h1>In Progress</h1>
                        </div>
                        {task.map((item, index) => (
                            <Task
                                key={index}
                                taskTitle={item.title}
                                dueDate={item.due}
                                category={item.category}
                                bookmarks={item.marks}
                            />
                        ))}
                    </Wrapper>
                    <div className='task-in-progress w-[24dvw] border-l-2 p-2'>
                        <h1>Tasks in progress</h1>
                    </div>
                </div>
            </div>
        </>
        

    )
}
