import React,{Component} from "react";

export default class Comp2 extends Component{

    render(){
        return(
            <div>
                <p>Component2</p>
                <p>{this.props.Message}</p>
                <p>{this.props.person.fname}{this.props.person.lname}</p>
                <ul>
                    {this.props.users.map((users,i)=>{
                        return<li key={i}>{users.fname}-{users.lname}</li>

                    })}
                </ul>
            </div>
        )
    }
}