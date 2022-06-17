import { useState } from "react"

export const Pchild1 =({parent1Details})=>{
    // console.log(parent1Details)
    const[]=useState()
    
    return(
        <div>
          <p>userDetails from parent</p>
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
                    {parent1Details.map((User, i) => {
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