"use client"
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../store/store';
import axios from 'axios';

export default function PopUp() {
    const {popType, enabled, setEnabled, toggleAlert, getTodos} = useAppContext();
    const [todo, setTodo] = useState({title : '', description : ''});

    const handleChange = (prop, value) => {
        setTodo((prev) => ({
            ...prev,
            [prop] : value
        }))
    }

    useEffect(() => {
        setTodo({ title: popType.title || "", description: popType.description || "" });
    }, [popType]);
    

    const addTodo = async() => {
        try{
            const response = await axios.post('/api/todos',todo);
            toggleAlert("SUCCESS","Task added successfully");
            getTodos();
            setEnabled(false)
        }catch(error){
            toggleAlert("Failed","Failed to added task")
            console.log("Error occured to add todo.");
            console.log(error);
        }
    }

    const updateTodo = async() => {
        try{
            const response = await axios.patch(`/api/todos?todoId=${popType.value}`,todo);
            toggleAlert("SUCCESS","Task update successfully");
            getTodos();
            console.log("Update Sucessful");
            setEnabled(false);
        }catch(error){
            console.log("Error to update todo");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        popType.type === "Add" ? addTodo() : updateTodo();
    }

    return (
        <>
            {enabled && 
                <div className='absolute z-10 w-[40vw] top-[20%] left-[50%] translate-x-[-50%]'>
                    <form className='bg-slate-600 flex flex-col p-2 rounded-md' onSubmit={handleSubmit}>
                        <input value={todo.title} placeholder='Title' type='text' className='w-[100%] my-2 rounded-md p-2' onChange={(e) => handleChange("title",e.target.value)}></input>
                        <textarea value={todo.description} placeholder='Description' type="text" className='w-[100%] h-[10vh] my-2 rounded-md p-2 resize-none' onChange={(e) => handleChange("description",e.target.value)}></textarea>
                        <div className='my-2 space-x-2'>
                            <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md' type="submit">{popType.type}</button>
                            <button className='text-lg w-[5vw] h-[5vh] bg-red-300 rounded-md' onClick={()=>setEnabled(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            }
        </>
        
    )
}
