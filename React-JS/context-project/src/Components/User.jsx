import React from 'react'
import { UserConsumer } from '../Context/Usercontext'

const User = () => {
  return (
    <>
        <p>User Component</p>

        <UserConsumer>
          {(value)=>{
             return <ul>
              {value.map((u,i)=>{
                return <li key={i}>
                  {u.fname}-
                  {u.lname}-
                  {u.tel}-
                  {u.address}-
                  {u.city}-{u.state}-
                </li>
              })}
             </ul>
          }}
        </UserConsumer>
        
    </>
  )
}

export default User

