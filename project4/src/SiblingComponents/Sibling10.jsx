import { Component } from "react";

export default class Sibling10 extends Component{
    render(){
        const {messag,email,password}=this.props;
        return(
            <div>
                <h1>{messag}</h1>
                <p>{email.name}{email.body}</p>
                <ul>
                 {password.map((pas,i)=>{
                    return <li key={i}>{pas.id}</li>
                 })}
                </ul>
            </div>
        )
    }
}