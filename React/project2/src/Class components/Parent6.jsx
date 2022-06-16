import { Component } from "react";
import { Pchild6 } from "./Pchild6";

export class Parent6 extends Component{
    constructor(){
        super()
        this.state={
            name:"Elon Musk",
            person:{
                fname:"Radha",
                lname:"Boppana"
            },
            fruits:["apple","mango","banana","custard apple"]
        }
    }
    render(){
        return(
            <div>
                <Pchild6 allnames={this.state.name}
                allpersons={this.state.person}
                allfruits={this.state.fruits}/>
            </div>
        )
    }
}