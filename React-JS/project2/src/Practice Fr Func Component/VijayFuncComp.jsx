import React,{useState} from "react"

export const VijayFuncComp = ()=> {
    const [myName, setMyname] = useState("Jai")
    const [Person,setPerson]=useState({
        fname:"Sai",
        lname:"Kiran"
    })
  const [users,setusers]=useState(["SAi","Samraj","Kishore","Dinesh","Suman"])
    return (
        <div>
            <button onClick={()=>{setMyname("JayaSankar")}}>Change My name</button>
            <button onClick={()=>{setPerson({fname:"B",lname:"Jaysanakr"})}}>Display Change Person</button>  
            <button onClick={()=>{setusers(["Kishore","Ganesh","Naveen","Ram","Charan"])}}>Display Change Users</button>          
            <h2>My Name is : {myName}</h2>
            <p>{Person.fname}-{Person.lname}</p>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>

        </div>
    )
}