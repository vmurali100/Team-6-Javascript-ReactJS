import { useState } from "react"
import Child3 from "./Child3"

const Parenc3=()=>{
  const[postinfo,setpostinfo]=useState([])
  const receivefostfromparenc3=(postdetails)=>{
    setpostinfo(postdetails)
  }
  return(
    <div>
        <Child3 sendpost={receivefostfromparenc3}/>
        {
            <table border="1">
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {postinfo.map((po)=>{
                        return <tr>
                            <td>{po.userId}</td>
                            <td>{po.id}</td>
                            <td>{po.title}</td>
                            <td>{po.body}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        }
    </div>
  )
}
export default Parenc3