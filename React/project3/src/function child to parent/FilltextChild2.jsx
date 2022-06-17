import { useState } from "react"

export const FilltextChild2=({getData})=>{
   
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
        "fname": "Bernard",
        "lname": "Breiter"
    },
    {
        "fname": "Manish",
        "lname": "Flanagan"
    },
    {
        "fname": "Girish",
        "lname": "Covel"
    },
    {
        "fname": "Tony",
        "lname": "Arnold"
    },
    {
        "fname": "Tefera",
        "lname": "Coe"
    },
    {
        "fname": "Robin",
        "lname": "Clayton"
    },
    {
        "fname": "Cathleen",
        "lname": "Vasquez"
    },
    {
        "fname": "Bernadette",
        "lname": "Peterman"
    },
    {
        "fname": "Noby",
        "lname": "Masson"
    },
    {
        "fname": "Racquel",
        "lname": "Hippert"
    }
]