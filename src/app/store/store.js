"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'

const AppContext = createContext();

export default function AppWrapper({ children }) {
  const [popType, setPopType] = useState({title : '', description : '', type : 'Add', value : ''});
  const [enabled, setEnabled] = useState(false);
  const [loginTrigger, setLoginTrigger] = useState(false);
  const [user, setUser] = useState({
      id : '',
      email : '',
      username : '',
      role : ''
  })
  const [alert, setAlert] = useState({visible : false, type : "", message : ""});
  const [todos, setTodos] = useState([]);

  const getTodos = async() => {
    const response = await axios.get('/api/todos');
    setTodos(response.data.todos);
  }

  const toggleAlert = (type,message) => {
    setAlert({visible : true, type : type, message : message});
    setTimeout(()=>{
      setAlert({visible : false, type : "", message : ""});
    },1000);
  }

  const store = {
    popType, setPopType,
    enabled, setEnabled, 
    user, 
    setLoginTrigger,
    alert, setAlert,
    toggleAlert,
    todos, getTodos
  }

  useEffect(() => {
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
      }
    }
    fetchData();
  },[]);

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(){
    return useContext(AppContext);
}

