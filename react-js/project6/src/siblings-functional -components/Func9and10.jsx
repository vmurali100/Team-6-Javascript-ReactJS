import { useState } from "react"
import { Func10 } from "./Func10"

import { Func9 } from "./Func9"

export const Func9and10=()=>{
    const[village,setvillage]=useState("")
    const[district,setdistrict]=useState({})
    const[country,setcountry]=useState([])

    const sendvillage=(village)=>{
        setvillage(village)
    }
    const senddistrict=(district)=>{
        setdistrict(district)
    }
    const sendcountry=(country)=>{
        setcountry(country)
    }
    return(
        <div>
           
            <Func9 sendvillage={sendvillage} senddistrict={senddistrict} sendcountry={sendcountry} />
            <Func10 village={village} district={district} country={country} />
        </div>
    )
}