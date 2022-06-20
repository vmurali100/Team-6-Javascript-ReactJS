import { Component } from "react";
import { Albums5 } from "./Albums5";
import { Filltext2 } from "./Filltext2";
import { Filltext3 } from "./Filltext3";
import { Posts1 } from "./Posts1";
import { Todos4 } from "./Todos4";

export class CommonClass extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                {/* <Posts1/> */}
                {/* <Filltext2/> */}
                {/* <Filltext3/> */}
                {/* <Todos4/> */}
               <Albums5/>

            </div>
        )
    }
}