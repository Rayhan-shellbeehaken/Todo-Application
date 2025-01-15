"use client"
import React from 'react'
import Button from './Button'
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Navbar(props) {
    const router = useRouter();
    const onLogOut = async() => {
        try{
            const response = await axios.post('/api/users/logout')
            console.log("Logout successfull");
            console.log(response.data)
            router.push("/");
        }catch(error){
            console.log("Log out failed!");
            console.log(error);
        }
    }

    return (
        <div className='bg-slate-200 w-[100%] flex justify-between items-center py-[2vh] px-[3vw] shadow-md'>
            <div>
                <Button name="Back" dest={props.back} bgcolor = "bg-slate-700" textcolor = "text-white"/>
            </div>
            <div>
                <Button name="Users" dest='/users' bgcolor = "bg-slate-700" textcolor = "text-white"/>
                <Button name="Profile" dest='/profile' bgcolor = "bg-green-500" textcolor = "text-black"/>
                <Button name="Log-Out" bgcolor = "bg-red-300" textcolor="text-black" onClick={onLogOut}/> 
            </div>
        </div>
    )
}
