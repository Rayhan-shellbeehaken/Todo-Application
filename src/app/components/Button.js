import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Button(props) {
  return (
    <>
        <Link className={`${props.bgcolor} ${props.textcolor} text-lg py-3 px-7 rounded-md mx-1`} href={props.dest}>{props.name}</Link>
    </>
  )
}
