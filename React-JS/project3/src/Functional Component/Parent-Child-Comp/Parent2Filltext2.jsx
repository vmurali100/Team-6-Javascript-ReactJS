import { useState } from "react"
import { Child2Filltext2 } from "./Child2Filltext2"

export const Parent2Filltext2 = () => {
    const [Alldetails,setAlldetails]=useState([])
    const SenddatatoChild=()=>{
               setAlldetails(fillltext2)
    }
    return(
        <div>
            <button onClick={SenddatatoChild}>SenddatafromChild</button>
            <Child2Filltext2 Alldetails={Alldetails}/>
        </div>
    )
}
var fillltext2=[
    {
        "id": 57,
        "email": "TIvanoski@convallis.ly",
        "username": "ESalguero",
        "password": "iFcgx"
    },
    {
        "id": 58,
        "email": "EPeyton@adipiscing.net",
        "username": "SCross",
        "password": "0DJI9"
    },
    {
        "id": 59,
        "email": "PVanessen@molestie.io",
        "username": "DStroll",
        "password": "ayU0i"
    },
    {
        "id": 60,
        "email": "LBerger@consequat.org",
        "username": "HKostiuk",
        "password": "m3qpE"
    },
    {
        "id": 61,
        "email": "EBreuninger@hendrerit.org",
        "username": "APlunkett",
        "password": "3cJQc"
    },
    {
        "id": 62,
        "email": "QPowers@ipsum.ly",
        "username": "NPlunkett",
        "password": "lnyR2"
    },
    {
        "id": 63,
        "email": "LWard@sollicitudin.org",
        "username": "CColeman",
        "password": "x70JG"
    },
    {
        "id": 64,
        "email": "SKieras@tempor.org",
        "username": "JClark",
        "password": "rVExw"
    },
    {
        "id": 65,
        "email": "LBruce@scelerisque.ly",
        "username": "JBettencourt",
        "password": "U9CvB"
    },
    {
        "id": 66,
        "email": "BJokisch@dolor.net",
        "username": "DPreston",
        "password": "xkGQP"
    }
]