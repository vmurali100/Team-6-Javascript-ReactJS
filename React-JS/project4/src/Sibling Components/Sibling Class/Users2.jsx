import { Component } from "react";

export default class Users2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.user.id}-{this.props.user.name}</p>
                <ul>
                    {this.props.alluser.map((use,i)=>{
                        return <li key={i}>{use.id}-{use.name}-{use.username}-{use.email}-{use.phone}-{use.website}</li>
                    })}
                </ul>
            </div>
        )
    }
}