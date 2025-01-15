"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Alert from './components/Alert'
import { useAppContext } from './store/store'

export default function SignIn() {
  const router = useRouter();
  const {setLoginTrigger} = useAppContext();

  const [user, setUser] = useState({
    email : "",
    password : ""
  })

  const handleChange = (prop, value) => {
    setUser((prev) => ({
        ...prev,
        [prop] : value
    }))
  }

  const [alert, setAlert] = useState({visible : false, type : "", message : ""});

  const onLogin = async(event) => {
    event.preventDefault();
    try{
      const response = await axios.post('/api/users/login',user);
      console.log("Login success : "+response.data);
      setLoginTrigger(true);
      setAlert({visible : true, type : "SUCCESS" , message : "Successfully logged in"});
      setTimeout(() => {
        router.push('/home');
      },1000)
    }catch(error){
      setAlert({visible : true, type : "FAILED" , message : "Login Failed"});
      setTimeout(() => {
        setAlert((prev) => ({
          ...prev,
          visible : false
        }))
      },1000);
      console.log("Login failed");
    }
  }

  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw] relative'>
      {alert.visible && 
         <Alert type={alert.type} message={alert.message}/>
      }
      <div className='bg-slate-400 w-[25%] px-2 py-2 flex flex-col items-center rounded-md'>
        <h2 className='font-bold text-3xl'>Sign-In form</h2>
        <form onSubmit={onLogin} className='flex flex-col justify-center items-center w-[100%] mt-7'>
          <input placeholder='E-mail' value={user.email} onChange={(e) => handleChange("email",e.target.value)} type='e-mail' className='w-[100%] my-2 rounded-md p-2'></input>
          <input placeholder='Pasword' value={user.password} onChange={(e) => handleChange("password", e.target.value)} type='password' className='w-[100%] my-2 rounded-md p-2'></input>
          <button type='submit' className='text-lg p-3 bg-slate-600 text-white rounded-md my-2'>Sign In</button>
        </form>
        <h3 className='my-3'>Don't have an account ? <Link href="/signup" className='text-lg p-3 mx-2 bg-slate-100 rounded-md'>Sign up</Link></h3>
      </div>
    </div>
  )
}
