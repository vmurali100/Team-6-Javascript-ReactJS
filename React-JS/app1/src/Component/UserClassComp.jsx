import { Component } from "react";

export class User extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            users:[]
        }
    }

    changemessage=()=>{
        this.setState({
            message:"hello from event handler"
        })
    }

    changeperson=()=>{
        this.setState({person:{fname:"akal" ,lname:"sree"}})
    }

    displayusers=()=>{
        this.setState({users:["akal","sree","snega","bottal","vathu"]})
    }
    render(){
        return <div>
            <h1>String</h1>
            <button onClick={this.changemessage}>set message</button>
            <p>user message is :{this.state.message}</p>
            <hr/>
            <h1>Object</h1>
            <button onClick={this.changeperson}>change person</button>
            <p>First Name :{this.state.person.fname}</p>
            <p>Last Name :{this.state.person.lname}</p>
            <hr/>
            <h1>Array</h1>
            <button onClick={this.displayusers}>display user</button>
            {this.state.users.map((users)=>{
                return <p>{users}</p>
            })}
        </div>
    }
}