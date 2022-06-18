import { useState } from "react"

export const Function9 =()=>{
    const [education,seteducation]=useState("degree")
    const [educationdetails,seteducationdetails]=useState({
        subjects:"5",
        labs:"2",
        fundamental:"2",
        clg:"vijayam"
    })
    const [educationnames,seteducationnames]=useState(["vcr","pvkn","vijetha"])
    return <div>
        <button onClick={()=>{seteducation("pg")}}>change electronic</button>
        <button onClick={()=>{seteducationdetails({ subjects:"6",labs:"1",fundamental:"2",clg:"sitams"})}}>change details</button>
        <button onClick={()=>{seteducationnames(["vignanasuda","rk","svcet","emralds","vijayam"])}}>change names</button>

        <h2>My education is: {education}</h2>

        <p>{educationdetails.subjects} - {educationdetails.labs} - {educationdetails.fundamental} - {educationdetails.clg}</p>

        <ul>
            {educationnames.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}