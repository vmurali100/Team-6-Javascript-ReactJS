import { useState } from "react"
import { FilltextChild2 } from "./FilltextChild2"

export const Filltext2=()=>{
    const[filltextusers,setfilltextusers]=useState(allusers)
    return(
        <div>
            <FilltextChild2  filltextDetails={filltextusers}/>
        </div>
    )
}
var allusers=[
    {
        "id": 149,
        "email": "VMalmfeldt@consectetur.net",
        "username": "HCocolla",
        "password": "ovIKZ"
    },
    {
        "id": 150,
        "email": "BBell@amet.com",
        "username": "JRodgers",
        "password": "ZjqCE"
    },
    {
        "id": 151,
        "email": "VAbrahams@eros.ly",
        "username": "MPartridge",
        "password": "pX43V"
    },
    {
        "id": 152,
        "email": "RPartridge@ipsum.ly",
        "username": "MKnowlton",
        "password": "g9X1j"
    },
    {
        "id": 153,
        "email": "LBillanti@porta.org",
        "username": "SKornation",
        "password": "bMgbm"
    },
    {
        "id": 154,
        "email": "JStrickland@odio.io",
        "username": "LMcinerney",
        "password": "lZmvH"
    },
    {
        "id": 155,
        "email": "ARobertd@vitae.org",
        "username": "MCummins",
        "password": "MIApm"
    },
    {
        "id": 156,
        "email": "AZavala@vel.io",
        "username": "JFisher",
        "password": "MjqOt"
    },
    {
        "id": 157,
        "email": "jHollis@quis.ly",
        "username": "RKunselman",
        "password": "EM6W2"
    },
    {
        "id": 158,
        "email": "BSaadeh@vel.net",
        "username": "RMarcks",
        "password": "P4TbY"
    }
]