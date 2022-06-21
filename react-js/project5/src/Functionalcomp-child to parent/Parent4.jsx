import { useState } from "react"
import Child4 from "./Child4"

const Parent4=()=>{
    const[todinfo,settod]=useState([])
    const receivetodfromchild=(todosdetails)=>{
        settod(todosdetails)
    }
    return(
        <div>
            <Child4 sendtodos={receivetodfromchild}/>
            {
                <table border="1">
                    <thead>
                        <tr>
                            <th>userid</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                      {todinfo.map((to)=>{
                        return <tr>
                            <td>{to.userId}</td>
                            <td>{to.id}</td>
                            <td>{to.title}</td>
                            <td>{to.completed}</td>
                        </tr>
                      })}
                    </tbody>
                </table>
}
           
        </div>
    )
}