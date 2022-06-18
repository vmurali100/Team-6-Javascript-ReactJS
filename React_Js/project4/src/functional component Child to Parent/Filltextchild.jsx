import { useState } from "react"

export const Filtextchild=({getData})=>{
    const[userdetails,setuserdetails]=useState(allusers)
    const sendDataToParent=()=>{
        getData(userdetails)
    }
    return(
        <div>
            <button onClick={sendDataToParent}>send data to parent</button>
        </div>
    )
}
var allusers=[
    {
        "fname": "Janelle",
        "lname": "Sidaway"
    },
    {
        "fname": "Hazel",
        "lname": "Blunt"
    },
    {
        "fname": "Lola",
        "lname": "Hadley"
    },
    {
        "fname": "Evan",
        "lname": "Givens"
    },
    {
        "fname": "Guadelupe",
        "lname": "Pfeifer"
    },
    {
        "fname": "Ryan",
        "lname": "Cooper"
    },
    {
        "fname": "Tania",
        "lname": "Solomon"
    },
    {
        "fname": "Kosta",
        "lname": "Hancock"
    },
    {
        "fname": "Larita",
        "lname": "Montgomery"
    },
    {
        "fname": "Dalton",
        "lname": "Flamme"
    }
]