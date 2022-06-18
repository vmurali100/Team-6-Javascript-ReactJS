import { useState } from "react"

export const Filltextchild3=({getData})=>{
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
        "id": 17,
        "email": "JEschenbacher@aenean.io",
        "username": "NPrellwitz",
        "password": "VXipi"
    },
    {
        "id": 18,
        "email": "CReitz@dolor.ly",
        "username": "JErica",
        "password": "HVJMG"
    },
    {
        "id": 19,
        "email": "RUsgiveaway@quis.io",
        "username": "TCompton",
        "password": "CHYqY"
    },
    {
        "id": 20,
        "email": "AGarbe@turpis.com",
        "username": "AEuaparadorn",
        "password": "buNfq"
    },
    {
        "id": 21,
        "email": "RPlanty@dolor.ly",
        "username": "HRoman",
        "password": "bIIOZ"
    },
    {
        "id": 22,
        "email": "SKieras@hendrerit.gov",
        "username": "RCorson",
        "password": "NpOus"
    },
    {
        "id": 23,
        "email": "NVanburen@consequat.org",
        "username": "RWarren",
        "password": "50Wpu"
    },
    {
        "id": 24,
        "email": "RSoto@nec.gov",
        "username": "MEasterly",
        "password": "ZHtUR"
    },
    {
        "id": 25,
        "email": "BKensmoe@orci.org",
        "username": "FCoopr",
        "password": "KFQvi"
    },
    {
        "id": 26,
        "email": "ANabors@mi.ly",
        "username": "LWalters",
        "password": "dKAaC"
    }
]