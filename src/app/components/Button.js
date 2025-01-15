"use client"
import React, { useState, useEffect } from 'react'
import { onLogOut, onProfile, onUsers } from '../helpers/navOperation'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../store/store';

export default function Button(props) {
  const router = useRouter();
  const {user, setEnabled, setPopType} = useAppContext();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (props.name === "Users" && user.role === "user") {
      setIsVisible(false);
    }else setIsVisible(true)
  }, []);

  const handleClick = () =>{
    switch (props.name) {
      case "Log-Out":
        onLogOut(router);
        break;
      case "Profile":
        onProfile(router);
        break;
      case "Users":
        onUsers(router);
        break;
      case "Back":
        router.push(props.dest);
        break;
      case "Add ToDo":
        setEnabled(true);
        setPopType("Add");
        break;
      case "Edit":
        setEnabled(true);
        setPopType("Update");
        break;
      default:
        break;
    }
  }

  return (
    <>
        {isVisible && 
          <button onClick={handleClick} className={`${props.bgcolor} ${props.textcolor} w-[5vw] h-[5vh] text-lg rounded-md m-1`}>{props.name}</button>
        }
          
    </>
  )
}
