"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'

const AppContext = createContext();

export default function AppWrapper({ children }) {
  const [popType, setPopType] = useState("Add");
  const [enabled, setEnabled] = useState(false);
  const [loginTrigger, setLoginTrigger] = useState(false);
  const [user, setUser] = useState({
      id : '',
      email : '',
      username : '',
      role : ''
  })

  useEffect(() => {
    if(!loginTrigger) return;
    async function fetchData() {
      try{
        const response = await axios.get('/api/users/profile');
        console.log(response.data.user);
        setUser({
          id : response.data.user._id,
          email : response.data.user.email,
          username : response.data.user.username,
          role : response.data.user.role
        })
      }catch(error){
        console.log("Error to get user info");
        console.log(error);
      }finally{
        setLoginTrigger(false);
      }
    }
    fetchData();
  },[loginTrigger]);

  return (
    <AppContext.Provider value={{ popType, setPopType, enabled, setEnabled, user, setLoginTrigger }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(){
    return useContext(AppContext);
}

