"use client"
import React, { useEffect, useState } from 'react'
import userImage from '../../../public/Images/user.png'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useAppContext } from '../store/store'
import Loading from '../components/Loading'
import axios from 'axios'
import Alert from '../components/Alert'

export default function profile() {
    const { user, getUser, loading, toggleAlert } = useAppContext();
    const [userDetails , setUserDetails] = useState({username : "" , email : ""});

    useEffect(() => {
        setUserDetails({username : user.username || "", email : user.email || ""});
    },[user]);

    const handleChange = (prop, value) => {
        setUserDetails((prev) => ({
            ...prev,
            [prop] : value
        }))
    }

    const onUpdate = async() => {
        try{
            const response = await axios.patch('/api/users/profile',userDetails);
            toggleAlert("SUCCESS","Successfully updated");
            getUser();
        }catch(error){
            console.log("Update hoi nai");
            console.log(error);
        }
    }

    return (
        <div className='h-[100vh] w-[100vw] flex flex-col items-center'>
            <Alert/>
            <Navbar back="/home"/>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <div className='h-[90%] w-[100%] flex justify-center items-start mt-[5%]'>
                        <div className='bg-slate-400 flex justify-between items-start w-[50%] h-[43%] p-3 rounded-lg'>
                            <div className='w-[30%]'>
                                <Image src={userImage} alt='user image' placeholder='blur' className='rounded-full'></Image>
                            </div>
                            <div className='w-[68%]'>
                                <div className='flex justify-between px-2 w-[100%]'>
                                    <input value = {userDetails.username} onChange={(e) => handleChange("username",e.target.value)} placeholder='Username' type='text' className='w-[83%] my-2 rounded-md h-[5vh] gap-x-2 px-3'></input>
                                    <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2' onClick={() => onUpdate()}>Update</button>
                                </div>
                                <div className='flex justify-between px-2 w-[100%]'>
                                    <input value = {userDetails.email} onChange={(e) => handleChange("email",e.target.value)} placeholder='Email' type='text' className='w-[83%] my-2 rounded-md h-[5vh] gap-x-2 px-3'></input>
                                    <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2' onClick={() => onUpdate()}>Update</button>
                                </div>
                                <div className='w-[100%] px-2'>
                                    <button className='text-lg w-[27%] h-[5vh] bg-white rounded-md my-2 mr-2'>Change password</button>
                                    <button className='text-lg w-[25%] h-[5vh] rounded-md my-2 bg-red-300'>Delete account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
            
        </div>
    )
}
