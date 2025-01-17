"use client"
import React, { useEffect } from 'react'
import Todo from './Todo'
import { useAppContext } from '../store/store';

export default function TodoList() {

  const {todos, getTodos, loading} = useAppContext();

  useEffect(()=>{
    getTodos();
  },[])

  return (
    <>
      {loading ? (
          <div className='text-4xl text-center'>Loading...</div> // Show loading if todos are empty (still fetching)
        ) : (
          todos.map((todo) => (
            <Todo key={todo._id} value={todo._id} title={todo.title} description={todo.description} />
        ))
      )}
    </>
  )
}
