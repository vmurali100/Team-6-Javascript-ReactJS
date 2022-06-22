import { useState } from "react"
import { Func1 } from "./Func1"
import { Func1and2 } from "./Func1and2"
import { Func3and4 } from "./Func3and4"
import { Func5and6 } from "./Func5and6"

export const CommonSibblings =()=>{
    const[]=useState()
    return(
        <div>
            {/* <Func1and2/> */}
            {/* <Func3and4/> */}
            <Func5and6/>
        </div>
    )
}