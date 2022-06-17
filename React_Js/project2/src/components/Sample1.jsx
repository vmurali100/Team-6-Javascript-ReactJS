import { Component } from "react";

export class Sample1 extends Component{
    constructor(){
        super();
        console.log(this)
        this.state={
            myname:"padmaja",
            person:{
                fname:"M",
                lname:"Padmaja"
            },
            users:["ram","sam","sita"]
        }
    }
    render(){
        return <div>
            <h2>Hello - {this.state.myname}</h2>
            <p>{this.state.person.fname} - {this.state.person.lname}</p>
            <h2>hiii Sample1</h2>
            <ul>
                {this.state.users.map(function (user){
                    return<li>{user}</li>
                })}
            </ul>
            <img src="./assets/flower1.jpg" alt=""></img>
        </div>
    }
}