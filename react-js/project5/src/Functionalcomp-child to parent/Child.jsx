import { useState } from "react"

const Child=({sendchild})=>{
    const[filtex1,setfiltext1]=useState(allfiltext1)
    const sendfilt1toparent=()=>{
        sendchild(filtex1)
    }
    return(
        <div>
            <button onClick={sendfilt1toparent}>send filtext1 to parent</button>
        </div>
    )
}
export default Child
var allfiltext1=[
    {
        "id": 2551,
        "email": "NRose@aliquam.com",
        "username": "KHayes",
        "password": "skoeR"
    },
    {
        "id": 2552,
        "email": "ABean@amet.com",
        "username": "VFlege",
        "password": "tzLUz"
    },
    {
        "id": 2553,
        "email": "JMulvehill@lacus.gov",
        "username": "SLevy",
        "password": "7hjLg"
    },
    {
        "id": 2554,
        "email": "SDoerfler@ante.io",
        "username": "ADiriwachter",
        "password": "4VFUE"
    },
    {
        "id": 2555,
        "email": "KJensen@suspendisse.ly",
        "username": "DEubanks",
        "password": "aMeAl"
    },
    {
        "id": 2556,
        "email": "CSweet@tincidunt.gov",
        "username": "CMcnulty",
        "password": "5Tg4N"
    },
    {
        "id": 2557,
        "email": "DFouts@ipsum.io",
        "username": "KAbrahams",
        "password": "YqRTF"
    },
    {
        "id": 2558,
        "email": "TStallings@tortor.net",
        "username": "KRastogi",
        "password": "JR7zw"
    },
    {
        "id": 2559,
        "email": "SBrenner@hendrerit.org",
        "username": "JCosta",
        "password": "t9sGA"
    },
    {
        "id": 2560,
        "email": "FSchnell@pulvinar.gov",
        "username": "KMaclatchie",
        "password": "1djUX"
    }
]