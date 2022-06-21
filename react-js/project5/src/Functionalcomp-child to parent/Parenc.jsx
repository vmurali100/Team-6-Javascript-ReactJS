import { useState } from "react"

import Child from "./Child"

const Parenc=()=>{
    const[filtextinfo,setfilinfo1]=useState([])
    const receivedatafromchild=(filtex1)=>{
        setfilinfo1(filtex1)
    }
    return(
        <div>
            <Child sendchild={ receivedatafromchild}/>
            {
               <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {filtextinfo.map((fi)=>{
                        return <tr>
                            <td>{fi.id}</td>
                            <td>{fi.email}</td>
                            <td>{fi.username}</td>
                            <td>{fi.password}</td>
                        </tr>
                    })}
                </tbody>
               </table>
            }
        </div>
    )
}
export default Parenc