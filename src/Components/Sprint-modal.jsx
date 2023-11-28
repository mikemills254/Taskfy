import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Oval } from 'react-loader-spinner';
import { Firestore } from '../Utils/Auth';
import Cookies from 'js-cookie';
import Input from './Input';

const SprintModal = ({ isOpen, handleClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [form, setForm] = useState({ topic: '', description: '' });
    const [selectedOption, setSelectedOption] = useState('personal');

    const [selectedDuration, setSelectedDuration] = useState(1);

    const handleDurationChange = (e) => {
        setSelectedDuration(parseInt(e.target.value, 10));
    };

    const users = [
        { firstName: 'Mike', email: 'mikemills930@gmail.com' },
        { firstName: 'Tim', label: 'timdev930@gmail.com' },
        { firstName: 'Ken', label: 'timdev930@gmail.com' },
        { firstName: 'Kevin', label: 'timdev930@gmail.com' },
    ]
    
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if (!form.topic || !form.description) {
                setIsLoading(false);
                alert('Please fill in all the details about the task');
            } else {
                const email = Cookies.get('userEmail');
                const task = {
                    Topic: form.topic,
                    Description: form.description,
                    Date: date,
                    Type: selectedOption,
                    UserID: email,
                };

                const results = await Firestore.AddDataToFirestore(
                    task.Topic,
                    task.Description,
                    task.Date,
                    task.Type,
                    task.UserID
                );
                !results
                    ? setIsLoading(false)
                    : (() => {
                            localStorage.setItem('task', JSON.stringify(task));
                    })();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            handleClose();
            setForm({ topic: '', description: '' });
        }
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            className='modal flex flex-col items-center justify-center'
        >
        <div className='container-modal flex w-[40dvw] h-[90dvh] px-4 py-2 bg-white flex-col '>
            <div className='container-top w-full flex flex-row items-center justify-between'>
                <h6 className="text-3xl font-bold">Create Sprint</h6>
                <button onClick={handleClose}>X</button>
            </div>
            
            <form>
                <label htmlFor="topic" className="mt-5 text-lg flex flex-col">
                    <small>Sprint name</small>
                    <Input
                        placeholder={""}
                        name={"topic"}
                        InputStyles={"task-name p-2 text-[13px]"}
                    />
                </label>
                <label htmlFor="description" className="mt-5 text-lg flex flex-col">
                    <small>Description</small>
                    <textarea
                        rows={4}
                        placeholder={""}
                        name={"description"}
                        className='description border-[1px] border-[red] rounded-lg outline-none p-2 text-[13px]'
                    />
                </label>
                <div className='date-picker flex flex-col my-3 w-full gap-3'>
                    <label htmlFor="sprintDuration" className='sprint-time flex flex-col'>
                        <small>Sprint Duration</small>
                        <select
                            id="sprintDuration"
                            value={selectedDuration}
                            onChange={handleDurationChange}
                            className='sprint p-2 border-[1px] border-[red] rounded-lg mt-1'
                        >
                            {[...Array(24).keys()].map((hour) => (
                            <option key={hour + 1} value={hour + 1}>
                                {hour + 1} {hour === 0 ? 'hour' : 'hours'}
                            </option>
                            ))}
                        </select>
                    </label>
                    <label className='assignee flex flex-col '>
                        <small>Assignee</small>
                        <select className='assignee-select p-2 mt-1 rounded-lg border-[1px] border-[red]'>
                            <option value="" selected disabled hidden></option>
                            {users.map((user, index) => (
                                <option key={index+1} value={user._id}>{user.firstName}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <footer className='form-footer flex flex-row items-center gap-3 my-8'>
                    <button
                        onClick={handleClose}
                        className='footer-btn flex flex-row items-center justify-center w-24 rounded-md gap-2 p-1 text-[12px] border-[1px]'
                    >
                        Cancel
                    </button>
                    <div
                        onClick={handleSubmit}
                        className='footer-btn flex flex-row items-center justify-center w-24 rounded-md gap-2 p-1 text-[14px] border-[1px] bg-[blue] text-white hover:cursor-pointer'
                    >
                        {!isLoading ? <h4>Create</h4> : <Oval height={25} strokeWidth={5} secondaryColor='white' color='white' />}
                    </div>

                </footer>
            </form>
        </div>
        </Modal>
    );
};

export default SprintModal;
