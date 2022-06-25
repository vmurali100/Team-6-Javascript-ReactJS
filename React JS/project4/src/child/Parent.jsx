import { Component } from "react"
import { Child } from "./Child";

export class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
        message:"",
        person:{},
        students:[]
        }
    }
    remessage=(message)=>{
        this.setState({message})
    };
    reperson=(person)=>{
        this.setState({person})
    };
    rearray=(users)=>{
        this.setState({students:users})
 
    };
    render(){
        const {remessage,reperson,rearray}=this
        const {message,person,students}=this.state
        return <div>
            <Child
            remessage={remessage}
            reperson={reperson}
            rearray={rearray}/>


            <h1>{message}</h1>

            <h2>{person.fname} {person.lname}</h2>

            <ul>
                {students.map((user,i)=>{
                    return <li key={i} >{user}</li>
                })}
            </ul>
        </div>
    }
}