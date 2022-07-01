import React from 'react'
import { UserConsumer } from './userContext'


const User1 = () => {
    return (
        <>
            <p>User Component</p>

            <UserConsumer>
                {(value) => {
                   return <ul>
                    {value.map((u,i)=>{
                        return <li key={i}>{u.fname}</li>
                               
                    })}
                   </ul>
                }}
            </UserConsumer>

        </>

    )
}

export default User