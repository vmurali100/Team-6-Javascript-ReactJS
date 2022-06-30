import React from 'react'
import { UserConsumer } from '../Context/userContext'

const User = () => {
  return (
    <>
      <p>User</p>
      <UserConsumer>
        {(value)=>{
            return <ul>
              {value.map((u,i)=>{
                return <li key={i}>{u.fname}</li>
               
              })}
            </ul>
        }}
      </UserConsumer>
      
      <hr/>
    </>
  )
}

export default User
