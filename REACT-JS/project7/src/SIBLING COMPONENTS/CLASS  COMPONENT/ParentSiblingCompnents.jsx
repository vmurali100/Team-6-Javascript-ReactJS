import React,{useState} from "react";
import comp1 from "./Comp1";
import Comp2 from "./Comp2";

function ParentClassSiblingComponents(){
    const[Meassage,setMessage]=useState("");
    const[person,setPerson]=useState({})
    const[users,setusers]=useState([])

    const sendMessage=(msg)=>{
        setMessage(msg)
    }
    const sendPerson=(person)=>{
        setPerson(person)
    }
    const sendusers=(usersInfo)=>{
        setusers(usersInfo)
    }
    return(
        <div className="APP">
            <comp1 sendMessage={sendMessage}sendPerson={sendPerson}sendusers={sendusers}/>
            <Comp2 Message={Meassage}person={person}users={users}/>
        </div>
    )
}
export default ParentClassSiblingComponents