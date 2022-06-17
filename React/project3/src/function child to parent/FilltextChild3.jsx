import { useState } from "react"

export const FilltextChild3=({getData})=>{
    const[filltextUserDetails,setfilltextUserDetails]=useState(allusers)
    const sendDataToParent=()=>{
        getData(filltextUserDetails)
    }
    return(
        <div>
            <button onClick={sendDataToParent}>send data to parent</button>
        </div>
    )
}
var allusers=[
    {
        "id": 33,
        "email": "DCary@malesuada.com",
        "username": "THardy",
        "password": "GPcmO"
    },
    {
        "id": 34,
        "email": "ZBlalock@massa.ly",
        "username": "LPlourde",
        "password": "Re1se"
    },
    {
        "id": 35,
        "email": "GEmerson@etiam.gov",
        "username": "MWolfgram",
        "password": "tN58M"
    },
    {
        "id": 36,
        "email": "CChandrasekahran@convallis.org",
        "username": "NBelcher",
        "password": "Qr5iN"
    },
    {
        "id": 37,
        "email": "JAviles@magna.net",
        "username": "EBroas",
        "password": "qdyFh"
    },
    {
        "id": 38,
        "email": "HPenning@pharetra.net",
        "username": "LKasnow",
        "password": "HTGDY"
    },
    {
        "id": 39,
        "email": "VSnow@rutrum.com",
        "username": "HDavid",
        "password": "EljVT"
    },
    {
        "id": 40,
        "email": "YWinder@in.com",
        "username": "FGaby",
        "password": "Evj1R"
    },
    {
        "id": 41,
        "email": "BLyn@eget.io",
        "username": "KCulp",
        "password": "ddvmt"
    },
    {
        "id": 42,
        "email": "TAxe@elit.net",
        "username": "ETheobald",
        "password": "AFBek"
    }
]