import { Component } from "react"

export class Jeevacomp extends Component{
    constructor(){
        super()
        this.state={
            name:"Jeeva",
            student:{
                fname:"jeeva",
                lname:"reddy"

            },
            viewers:["ishu","swetha","rajitha"]
        }
    }
    render(){
        return <div>
            <h2>i am jeeva</h2>
            <h2>i am another heading</h2>
            <img src="./images/myimage.jpeg" alt="" />
            <h1>{this.state.name}</h1>
            <h2>{this.state.student.fname}-{this.state.student.lname}</h2>
            <ul>
                {this.state.viewers.map(function(views){
                    return <li>{views}</li>
                })}
                
            </ul>
        </div>
    }
}