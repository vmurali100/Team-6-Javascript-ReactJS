import { useState } from "react"
import Child2 from "./Child2"

const Parenc2=()=>{
  const[filidinfo,setfilidinfo]=useState([])
  const receivefromchild=(fildid)=>{
    setfilidinfo(fildid)
  }
  return(
    <div>
        <Child2 sendinfo={receivefromchild}/>
        {
            <table border="1">
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                    </tr>
                </thead>
                <tbody>
                    {filidinfo.map((fii)=>{
                        return <tr>
                            <td>{fii.fname}</td>
                            <td>{fii.lname}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        }
    </div>
  )
}
export default Parenc2