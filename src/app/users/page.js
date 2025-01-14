import React from 'react'
import Navbar from '../components/Navbar'
import UserList from '../components/UserList'

export default function users() {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-start'>
        <Navbar back="/home"/>
        <div className='mt-[4vh] w-[50vw]'>
            <div className='px-3'>
                <UserList/>
            </div>
        </div>
    </div>
  )
}
