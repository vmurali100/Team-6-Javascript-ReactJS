import React, { useState } from 'react'
import Childs1 from './Childs1'
import { UserConsumer } from './UserContext1'

const Users1 = () => {
    const [UsersInfo, setUsersInfo] = useState([])
    return (
        <div>
            <p>Users1</p>
            <UserConsumer>
                {/* {(value) => {
                    return <h2>Message Recieved From App Component : {value} </h2>
                    return <ul>
                        {value.map((user, i) => {
                            return <li key={i}>{user.fname}</li>
                        })}
                    </ul>
                }} */}
                {(value) => {
                    return <table border="2px">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>UserId</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((user,i) => {
                                return <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.userId}</td>
                                    <td>{user.title}</td>
                                    <td>{user.completed}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                }}
            </UserConsumer>
        </div>
    )
}
export default Users1