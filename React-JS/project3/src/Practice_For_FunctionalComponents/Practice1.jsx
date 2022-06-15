import { useState } from "react";

export const Practice1 = () => {
    const [myName, setMyname] = useState("A Mansur Vali"); //using String
    const [person,setperson] = useState({                  //using Object
        fname :"Mansur",
        lname :"Vali",
        email :"amansurvali77@gmail.com",
    })
    const [Users,setUsers] = useState(["Mansur","Naveen","Santhosh","Sai","Sam"])  //using Array

    return(
        <div>
            <button onClick={()=>{setMyname("A MansurVali")}}>Display Name</button>
            <button onClick={()=>{setperson({fname:"Vali",lname:"A",email:"123@gmail.com"})}}>Display Object</button>
            <button onClick={()=>{setUsers(["Hi","Hello","Howareyou"])}}>Display Array</button>

            <h1>My Name is:{myName}</h1>

            <h5>{person.fname+" "}
            {person.lname+ " "}
            {person.email+" "}</h5>

            <ul>
                {Users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
            
        </div>
    )
}