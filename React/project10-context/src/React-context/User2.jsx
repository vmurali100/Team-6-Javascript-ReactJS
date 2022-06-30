import React from 'react'
import { Userconsumer } from './Usercontext'

export const User2 = () => {
  return (
    <div>
        <hr/>
        <p>User2</p>
       <Userconsumer>
        {(value)=>{
            return <ul>{value.map((user,i)=>{
                return <li key={i}>{user.email}</li>
            })}</ul>
        }}
       </Userconsumer>
    </div>
  )
}
