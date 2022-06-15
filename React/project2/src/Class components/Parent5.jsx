import { Component } from "react";
import { Pchild5 } from "./Pchild5";

export class Parent5 extends Component{
    constructor(){
        super()
        this.state={
            users:["manisha","mansi","harika","harikamal"]
        }
    }
    render(){
        return(
            <div>
                <Pchild5 allNames={this.state.users}/>
            </div>
        )
    }
}