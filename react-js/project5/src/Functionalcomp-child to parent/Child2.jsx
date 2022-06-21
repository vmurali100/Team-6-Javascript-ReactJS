import { useState } from "react"

const Child2=({sendinfo})=>{
    const[fildid,setfiltid]=useState(allfiltid)
    const sendtoparent=()=>{
         sendinfo(fildid)
    }
    return(
        <div>
            <button onClick={sendtoparent}>send to parent</button>
        </div>
    )
}
export default Child2
var allfiltid=[
    {
        "fname": "Rashad",
        "lname": "Dehaven"
    },
    {
        "fname": "Noor",
        "lname": "Vinsant"
    },
    {
        "fname": "Melissa",
        "lname": "Grubbs"
    },
    {
        "fname": "Linda",
        "lname": "Sprague"
    },
    {
        "fname": "Gia",
        "lname": "Slate"
    },
    {
        "fname": "Shannon",
        "lname": "Grant"
    },
    {
        "fname": "Teresa",
        "lname": "Sommers"
    },
    {
        "fname": "Ludmila",
        "lname": "Waldman"
    },
    {
        "fname": "RoMeka",
        "lname": "Templeman"
    },
    {
        "fname": "Yiping",
        "lname": "Maas"
    }
]