import { Component } from "react";
import { Child3 } from "./Child3";

export class Parent3 extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["jet","rocket","plane"]
        }
    }
    render(){
        return (
            <div>
              <Child3 all={this.state.users}/>  
            </div>
        )
    }
}