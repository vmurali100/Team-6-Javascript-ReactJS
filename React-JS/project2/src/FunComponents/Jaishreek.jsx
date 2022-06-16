import { useState } from "react"

export const Jaishree = () => {
    const [myname, setmyname] = useState("Ambigak")
    const [person, setperson] = useState({
        fname: "ponna",
        lname: "krishna",
        email: "ponna@.com"
    })
    const [users, setusers] = useState(["sri", "jai", "arun", "kkeerthi", "hari"])
    return (
        <div>
            <button onClick={()=>{setmyname("Ponnarasik")}}>change my name</button>
            <button onClick={()=>{setperson("ponnna","krishna","ponna@.com")}}>display fullname</button>
            <button onClick={()=>{setusers("sri", "jai", "arun", "kkeerthi", "hari")}}>display </button>
            <div>
                <h1>my name is:{myname}</h1>
                <p>{person.fname}-{person.lname}-{person.email}</p>
                <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
                </ul>
            </div>
        </div>
    )
}