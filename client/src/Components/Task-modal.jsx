import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Oval } from 'react-loader-spinner';
import Input from './Input';
import { IoMdClose } from "react-icons/io";

const TaskModal = ({ isOpen, handleClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        topic: '',
        description: '',
        date: null,
        tags: '',
        assignee: ''
    });

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if (!form.topic || !form.description) {
                setIsLoading(false);
                alert('Please fill in all the details about the task');
            } else {
                console.log(form);
                setTimeout(() => {
                    setIsLoading(false);
                    setForm({ topic: '', description: '', date: '', tags: '', assignee: '' });
                    handleClose();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            className='modal flex flex-col items-center justify-center'
        >
            <div className='container-modal flex w-[40dvw] h-[90dvh] px-4 py-2 bg-white flex-col rounded-lg '>
                <div className='container-top w-full flex flex-row items-center justify-between'>
                    <h6 className="text-xl text-center flex font-bold">New Task</h6>
                    <IoMdClose
                        onClick={handleClose}
                        size={20}
                        className='close hover:cursor-pointer'
                    />
                </div>

                <form>
                    <label htmlFor="topic" className="mt-5 text-lg flex flex-col">
                        <small>Task name</small>
                        <Input
                            placeholder={""}
                            name={"topic"}
                            InputStyles={"task-name p-2 text-[13px]"}
                            value={form.topic}
                            onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        />
                    </label>
                    <label htmlFor="description" className="mt-5 text-lg flex flex-col">
                        <small>Description</small>
                        <textarea
                            rows={4}
                            placeholder={""}
                            name={"description"}
                            className='description border-[1px] border-[red] rounded-lg outline-none p-2 text-[13px]'
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                        />

                    </label>
                    <div className='date-picker flex flex-row my-3 w-full items-center justify-between'>
                        <label className='dateline flex flex-col'>
                            <small>Dateline</small>
                            <Input
                                placeholder={""}
                                type={"date"}
                                value={form.date}
                                onChange={(e) => setForm({ ...form, date: e.target.value})}
                                InputStyles="date pl-2 border-[1px]"
                            />
                        </label>
                        <label className='assignee flex flex-col w-[25dvw] p-3 '>
                            <small>Assignee</small>
                            <select
                                className='select p-2 border-[1px] border-[red] rounded-lg'
                                value={form.assignee}
                                onChange={(e) => setForm({ ...form, assignee: e.target.value })}
                            >
                                <option value="" disabled>Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                    </div>
                    <label htmlFor='tags'>
                        <small>Tags</small>
                        <Input
                            placeholder={""}
                            name={"tags"}
                            InputStyles={"tag-name px-2 text-[13px]"}
                            value={form.tags}
                            onChange={(e) => setForm({ ...form, tags: e.target.value })}
                        />
                    </label>
                    <footer className='form-footer flex flex-row items-center gap-3 my-5'>
                        <button
                            type="button"
                            onClick={handleClose}
                            className='footer-btn flex flex-row items-center justify-center w-24 rounded-md gap-2 p-1 text-[12px] border-[1px]'
                        >
                            Cancel
                        </button>
                        <div
                            onClick={handleSubmit}
                            className='footer-btn flex flex-row items-center justify-center w-24 rounded-md gap-2 p-1 text-[14px] border-[1px] bg-[blue] text-white hover:cursor-pointer'
                        >
                            {!isLoading ? <h4>Create</h4> : <Oval height={20} strokeWidth={5} secondaryColor='white' color='white' />}
                        </div>
                    </footer>
                </form>
            </div>
        </Modal>
    );
};

export default TaskModal;
