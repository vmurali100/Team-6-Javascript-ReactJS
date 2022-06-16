import { Component } from "react";

export class Sam1 extends Component{
    constructor(){
        super()
        this.state={
            myname:"akalya.k",
            person:{
                fname:"jaishree",
                lname:"krishnamoorthy"
            },
            users:["sam","poovilzhi","kayal","azhagu"]
        }
    }
    render(){
        return (
            <div>
            <h1>hello-{this.state.myname}</h1>
            <h2>{this.state.person.fname}-{this.state.person.lname}</h2>
            <ul>
                {this.state.users.map(function(users){
                   return <li>{users}</li>
                })}
            </ul>
        </div>
        )
    }
}