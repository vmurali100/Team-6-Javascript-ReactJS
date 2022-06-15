import React,{useState} from "react"

export const Sample3FunComp = () =>{

    const [myName, setmyName]=useState("Vasu")
    const [person, setPerson]=useState({
        fname: "Srinivas",
        lname: "Srividya",
        email: "vidyachowdary7@gmail.com"
    })
    const [users, setUsers]=useState(["Vidya","Vasu","Sai","Mani"])
    return(
        <div>
            <button onClick={()=>{setmyName("Mani")}}>Display my Name</button>

            <button onClick={()=>{setPerson({fname:"Vidya",lname:"vasu",email:"thammineedis@gamil.com"})}}>Display person Name</button>

            <button onClick={()=>{setUsers(["Srividya","Srinivas","Charan"])}}>Displya User Name</button>

            <h2>My Name is : {myName}</h2>

            <p>{person.fname}-{person.lname}-{person.email}</p>
            
            <ul>{users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}