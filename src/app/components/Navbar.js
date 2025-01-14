import { redirect } from 'next/navigation'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

export default function Navbar(props) {
    return (
        <div className='bg-slate-200 w-[100%] flex justify-between items-center py-[2vh] px-[3vw] shadow-md'>
            <div>
                <Button name="Back" dest={props.back} bgcolor = "bg-slate-700" textcolor = "text-white"/>
            </div>
            <div>
                <Button name="Users" dest='/users' bgcolor = "bg-slate-700" textcolor = "text-white"/>
                <Button name="Profile" dest='/profile' bgcolor = "bg-green-500" textcolor = "text-black"/>
                <Button name="Log-Out" dest='/' bgcolor = "bg-red-300" textcolor="text-black"/> 
            </div>
        </div>
    )
}
