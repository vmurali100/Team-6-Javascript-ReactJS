import React from 'react'
import { UserConsumer } from '../Context/UserContext'

const User = () => {
  return (
    <>
        <p>User Component</p>
        <UserConsumer>
            {(value)=>{
                return <table border="1">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }}
        </UserConsumer>
        
    </>
  )
}

export default User