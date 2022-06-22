import { Component } from "react";
import { Child2 } from "./Child2";

export class Parent2 extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["car","bike","bicycle"]
        }
    }
    render(){
        return (
            <div>
              <Child2 all={this.state.users}/>  
            </div>
        )
    }
}