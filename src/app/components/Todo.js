import React from 'react'
import Button from './Button';

export default function Todo(props) {

  return (
    <div className='flex justify-between bg-slate-300 w-[100%] mb-2 py-1 px-3 rounded-lg'>
        <div className=''>
            <h2 className='text-3xl'>{props.title}</h2>
            <p className='text-lg mt-3'>{props.description}</p>
        </div>
        <div className='text-right flex flex-col justify-center items-center'>
            <Button bgcolor='bg-white' textcolor='black' name='Edit' value={props.value} title={props.title} description={props.description}/>
            <Button bgcolor='bg-red-300' textcolor='black' name='Delete' value={props.value}/>
        </div>
    </div>
  )
}
