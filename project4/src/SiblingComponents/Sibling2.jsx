import { Component } from "react";

export default class Sibling2 extends Component{
    render(){
        return(
            <div>
                <p>Component 2</p>
                <p> {this.props.message}</p>
                <p>{this.props.newperson.fname}-{this.props.newperson.lname}</p>
                <ul>
                    {this.props.users.map((user,i)=>{
                        return <li key={i}>{user.title}</li>
                    })}
                </ul>
               </div>
        )
    }
}