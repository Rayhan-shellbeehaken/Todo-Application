"use client"
import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import axios from 'axios';

export default function TodoList() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    async function fetch() {
      const response = await axios.get('/api/todos');
      console.log(response.data.todos);
      setTodos(response.data.todos);
    }
    fetch();
  },[])

  return (
    <>
        {
          todos.map((todo) => (
            <Todo key={todo._id} value={todo._id} title={todo.title} description={todo.description}/>
          ))
        }
    </>
  )
}
