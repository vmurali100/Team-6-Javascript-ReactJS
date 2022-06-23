import { useState } from "react"

export const Child1Filltext =({getdata})=>{
    const[userdetails,setuserDetails]=useState(Allusers)
    const SendDataToParent=()=>{
        getdata(userdetails)
    }
    return (
        <div>
            <button onClick={SendDataToParent}>SendDataToParent</button>
        </div>
    )
}
var Allusers=[
    {
        "id": 37,
        "email": "DVrtis@pretium.io",
        "username": "MLiu",
        "password": "BawIn"
    },
    {
        "id": 38,
        "email": "SHardy@lacus.ly",
        "username": "KDuffy",
        "password": "GhkHg"
    },
    {
        "id": 39,
        "email": "LWassum@mattis.org",
        "username": "KGalvez",
        "password": "veQRG"
    },
    {
        "id": 40,
        "email": "MKane@sed.com",
        "username": "PNeff",
        "password": "hfS8g"
    },
    {
        "id": 41,
        "email": "EBeonde@sollicitudin.io",
        "username": "LSzewczuk",
        "password": "9EOG9"
    },
    {
        "id": 42,
        "email": "TLucas@et.gov",
        "username": "NPhuan",
        "password": "M1wXA"
    },
    {
        "id": 43,
        "email": "JPomykala@amet.org",
        "username": "RMills",
        "password": "h2vwu"
    },
    {
        "id": 44,
        "email": "FNixon@morbi.io",
        "username": "WDowning",
        "password": "ivt1r"
    },
    {
        "id": 45,
        "email": "GPalmer@sed.com",
        "username": "RJun",
        "password": "OJR4J"
    },
    {
        "id": 46,
        "email": "SGerela@suspendisse.com",
        "username": "CCrete",
        "password": "tmxDp"
    }
]