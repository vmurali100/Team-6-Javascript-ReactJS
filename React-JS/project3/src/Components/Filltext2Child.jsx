import { useState } from "react"

export const Filltext2Child =({getData})=>{
    const [UserDetails,setUserDetails]=useState(allusers)
    const sendDataToParent=()=>{
        getData(UserDetails)
    }
    return(
        <div>
             <button onClick={sendDataToParent}> Send Data to Parent</button>
        </div>
    )
}
var allusers=[
    {
        "id": 159,
        "email": "SMosher@vestibulum.ly",
        "username": "ZRoy",
        "password": "tnpWc"
    },
    {
        "id": 160,
        "email": "APierce@placerat.gov",
        "username": "DBryson",
        "password": "A5oj9"
    },
    {
        "id": 161,
        "email": "IMeyer@pulvinar.ly",
        "username": "AMiyaki",
        "password": "0VpfI"
    },
    {
        "id": 162,
        "email": "BClifford@malesuada.com",
        "username": "BReyach",
        "password": "6tI3s"
    },
    {
        "id": 163,
        "email": "SPeck@molestie.ly",
        "username": "EHippert",
        "password": "Iqyv9"
    },
    {
        "id": 164,
        "email": "AMontilla@tincidunt.com",
        "username": "JBarge",
        "password": "GDAwJ"
    },
    {
        "id": 165,
        "email": "SDover@sit.io",
        "username": "RBuikema",
        "password": "tZoO2"
    },
    {
        "id": 166,
        "email": "SDerp@egestas.gov",
        "username": "CZiegler",
        "password": "L4OFs"
    },
    {
        "id": 167,
        "email": "SPrellwitz@consequat.gov",
        "username": "RChacon",
        "password": "z19vz"
    },
    {
        "id": 168,
        "email": "VBolton@nec.net",
        "username": "TReyach",
        "password": "oa5xd"
    }
]