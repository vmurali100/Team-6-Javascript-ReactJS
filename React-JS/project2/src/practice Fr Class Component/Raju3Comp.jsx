import { Component } from "react";
import { Child3Comp } from "./child3Comp";

export class Raju3Comp extends Component{
    constructor(props){
        super(props)
        this.state ={
          users:["Tarun","Akhil","muni","sai","Nani","Surya","Prabhu","Sathya"]
        }
    }
    render (){
        return (
            <div>
                <Child3Comp allusers={this.state.users}/>
            </div>
        )
    }
}