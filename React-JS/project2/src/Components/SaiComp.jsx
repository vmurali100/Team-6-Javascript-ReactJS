import { Component } from "react";

export class SaiComp extends Component {
    constructor() {
        super()
        this.state={
            myName:"Sai",
            person:{
                fName:"Sai",
                lName:"Kiran"            
            }, 
            users:["Ram","Chran","Tej","Virat","Kohli"]           
        }       
    }
    render() {
        return <div>
            <h3>Hello-{this.state.myName}</h3>
            <h3>{this.state.person.fName}-{this.state.person.lName}</h3>
            <ul>
                {this.state.users.map(function(user){
                     return <li>{user}</li>
                })}
            </ul>
            <h3>Hello from One More Heading</h3>
            <img src="./asset/myimages.jpg" alt="" />
        </div>
    }
}