import { useState } from "react"
import { Filltext2 } from "./Filltext2"
import { Filltext3 } from "./Filltext3"
import { Fposts4 } from "./Fposts4"
import { Parent1 } from "./Parent1"

export const CommonClass = () => {
    const [] = useState()
    return (
        <div>
            {/* <Parent1/> */}
            {/* <Filltext2 /> */}
            {/* <Filltext3/> */}
            <Fposts4/>
        </div>
    )
}