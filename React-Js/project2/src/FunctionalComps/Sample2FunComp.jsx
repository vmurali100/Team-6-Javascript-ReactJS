import React,{useState} from "react"
export const Sample2FunComp = () =>{

    const [myName, setmyName]=useState("Shiva")
    const [person, setPerson]=useState({
        fname: "Mamatha",
        lname: "Anusha",
        email: "mamathaanusha@gmail.com"
    })
    const [users, setUsers]=useState(["anu","sudha","Sai","Charan"])
    return(
        <div>
            <button onClick={()=>{setmyName("ravi")}}>Display my Name</button>

            <button onClick={()=>{setPerson({fname:"Kiran",lname:"Varun",email:"thammineedis@gamil.com"})}}>Display person Name</button>

            <button onClick={()=>{setUsers(["vidya","vasu","Charan"])}}>Displya User Name</button>

            <h2>My Name is : {myName}</h2>

            <p>{person.fname}-{person.lname}-{person.email}</p>
            
            <ul>{users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}</ul>
        </div>
    )
}