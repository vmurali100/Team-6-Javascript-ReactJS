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
                                <th>AlbumId</th>
                                <th>Title</th>
                                <th>Url</th>
                                <th>ThumbnailUrl</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((user,i) => {
                                return <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.albumId}</td>
                                    <td>{user.title}</td>
                                    <td><img src={user.url} alt="" /></td>
                                    <td><img src={user.thumbnailUrl} alt="" /></td>
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