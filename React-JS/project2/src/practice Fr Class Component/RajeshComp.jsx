import { Component } from "react";
import { Child1Comp } from "./Child1Comp";

export class RajeshComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            users :["Raju","SAi","Dheena","Rehaman","Virat","Haris"]
        }
    }
    render(){
        return (
            <div>
            <Child1Comp AllUsers={this.state.users}/>
        </div>
        )       
       
    }
}