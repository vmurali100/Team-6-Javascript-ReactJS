import { Component } from "react";
import { Child1 } from "./Child1";

export class Class1 extends Component{
    constructor(){
        super()
        this.state={
            users:["vishnu","deepthi","jyothi","mahitha"],
            person:{
                fname:"hari deepthi",
                lname:"boppana"
            },
            myName:"deepthi"
        }
    }
    render(){
        return(
            <div>
            <Child1 allusers={this.state.users}
            allpersons={this.state.person}
            allusername={this.state.myName}/>  
        {/* <Child1 /> */}
              {/* allpersons={this.state.person}/>  */}
            </div>
        )
    }
}