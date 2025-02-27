"use client"
import axios from 'axios';
import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'

const AppContext = createContext();

export default function AppWrapper({ children }) {
  const [popType, setPopType] = useState({title : '', description : '', type : 'Add', value : ''});
  const [enabled, setEnabled] = useState(false);
  const [loginTrigger, setLoginTrigger] = useState(false);
  const [user, setUser] = useState({})
  const [alert, setAlert] = useState({visible : false, type : "", message : ""});
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTodos = async() => {
    const response = await axios.get('/api/todos');
    setLoading(false);
    setTodos(response.data.todos);
  }

  const getUser = async() => {
    const response = await axios.get('/api/users/profile');
    setLoading(false);
    console.log(response.data.user);
    setUser(response.data.user);
  }

  const getUsers = async() => {
    const response = await axios.get('/api/users/profiles');
    setLoading(false);
    setUsers(response.data.users);
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
    user, getUser,
    setLoginTrigger,
    alert, setAlert,
    toggleAlert,
    todos, getTodos,
    loading,
    users, getUsers
  }

  // useEffect(() => {
  //   if(!loginTrigger) return;
  //   async function fetchData() {
  //     try{
  //       const response = await axios.get('/api/users/profile');
  //       if(response.status === 200){
  //         setUser({
  //           id : response.data.user._id,
  //           email : response.data.user.email,
  //           username : response.data.user.username,
  //           role : response.data.user.role
  //         })
  //       }
  //     }catch(error){
  //       console.log("Error to get user info");
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // },[loginTrigger]);

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(){
    return useContext(AppContext);
}

