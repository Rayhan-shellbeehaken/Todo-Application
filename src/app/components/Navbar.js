"use client"
import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'

export default function Navbar(props) {
    const [cholbe , setCholbe] = useState(true);

    useEffect(() => {
        async function fetch() {
            try{
              const response = await axios.get('/api/users/profile');
              console.log("Navbar theke");
              console.log(response.data.user.role);
              if(response.data.user.role === 'user') setCholbe(false);
              else setCholbe(true);
              
            }catch(error){
              console.log("In button");
              console.log(error);
            }
          }
      
          fetch();
    })
    return (
        <div className='bg-slate-200 w-[100%] flex justify-between items-center py-[2vh] px-[3vw] shadow-md'>
            <div>
                <Button name="Back" dest={props.back} bgcolor = "bg-slate-700" textcolor = "text-white" cholbe = {true}/>
            </div>
            <div>
                <Button name="Users" bgcolor = "bg-slate-700" textcolor = "text-white" cholbe = {cholbe}/>
                <Button name="Profile" bgcolor = "bg-green-500" textcolor = "text-black" cholbe = {true}/>
                <Button name="Log-Out" bgcolor = "bg-red-300" textcolor="text-black" cholbe = {true}/> 
            </div>
        </div>
    )
}
