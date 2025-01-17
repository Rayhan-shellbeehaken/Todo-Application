import React from 'react'
import TodoList from '../components/TodoList'
import PopUp from '../components/PopUp'
import Navbar from '../components/Navbar'
import Alert from '../components/Alert'
import Button from '../components/Button'

export default function Home() {
    return (
        <div className='h-[100vh] w-[100vw] flex flex-col items-center justify-start relative overflow-x-hidden'>      
            <Alert/>
            <Navbar back="/"/>
            <div className='mt-[1vh] w-[60vw]'>
                <PopUp/>
                <div className='text-right px-4 py-1'>
                    <Button bgcolor='bg-slate-600' textcolor='text-white' name='Add ToDo' cholbe={true}/>
                </div>
                <div className='px-3'>
                    <TodoList/>
                </div>
            </div>
        </div>
    )
}
