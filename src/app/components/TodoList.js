"use client"
import React, { useEffect } from 'react'
import Todo from './Todo'
import { useAppContext } from '../store/store';

export default function TodoList() {

  const {todos, getTodos} = useAppContext();

  useEffect(()=>{
    getTodos();
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
