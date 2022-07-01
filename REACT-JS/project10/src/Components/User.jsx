import React from 'react'
import { UserConsumer } from './UserContext'

const User = () => {
  return (
    <div>
        <p>user</p>
        <UserConsumer>

                {(value) => {
                    return <table border={2}>
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((user,i) => {
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
    </div>
  )
}

export default User
