"use client"
import React from 'react'
import axios from 'axios'
import { useAppContext } from '../store/store'

export default function User(props) {
  const { toggleAlert, getUsers } = useAppContext();

  const onDelete = async(id) =>{
    try{
      const response = await axios.delete(`/api/users/delete?userId=${id}`);
      toggleAlert("SUCCESS","Account deleted successfully");
      getUsers();
    }catch(error){
      console.log('To delete error');
      toggleAlert("FAILED","Failed to delete account")
      console.log(error);
    }
  }

  return (
    <div className='flex justify-between items-center bg-slate-300 mb-2 py-1 px-3 rounded-lg'>
        <div className=''>
            <h2 className='text-2xl'>{props.name}</h2>
        </div>
        <div className='text-right'>
            <button className='text-lg w-[5vw] h-[5vh] bg-red-300 rounded-md my-2' value={props.value} onClick={() => onDelete(props.value)}>Delete</button>
        </div>
    </div>
  )
}
