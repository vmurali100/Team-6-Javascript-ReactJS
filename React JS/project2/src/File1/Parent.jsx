import { Component } from "react";
import { Child } from "./Child";

export class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["roxe","sam","alice"]
        }
    }
    render(){
        return (
            <div>
              <Child all={this.state.users}/>  
            </div>
        )
    }
}