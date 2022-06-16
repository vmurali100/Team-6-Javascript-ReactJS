import { Component } from "react";

export class Srijacomp extends Component{
    constructor(){
        super()
        this.state={ //state means it contains all information about that particular component
            myname:"Srija",//string
            person:{
                fname:"Srija",
                lname:"Reddy"
            },
            users:["nithya","chandhani","harish"]
        }
    }
    render(){
        return <div>
            <h2>i am Srija</h2>
            <h2>i am one more heading tag</h2>
            <img src="./images/myimage.jpeg" alt="" />
            <h1>{this.state.myname}</h1>
            <p>{this.state.person.fname}-{this.state.person.lname}</p>
            <ul>
                {
                    this.state.users.map(function(user){
                        return <li>{user}</li>
                    })
                }
            </ul>
        </div>
    }
}