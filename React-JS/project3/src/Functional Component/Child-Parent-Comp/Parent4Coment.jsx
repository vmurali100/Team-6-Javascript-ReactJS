import { useState } from "react"
import { Child3Filltext } from "./Child3Filltext"
import { Child4Coment } from "./Child4Coment"

export const Parent4Coment =()=>{
         const [usercomment,setusercomment]=useState([])
         const RecieveDatafromChild=(userDetails)=>{
            setusercomment(userDetails)
         }
    return(
        <div>
            <Child4Coment getdata={RecieveDatafromChild}/>    
            <table border="1">
                <thead>
                    <tr>
                        <td>postId</td>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody>
                   {usercomment.map((user)=>{
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