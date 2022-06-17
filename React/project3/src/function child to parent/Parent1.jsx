import { useState } from "react"
import { Pchild1 } from "./Pchild1"

export const Parent1 =()=>{
    const[filltextInfo,setfilltextInfo]=useState([])
    const receiveDataFromChild=(filltextusers)=>{
        setfilltextInfo(filltextusers)
    }
    return(
        <div>
            <Pchild1 getData={receiveDataFromChild}/>
            <p>users details from child</p>
            {/* {filltextInfo.map} */}
            
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
                        return <tr>
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