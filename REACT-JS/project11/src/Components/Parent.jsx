import React from 'react'
import Child from './Child'
import User from './User'
import { UserConsumer } from './UserContext'

const Parent = () => {
    return (
        <div>
            <p>Parent</p>
            <hr />
            {/* <Child/> */}
            <UserConsumer>

                {(value) => {
                    return <table border={2}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>email</th>
                                <th>username</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {value.map((user,i) => {
                                return <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                }}
            </UserConsumer>
        </div>
    )
}

export default Parent