"use client"
import React, { useEffect } from 'react'
import Todo from './Todo'
import { useAppContext } from '../store/store';
import Loading from './Loading';

export default function TodoList() {

  const {todos, getTodos, loading} = useAppContext();

  useEffect(()=>{
    getTodos();
  },[])

  return (
    <>
      {loading ? (
          <Loading/>
        ) : (
          todos.map((todo) => (
            <Todo key={todo._id} value={todo._id} title={todo.title} description={todo.description} />
          ))
      )}
    </>
  )
}
