import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Practice1() {
    const [AllUsers, setAllUsers] = useState([]);
    useEffect(() => {
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then((response) => {
            setAllUsers(response.data)
        })
    }, [])
    return (
        <div> 
            <p>Practice1</p>
            <table border={2}>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                        </tr>
                    })}
                </tbody>
            </table>


        </div>
    )
}

export default Practice1