"use client"
import React from 'react'
import User from './User'
import { useEffect } from 'react'
import { useAppContext } from '../store/store'
import Loading from './Loading'

export default function UserList() {
  const { users, getUsers, loading } = useAppContext();

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <>
      {
        loading ? (
          <Loading/>
        ) : (
          users.map((user) => (
            <User key={user._id} value={user._id} name={user.username}/>
          ))
        )
      }
    </>
  )
}
