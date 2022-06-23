import { useState } from "react"

export const Prettyy1=({sendmessage,message,sendperson,person,sendprettyy,prettyy})=>{
    const[]=useState(
        message="hello pretty",
        person={
            fname:"angel",
            lname:"asirvathan"
        },
        prettyy=allpretty,
    )
    return(
        <div>
            <button onClick={()=>{sendmessage(message)}}>send message</button>
            <button onClick={()=>{sendperson(person)}}>send person</button>
            <button onClick={()=>{sendprettyy(prettyy)}}>send pretty</button>
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