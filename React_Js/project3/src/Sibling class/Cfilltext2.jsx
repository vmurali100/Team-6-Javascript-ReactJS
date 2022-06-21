import { Component } from "react";

export default class Cfilltext2 extends Component{
    render(){
        return(
            <div>
                <p>Component2</p>
                <p>{this.props.message}</p>
                <p>{this.props.newperson.fname} {this.props.newperson.lname}</p>
                <ul>
                  {this.props.users.map((user,i)=>{
                    return <li>{user.fname}-{user.lname}-{user.tel} {user.address} {user.city} {user.state} {user.zip}</li>
                   })}
                </ul>
            </div>
        )
    }
}