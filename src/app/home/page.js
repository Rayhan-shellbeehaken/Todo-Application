"use client"
import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import PopUp from '../components/PopUp'
import { useAppContext } from '../store/store'
import Navbar from '../components/Navbar'
import Alert from '../components/Alert'

export default function Home() {
    const {enabled, setEnabled, setPopType} = useAppContext();
    const [alert, setAlert] = useState({visible : false, type : "", message : ""});

    const handleAdd = () => {
        setEnabled(true);
        setPopType("Add");
    }

    return (
        <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-start relative'>
            {alert.visible && 
                <Alert type={alert.type} message={alert.message}/>
            }
            <Navbar back="/"/>
            <div className='mt-[4vh] w-[60vw]'>
                {enabled && 
                    <PopUp setAlert={setAlert}/>
                } 
                <div className='text-right px-4 py-1'>
                    <button className='text-lg w-[5vw] h-[5vh] bg-slate-600 text-white rounded-md' onClick={handleAdd}>Add ToDo</button>
                </div>
                <div className='px-3'>
                    <TodoList/>
                </div>
            </div>
        </div>
    )
}
