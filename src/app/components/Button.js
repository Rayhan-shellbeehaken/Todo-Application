"use client"
import React, { useState, useEffect } from 'react'
import { onLogOut, onProfile, onUsers } from '../helpers/navOperation'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../store/store';
import axios from 'axios';

export default function Button(props) {
  const router = useRouter();
  const {user, setEnabled, setPopType, toggleAlert, getTodos} = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof props.cholbe !== 'undefined') {
      setIsVisible(props.cholbe);
    }
  }, [props.cholbe]);

  const deleteTodo = async(id) => {
    try{
        const response = await axios.delete(`/api/todos?todoId=${id}`);
        toggleAlert("SUCCESS","Task deleted successfully");
        getTodos();
    }catch(error){
        console.log("Delete failed!");
        toggleAlert("FAILED","Failed to delete task")
        console.log(error);
    }
  }

  const handleClick = () =>{
    switch (props.name) {
      case "Log-Out":
        onLogOut(router);
        break;
      case "Profile":
        onProfile(router);
        break;
      case "Users":
        onUsers(router);
        break;
      case "Back":
        router.push(props.dest);
        break;
      case "Add ToDo":
        setEnabled(true);
        setPopType({title : '', description : '', type : 'Add'});
        break;
      case "Edit":
        setEnabled(true);
        setPopType({title : props.title, description : props.description, type : 'Update', value : props.value});
        break;
      case "Delete":
        deleteTodo(props.value);
        break;
      default:
        break;
    }
  }

  return (
    <>
        <button onClick={handleClick} className={`${props.bgcolor} ${props.textcolor} w-[5vw] h-[5vh] text-lg rounded-md m-1 ${isVisible ? '' : 'hidden'}`}>{props.name}</button>
    </>
  )
}
