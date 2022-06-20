import { useState } from "react"
import { UserChild } from "./UserChild"

export const UserParent =()=>{
    const[filltextInfo,getfilltextInfo]=useState([])
    const receiveDataFromChild=(filltextusers)=>{
        getfilltextInfo(filltextusers)
    }
    return(
        <div>
            <UserChild getData={receiveDataFromChild}/>
            <h3>users details from child</h3>            
           <table border={1}>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {filltextInfo.map((User, i) => {
                        return <tr key={i}>
                            <td>{User.fname}</td>
                            <td>{User.lname}</td>
                            <td>{User.tel}</td>
                            <td>{User.address}</td>
                            <td>{User.city}</td>
                            <td>{User.state}</td>
                            <td>{User.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}