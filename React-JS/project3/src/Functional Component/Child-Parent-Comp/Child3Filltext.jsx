import { useState } from "react"

export const Child3Filltext =({getdata})=>{
    const[userDetails,setuserDetails]=useState(allusers)
    const SenddataToParent=()=>{
        getdata(userDetails)
    }
    return(
        <div>
            <button onClick={SenddataToParent}>SendDatatoParent</button>
        </div>
    )
}
var allusers=[
    {
        "fname": "Sheba",
        "lname": "Moffett"
    },
    {
        "fname": "Leela",
        "lname": "Bartlett"
    },
    {
        "fname": "Naeem",
        "lname": "Bottone"
    },
    {
        "fname": "Claire",
        "lname": "Pereyra"
    },
    {
        "fname": "Bill",
        "lname": "Salval"
    },
    {
        "fname": "Luis",
        "lname": "Trrenkler"
    },
    {
        "fname": "Courtney",
        "lname": "Katz"
    },
    {
        "fname": "Larita",
        "lname": "Reggio"
    },
    {
        "fname": "Tom",
        "lname": "Betts"
    },
    {
        "fname": "Krista",
        "lname": "Ghormley"
    }
]