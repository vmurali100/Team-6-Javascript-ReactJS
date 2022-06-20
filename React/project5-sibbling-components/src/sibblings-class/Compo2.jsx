import { Component } from "react";

export class Compo2 extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div>
                <p>comp B</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <ul>
                    {this.props.users.map((user,i)=>{
                        return <li key={i}>{user.fname} {user.lname}</li>
                    })}
                </ul>
            </div>
        )
    }
}