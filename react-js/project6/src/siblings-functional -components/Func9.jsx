import { useState } from "react"

export const Func9=({sendvillage,village,senddistrict,district,sendcountry,country})=>{
    const[]=useState(
        village="perumallapalli",
        district={
            fname:"vellore",
            lname:"dist",
        },
        country=["india","america","chaina","malaysia"]
    )
    return(
        <div>
            <button onClick={()=>{sendvillage(village)}}>send village</button>
            <button onClick={()=>{senddistrict(district)}}>send district</button>
            <button onClick={()=>{sendcountry(country)}}>send country</button>
        </div>
    )
}