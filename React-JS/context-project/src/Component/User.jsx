import React from 'react'
import { Userconsumer } from '../Context/userContext'

const User = () => {
  return (
    //fragment <> its helps to remove unwanted dives
    <>
        <p>User component</p>
        <Userconsumer>
            {(value)=>{
    return <ul>
        {value.map((u,i)=>{
            return <li key={i}>{u.fname}</li>
        })}
    </ul>
            }}
        </Userconsumer>
       
    </>
  )
}

export default User