import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [Users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=1").then((response)=>{
            setUsers(response.data.data)
        })
    })
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {Users?.map((user,i)=>{
            return <li key={i}>{user?.email}</li>
        })}
      </ul>
    </div>
  )
}

export default Users
