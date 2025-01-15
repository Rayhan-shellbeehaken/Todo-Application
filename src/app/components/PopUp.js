"use client"
import React, { useState } from 'react'
import { useAppContext } from '../store/store';
import axios from 'axios';

export default function PopUp() {
    const {popType, setEnabled} = useAppContext();
    const [todo, setTodo] = useState({title : '', description : ''});

    const handleChange = (prop, value) => {
        setTodo((prev) => ({
            ...prev,
            [prop] : value
        }))
    }

    const addTodo = async() => {
        try{
            const response = await axios.post('/api/todos',todo);
            console.log("Successfully add todo");
            console.log(response.data);
            setEnabled(false)
        }catch(error){
            console.log("Error occured to add todo.");
            console.log(error);
        }
    }

    const updateTodo = async() => {
        try{
            console.log("Update processing");
            setEnabled(false);
        }catch(error){
            console.log("Error to update todo");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        popType === "Add" ? addTodo() : updateTodo();
    }

    return (
        <div className='absolute z-10 w-[40vw] top-[20%] left-[50%] translate-x-[-50%]'>
            <form className='bg-slate-600 flex flex-col p-2 rounded-md' onSubmit={handleSubmit}>
                <input placeholder='Title' type='text' className='w-[100%] my-2 rounded-md p-2' onChange={(e) => handleChange("title",e.target.value)}></input>
                <textarea placeholder='Description' type="text" className='w-[100%] h-[10vh] my-2 rounded-md p-2 resize-none' onChange={(e) => handleChange("description",e.target.value)}></textarea>
                <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2' type="submit">{popType}</button>
            </form>
        </div>
    )
}
