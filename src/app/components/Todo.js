import React from 'react'
import Button from './Button';

export default function Todo() {

  return (
    <div className='flex justify-between bg-slate-300 mb-2 py-1 px-3 rounded-lg'>
        <div className=''>
            <h2 className='text-3xl'>Title</h2>
            <p className='text-lg mt-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        </div>
        <div className='text-right'>
            <Button bgcolor='bg-white' textcolor='black' name='Edit'/>
            <Button bgcolor='bg-red-300' textcolor='black' name='Delete'/>
        </div>
    </div>
  )
}
