import React,{useState} from "react";
import Parent2 from"./Parent2"

const Child2=()=>{
    const[users,setusers]=useState([])

    const SendDataToParent=()=>{
        setusers(allusers)
    }
    return(
        <div>
            <button onClick={SendDataToParent}>SendData Child To Parent Components</button>

            <Parent2 users={users}/>
        </div>
    )
}
export default Child2

var allusers = [
    {
        "fname": "Cathleen",
        "lname": "Kelly"
    },
    {
        "fname": "Hector",
        "lname": "Rossi"
    },
    {
        "fname": "Luping",
        "lname": "Ptacek"
    },
    {
        "fname": "Nishal",
        "lname": "Hadley"
    },
    {
        "fname": "Yeqing",
        "lname": "Branscombe"
    }
   ]
