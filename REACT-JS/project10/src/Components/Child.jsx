import React from 'react'
import User from './User'
import { UserConsumer } from './UserContext'

const Child = () => {
  return (
    <div>
        <p>Child</p>
        <hr />
        {/* <User/> */}
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

export default Child