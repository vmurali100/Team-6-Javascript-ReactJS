import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Practice3 = () => {
    const [Filltext1, setFilltext1] = useState([]);
    useEffect(() => {
        const url = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
        axios.get(url).then((response) => {
            setFilltext1(response.data)

        })

    }, [])

    return (
        <div>
            <p>Practice3</p>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {Filltext1.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Practice3