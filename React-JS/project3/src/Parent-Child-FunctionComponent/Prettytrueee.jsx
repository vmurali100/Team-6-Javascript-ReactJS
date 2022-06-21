import { useState } from "react"
import { Prettytruechilddd } from "./Prettytruechilddd"

export const Prettytrueee=()=>{
    const[prettydetails,setprettydetails]=useState([])
    const sendpretty=()=>{
        setprettydetails(allpretty)
    }
    return(
     <div>
           <button onClick={sendpretty}>click to the pretty</button>
        <Prettytruechilddd prettydetails={prettydetails}/>
     </div>
    )
}
var allpretty=[
    {
        "id": 1,
        "email": "MCasariego@nullam.io",
        "username": "AMeng",
        "password": "GaWoO"
    },
    {
        "id": 2,
        "email": "WGivens@eros.gov",
        "username": "EChamberlain",
        "password": "nD9S9"
    },
    {
        "id": 3,
        "email": "NCrosswhite@ac.org",
        "username": "JUlvestad",
        "password": "PRgkg"
    },
    {
        "id": 4,
        "email": "CDalton@aliquam.io",
        "username": "BNolan",
        "password": "3uKEL"
    },
    {
        "id": 5,
        "email": "PKomppa@augue.ly",
        "username": "JSundell",
        "password": "EGkgk"
    },
    {
        "id": 6,
        "email": "JJaques@risus.io",
        "username": "MSchoenbauer",
        "password": "r6lKp"
    },
    {
        "id": 7,
        "email": "LBurkes@sed.net",
        "username": "ULester",
        "password": "1FNSm"
    },
    {
        "id": 8,
        "email": "BBelcher@lacus.ly",
        "username": "SSwanson",
        "password": "QwBv0"
    },
    {
        "id": 9,
        "email": "ABaker@nec.net",
        "username": "LButterfield",
        "password": "EMpAx"
    },
    {
        "id": 10,
        "email": "WHaglund@aliquam.com",
        "username": "MValenzano",
        "password": "pzyXN"
    }
]