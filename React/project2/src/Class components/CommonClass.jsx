import { Component } from "react";
import { DeepthiFunc } from "../functional component/DeepthiFunc";
import { Class1 } from "./Class1";
import { Class2 } from "./Class2";
import { Parent10 } from "./Parent10";
import { Parent3 } from "./Parent3";
import { Parent4 } from "./Parent4";
import { Parent5 } from "./Parent5";
import { Parent6 } from "./Parent6";
import { Parent7 } from "./Parent7";
import { Parent8 } from "./Parent8";
import { Parent9 } from "./Parent9";
import { Pchild5 } from "./Pchild5";

export class CommonClass extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                {/* <Class1/> */}
                {/* <Class2/> */}
                {/* <Parent3/> */}
                {/* <Parent4/> */}
               {/* <Parent5/> */}
               {/* <Parent6/> */}
               <Parent7/>
               {/* <Parent8/> */}
            {/* <Parent9/> */}
            {/* <Parent10/> */}
            </div>
        )
    }
}