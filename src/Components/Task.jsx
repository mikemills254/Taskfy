import React from 'react';
import { PiDotsNineBold } from 'react-icons/pi';
import { BsCalendar4Event } from 'react-icons/bs';
import { CiBookmark } from "react-icons/ci";
import { IoIosCheckboxOutline } from "react-icons/io";

function Task({ taskTitle, dueDate, category, bookmarks, value, handleChange, onClick }) {
    return (
        <div className='task-container flex flex-col bg-[white] w-full my-2 rounded-md py-3 px-2 border-[1px] hover:cursor-pointer justify-between'>
            <div className='task-content w-[100%]' onClick={onClick}>
                <p className='title text-[1.1rem] font-semibold leading-[0.99rem] mb-2'>{taskTitle}</p>
                <p className='description text-[0.9rem] leading-[1rem] mb-2'>This project is supposed to bring alot of money to me and recognition</p>
                <small className='category bg-[#f2f7fb] p-1 w-[5rem] text-[#6374ae] rounded-lg'>{category}</small>
                <div className='task-bottom flex flex-row items-center w-full mt-2 gap-3'>
                    <span className='date-span flex flex-row items-center gap-1'>
                        <BsCalendar4Event size={12}/>
                        <small>{dueDate}</small>
                    </span>
                    <span className='date-span flex flex-row items-center gap-1'>
                        <CiBookmark size={13}/>
                        <small>{bookmarks}</small>
                    </span>
                    <span className='date-span flex flex-row items-center gap-1'>
                        <IoIosCheckboxOutline size={13}/>
                        <small>{bookmarks}</small>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Task;
