import React, { useState } from 'react'
import { SearchBox } from './NavBar'
import User from '../../public/images.jpeg'
import { BsThreeDots } from "react-icons/bs";
import InviteModal from './Invite-Member-Modal';

const Team = ({ name, email, tasks }) => {
    return (
        <div className="team hover:cursor-pointer hover:bg-[#eff7ff] p-2 items-center justify-between flex border-b-[1px]">
            <div className='container flex flex-row w-[40%] items-center h-[30%] gap-2'>
                <div className='profileContainer w-10 h-10 flex'>
                    <img src={User} className='w-full h-full bg-contain rounded-full'/>
                </div>
                <div>
                    <p className='name font-bold text-[15px]'>{name}</p>
                    <small className='email '>{email}</small>
                </div>
            </div>
            <h1 className='tasks bg-[yellow] w-[5rem] flex flex-col items-center justify-center rounded-full text-[13px] '>{tasks} tasks</h1>
            <BsThreeDots/>
        </div>
    );
};



export default function Members() {
    const [ isInviteModal, setInviteModal ] = useState(false)
    const team = [
        {name: "Michael Mills", email: "mikemills930@gmail", tasks: '3'},
        {name: "Michael Ngaira", email: "mikengaira930@gmail", tasks: '10'},
        {name: "Brian Ngaira", email: "brianngaira930@gmail", tasks: '1'},
        {name: "Antony Ndiema", email: "antonyndiema930@gmail", tasks: '12'},
    ]
    return (
        <>
            <InviteModal
                isOpen={isInviteModal}
                handleClose={()=>setInviteModal(false)}
            />
            <div className='memberBody h-[86dvh] p-4 flex flex-col items-center justify-center w-full'>
                <div className='teamContainer w-1/2 h-full'>
                    <div className='teamTop w-full p-2 flex flex-row items-center justify-between bg-[#eff7ff] rounded-lg'>
                        <SearchBox
                            searchBoxStyles={'w-[10rem]'}
                        />
                        <div role='button' onClick={() => setInviteModal(true)} className='inviteMember bg-[#172954] text-white hover:cursor-pointer p-1.5 rounded-md px-2'>
                            Invite new team
                        </div>
                    </div>
                    <div className='teamContainer h-[90%] py-1 overflow-y-auto no-scrollbar'>
                        {team.map((index) => (
                            <Team
                                key={index}
                                name={index.name}
                                email={index.email}
                                tasks={index.tasks}
                            />
                        ))}
                    </div>
                    
                </div>
            </div>
        </>
        
    )
}
