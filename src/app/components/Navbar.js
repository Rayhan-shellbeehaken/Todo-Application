"use client"
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useAppContext } from '../store/store'

export default function Navbar(props) {
    const { getUser } = useAppContext();

    useEffect(() => {
        getUser();
    },[])

    return (
        <div className='bg-slate-200 w-[100%] flex justify-between items-center py-[2vh] px-[3vw] shadow-md'>
            <div>
                <Button name="Back" dest={props.back} bgcolor = "bg-slate-700" textcolor = "text-white"/>
            </div>
            <div>
                <Button name="Users" bgcolor = "bg-slate-700" textcolor = "text-white"/>
                <Button name="Profile" bgcolor = "bg-green-500" textcolor = "text-black"/>
                <Button name="Log-Out" bgcolor = "bg-red-300" textcolor="text-black"/> 
            </div>
        </div>
    )
}
