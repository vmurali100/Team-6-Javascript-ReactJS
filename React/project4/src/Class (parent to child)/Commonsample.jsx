import { Component } from "react";
import { Carts5 } from "./Carts5";
import { Parent1 } from "./Parent1";
import { Pfiltext2 } from "./Pfiltext2";
import { Pfiltext3 } from "./Pfiltext3";
import { Pfiltext4 } from "./Pfiltext4";

export class Commonsample extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                {/* <Parent1/> */}
                {/* <Pfiltext2/> */}
                {/* <Pfiltext3/> */}
                {/* <Pfiltext4/> */}
                <Carts5/>
            </div>
        )
    }
}