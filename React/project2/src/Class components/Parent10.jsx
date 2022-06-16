import { Component } from "react";
import { Pchild10} from "./Pchild10";

export class Parent10 extends Component{
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
                <Pchild10 allnames={this.state.name}
                allpersons={this.state.person}
                allfruits={this.state.fruits}/>
            </div>
        )
    }
}