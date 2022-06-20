import { useState } from "react"
import PrettytrueDiv from "./PrettytrueDiv"
import PrettyTable from "./PrettytrueTable"

const Prettytrue =()=>{
    const[pretty,setpretty]=useState(allpretty)
    return(
        <div>
            <PrettytrueDiv pretty={pretty}/>
            <PrettyTable pretty={pretty}/>
        </div>
    )
}
export default Prettytrue
var allpretty=[
    {
        "id": 91,
        "email": "SBroas@sagittis.org",
        "username": "VGlynn",
        "password": "m7cgr"
    },
    {
        "id": 92,
        "email": "FOckerman@at.ly",
        "username": "WHerrick",
        "password": "Sy7KV"
    },
    {
        "id": 93,
        "email": "LWard@turpis.com",
        "username": "AHellman",
        "password": "oruUz"
    },
    {
        "id": 94,
        "email": "UFruscione@massa.ly",
        "username": "JVera",
        "password": "QwdJT"
    },
    {
        "id": 95,
        "email": "DUser@pharetra.io",
        "username": "JSessa",
        "password": "9vqKj"
    },
    {
        "id": 96,
        "email": "BMccarthy@sit.net",
        "username": "VHutchison",
        "password": "pgsHp"
    },
    {
        "id": 97,
        "email": "SSteele@magna.net",
        "username": "TRider",
        "password": "SU4GJ"
    },
    {
        "id": 98,
        "email": "FGleason@lacus.net",
        "username": "LYach",
        "password": "u1Rup"
    },
    {
        "id": 99,
        "email": "ACalliste@aliquam.ly",
        "username": "DRoth",
        "password": "wGJuc"
    },
    {
        "id": 100,
        "email": "OWalstead@augue.io",
        "username": "DTatum",
        "password": "Vl6nF"
    }
]