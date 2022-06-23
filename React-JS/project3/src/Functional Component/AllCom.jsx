import { useState } from "react"
import { Child1Posts } from "./Child-Parent-Comp/Child1Posts"
import { Parent1Filltext } from "./Child-Parent-Comp/Parent1Filltext"
import { Parent1Post } from "./Child-Parent-Comp/Parent1Post"
import { Parent2Filltext } from "./Child-Parent-Comp/Parent2Filltext"
import { Parent3Filltext } from "./Child-Parent-Comp/Parent3Filltext"
import { Parent4Coment } from "./Child-Parent-Comp/Parent4Coment"
import { Parent1Posts } from "./Parent-Child-Comp/Parent1posts"
import { Parent2Filltext2 } from "./Parent-Child-Comp/Parent2Filltext2"
import { Parent3todos } from "./Parent-Child-Comp/Parent3todos"
import { Parent4Comments } from "./Parent-Child-Comp/Parent4Comments"
import { Parent5FilltextUser } from "./Parent-Child-Comp/Parent5FilltextUser"


export const AllCom = ()=>{
    const[]=useState()
    return(
        <div>
            {/* <Parent1Post/> */}
            {/* <Parent1Filltext/> */}
            {/* <Parent2Filltext/> */}
            {/* <Parent3Filltext/> */}
            {/* <Parent4Coment/> */}
            {/* <Parent1Posts/> */}
            {/* <Parent2Filltext2/> */}
            {/* <Parent3todos/> */}
            {/* <Parent4Comments/> */}
            <Parent5FilltextUser/>
            
        </div>
    )
}