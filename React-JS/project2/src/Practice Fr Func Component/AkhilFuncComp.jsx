import React,{useState} from "react"
export const AkhilFuncComp = () => {

    const [myName,setMyname]=useState("Siva")
    
    const [person,setPerson]=useState({
        fname:"John",
        lname:"Cena",
        email:"john@gamil.com",
        city:"America"
    });

    const [users,setusers] = useState(["Praksh","Aniruth","Yuvan","Atlee","Lokesh"])
    return (
        <div>
            <button onClick={()=>{setMyname("Sivasankar")}}>ChangeMyName</button>
            <button onClick={()=>{setPerson({fname:"Dhanush",lname:"KP",email:"KpDhnaush@gmail.com",city:"Chennai"})}}>Change Person Date</button>
            <button onClick={()=>{setusers(["mani","Chinnoda","Harish","Surya","Karthik","Sanju"])}}>Display Change Users </button>


            <h4>My Name is :{myName}</h4>

            <p>{person.fname}-{person.lname}-{person.email}-{person.city}</p>

            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        </div>
    )
}