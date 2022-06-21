import { Component } from "react";

export default class Ccarts2 extends Component{
    render(){
        return(
            <div>
                <p>Ccarts2</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <ul>
                  {this.props.carts.map((user,i)=>{
                    return <li>{user.id}-{user.userId}-{user.date} {user.__v} </li>
                   })}
                </ul>
            </div>
        )
    }
}