import { Component } from "react";
import { Child1 } from "./Child1";

export class Class1 extends Component{
    constructor(){
        super()
        this.state={
            users:["vishnu","deepthi","jyothi","mahitha"]
        }
    }
    render(){
        return(
            <div>
                <Child1 allusers={this.state.users}/>
            </div>
        )
    }
}