import React, { useState } from 'react';
import { Modal } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import { Oval } from 'react-loader-spinner';
import { Firestore } from '../Utils/Auth';
import Cookies from 'js-cookie';
import Input from './Input';

const InviteModal = ({ isOpen, handleClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [form, setForm] = useState({ topic: '', description: '' });
    const [selectedOption, setSelectedOption] = useState('personal');

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
        <div className='container-modal flex w-[40dvw] px-4 py-2 bg-white flex-col '>
            <div className='container-top w-full flex flex-row items-center justify-between'>
                <h6 className="text-2xl font-semibold">Invite new team member</h6>
                <button onClick={handleClose}>X</button>
            </div>
            
            <form>
                <label htmlFor="topic" className="mt-5 text-lg flex flex-col">
                    <small>Email Address</small>
                    <Input
                        placeholder={""}
                        name={"topic"}
                        InputStyles={"task-name p-2 text-[13px]"}
                    />
                </label>
                <footer className='form-footer flex flex-row items-center gap-3 my-5'>
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
                        {!isLoading ? <h4>Invite</h4> : <Oval height={25} strokeWidth={5} secondaryColor='white' color='white' />}
                    </div>

                </footer>
            </form>
        </div>
        </Modal>
    );
};

export default InviteModal;
