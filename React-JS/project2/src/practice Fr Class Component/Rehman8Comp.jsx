import { Component } from "react";
import { Child8Comp } from "./Child8Comp";

export class Rehaman8Comp extends Component{
    constructor (props){
        super(props)
        this.state={
            users:["Aniruth","Akhil","Akash","Anu","Anil","Abishek"]
        }
    }
    render(){
        return(
            <div>
                <Child8Comp allusers={this.state.users}/>
            </div>
        )
    }
}