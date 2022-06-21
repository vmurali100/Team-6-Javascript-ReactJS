import { useState } from "react"
import Children4 from "./Children4"

const Parent4=()=>{
    const[filtext,setfiltext]=useState([])
    const sendtochild4=()=>{
        setfiltext(allfiltext)
    }
    return(
        <div>
            <button onClick={sendtochild4}>send to child4</button>
            <Children4 filtext={filtext}/>
        </div>
    )
}
export default Parent4
var allfiltext=[
    {
        "id": 1476,
        "email": "MBraswell@in.com",
        "username": "MSari",
        "password": "Zv2ZW"
    },
    {
        "id": 1477,
        "email": "DHopkins@hendrerit.org",
        "username": "DLund",
        "password": "rsVhG"
    },
    {
        "id": 1478,
        "email": "LKinnear@mi.gov",
        "username": "SRobertd",
        "password": "kUea2"
    },
    {
        "id": 1479,
        "email": "BClayton@massa.org",
        "username": "LNorthrop",
        "password": "c31kq"
    },
    {
        "id": 1480,
        "email": "DAviles@rutrum.io",
        "username": "CSwayngim",
        "password": "cHusW"
    },
    {
        "id": 1481,
        "email": "MDinkel@eget.gov",
        "username": "YOliver",
        "password": "kYl2H"
    },
    {
        "id": 1482,
        "email": "HEckhart@sollicitudin.io",
        "username": "ADeskins",
        "password": "OeUSa"
    },
    {
        "id": 1483,
        "email": "AGlean@pulvinar.com",
        "username": "LNutter",
        "password": "2PZtI"
    },
    {
        "id": 1484,
        "email": "GSobel@id.ly",
        "username": "JSwift",
        "password": "kVR8j"
    },
    {
        "id": 1485,
        "email": "NShebish@libero.io",
        "username": "ADupont",
        "password": "vgdcn"
    }
]