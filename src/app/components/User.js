import React from 'react'

export default function User(props) {
  return (
    <div className='flex justify-between items-center bg-slate-300 mb-2 py-1 px-3 rounded-lg'>
        <div className=''>
            <h2 className='text-2xl'>{props.name}</h2>
        </div>
        <div className='text-right'>
            <button className='text-lg w-[5vw] h-[5vh] bg-red-300 rounded-md my-2' value={props.value}>Delete</button>
        </div>
    </div>
  )
}
