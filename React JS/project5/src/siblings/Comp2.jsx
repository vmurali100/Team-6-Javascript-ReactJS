import { Component } from "react";

export class Comp2 extends Component{
    render(){
        return <div>
            <h1>{this.props.message}</h1>
            <h2>{this.props.person.fname} {this.props.lname}</h2>
            <ul>
                {this.props.users.map((user)=>{
                    return <li>{user}</li>
                })}
            </ul>
        </div>
    }
}