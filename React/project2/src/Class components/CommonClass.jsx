import { Component } from "react";
import { Class1 } from "./Class1";
import { Class2 } from "./Class2";

export class CommonClass extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                {/* <Class1/> */}
                <Class2/>
            </div>
        )
    }
}