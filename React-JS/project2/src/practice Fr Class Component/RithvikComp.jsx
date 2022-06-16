import { Component } from "react";
import { Child1Comp } from "./Child1Comp";
import { Child2Comp } from "./Child2Comp";

export class RithvikComp extends Component {
    constructor(){
        super()
        this.state ={
             users:["Sai","Kiran","Aruna","Lithisha","Sireesha","Sujatha"]
        }
    }
    render(){
        return (
            <div>
               <Child2Comp allusers={this.state.users}/>
            </div>
        )
    }
}