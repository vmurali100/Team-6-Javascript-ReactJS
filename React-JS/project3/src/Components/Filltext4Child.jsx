import { useState } from "react"

export const Filltext4Child =({getdata})=>{
    const [userdata,setuserdata]=useState(Allusers)
   
    const senddata=()=>{
        getdata(userdata)
    }
    return (
        <div>
           <button onClick={senddata}>send data to parent</button>
        </div>
    )
}
var Allusers=[
    {
        "fname": "Nerissa",
        "lname": "Bogenschneider"
    },
    {
        "fname": "Bartley",
        "lname": "Collier"
    },
    {
        "fname": "Shanae",
        "lname": "Spencer"
    },
    {
        "fname": "Heidi",
        "lname": "Welld"
    },
    {
        "fname": "Emced",
        "lname": "Dority"
    },
    {
        "fname": "Latrese",
        "lname": "Griebel"
    },
    {
        "fname": "Saim",
        "lname": "Deliu"
    },
    {
        "fname": "Marlon",
        "lname": "Wimmer"
    },
    {
        "fname": "Triandi",
        "lname": "Schnell"
    },
    {
        "fname": "Marlissa",
        "lname": "Callison"
    }
]