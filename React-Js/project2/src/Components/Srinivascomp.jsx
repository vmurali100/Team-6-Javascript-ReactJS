const { Component } = require("react");

export class Srinivascomp extends Component{
    constructor(){
        super()
        this.state={
            myname:"Srividya",
            person:{
                fname:"Srinivas",
                lname:"Srividya"
            },
            users:["Vidya","Vasu","Manikanta"]
        };
    }
    render(){
        return <div>
            <h3>Hello -{this.state.myname}</h3>
            <p>{this.state.person.fname}-{this.state.person.lname}</p>
            <h3>Hello From One more Heading</h3>
            <ul>{this.state.users.map(function(user){
                return <li>{user}</li>
            })}</ul>
            <img src="./assets/flower.jpeg" alt="" />
        </div>
    }
}