"use client"
import React from 'react'
import userImage from '../../../public/Images/user.png'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function profile() {

    return (
        <div className='h-[100vh] w-[100vw] flex flex-col'>
            <Navbar back="/home"/>
            <div className='h-[90%] w-[100%] flex justify-center items-start mt-[5%]'>
                <div className='bg-slate-400 flex justify-between items-start w-[50%] h-[43%] p-3 rounded-lg'>
                    <div className='w-[30%]'>
                        <Image src={userImage} alt='user image' placeholder='blur' className='rounded-full'></Image>
                    </div>
                    <div className='w-[68%]'>
                        <div className='flex justify-between px-2 w-[100%]'>
                            <input placeholder='Username' type='text' className='w-[83%] my-2 rounded-md h-[5vh] gap-x-2 px-3'></input>
                            <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2'>Edit</button>
                        </div>
                        <div className='flex justify-between px-2 w-[100%]'>
                            <input placeholder='Email' type='text' className='w-[83%] my-2 rounded-md h-[5vh] gap-x-2 px-3'></input>
                            <button className='text-lg w-[5vw] h-[5vh] bg-white rounded-md my-2'>Edit</button>
                        </div>
                        <div className='w-[100%] px-2'>
                            <button className='text-lg w-[27%] h-[5vh] bg-white rounded-md my-2 mr-2'>Change password</button>
                            <button className='text-lg w-[25%] h-[5vh] rounded-md my-2 bg-red-300'>Delete account</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
