import { Component } from "react";

export default class Comp2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname}-{this.props.person.lname}</p>
                <ul>
                    {this.props.users.map((user,i)=>{
                        return <li key={i}>{user.userId}-{user.id}-{user.title}-{user.body}</li>
                    })}
                </ul>
            </div>
        )
    }
}