const { Component } = require("react");

 export class DeepthiComp extends Component{
    constructor(){
        super();
        console.log(this)
        this.state={
            myName:"deepthi",
            person:{
                fname:"hari deepthi",
                lname:"boppana"
            },
            users:["deepthi","vishnu","jyothi","mahitha"]
        }
    }
    render(){
        return <div>
            <p>hello-{this.state.myName}</p>
            <h2>{this.state.person.fname}{this.state.person.lname}</h2>
            <ul>
                {this.state.users.map((user,i)=>{
                    return <li>{user}</li>
                })}
            </ul>
            <img src="./assets/nature.jpg" alt="" />
        </div>
    }
}