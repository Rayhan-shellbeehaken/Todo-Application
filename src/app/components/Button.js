import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Button(props) {
  return (
    <>
        <button onClick={props.onClick} className={`${props.bgcolor} ${props.textcolor} w-[5vw] h-[5vh] text-lg rounded-md mx-1`}>{props.name}</button>
    </>
  )
}
