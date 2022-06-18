import { useState } from "react"
import { Userschild } from "./Userschild"

export const Users = () => {
    const [usersinfo, setusersinfo] = useState([])
    const receiveusersfromchild = (usersdetails) => {
        setusersinfo(usersdetails)
    }
    return (
        <div>
            <Userschild getdata={receiveusersfromchild} />
            <table border={1}>
                <thead>
                    <tr>
                        <th>city</th>
                        <th>street</th>
                        <th>number</th>
                        <th>zipcode</th>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                        <th>phone</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {usersinfo.map((user,i) => {
                        return <tr>
                            <td>{user.city}</td>
                            <td>{user.street}</td>
                            <td>{user.number}</td>
                            <td>{user.zipcode}</td>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.phone}</td>
                            <td>{user.__v}</td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}