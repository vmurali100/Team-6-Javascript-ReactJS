import { Component } from "react";
import { Child1 } from "./Child1";

export class Parent1 extends Component{
    constructor(props){
        super(props)
        this.state={
            users:["apple","greap","mango"]
        }
    }
    render(){
        return (
            <div>
              <Child1 all={this.state.users}/>  
            </div>
        )
    }
}