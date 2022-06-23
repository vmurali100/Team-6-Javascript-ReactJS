import { useState } from "react"
import { Child1Filltext } from "./Child1Filltext"

export const Parent1Filltext = () => {
    const [userfilltext,setuserfilltext]=useState([])
    const Recievedatafromchild=(userdetails)=>{
        setuserfilltext(userdetails)
    }
    return(
        <div>
            <Child1Filltext getdata={Recievedatafromchild}/>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {userfilltext.map((user,i)=>{
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