import { useState } from "react"
import { Filltext5Child } from "./Filltext5Child"

export const Filltext5comment =()=>{
    const [usercomment,setusercomment]=useState([])
    const recievedata = (commenetsData)=>{
        setusercomment(commenetsData)
    }
    return(
        <div>
            <Filltext5Child getdata={setusercomment}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>postId</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {usercomment.map((user,i)=>{
                        return <tr>
                            <td>{user.postId}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
