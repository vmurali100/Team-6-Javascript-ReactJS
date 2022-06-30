import React from 'react'
import { UserConsumer } from './Usercontext'

const User=()=>{
    return(
        <>
            <p>usercomponent</p>

            <UserConsumer>
                {(value)=>{
                //  return  <h2>message received from app component : {value} </h2>
                return <ul>
                    {value.map((u,i)=>{
                       return <li key={i}>{u.fname}</li>
                       
                    })}
                </ul>
                }}
            </UserConsumer>
            
            <hr />

        </>
    )
}
export default User