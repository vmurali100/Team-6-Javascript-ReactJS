import { Component } from "react";
import { Todoschildd } from "./Todoschildd";

export class Todoss extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            todos:{},
            users:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recievetodos=(todos)=>{
        this.setState({todos})
    }
    recieveuser=(users)=>{
        this.setState({users})
    }
    render(){
        const {recievemessage,recievetodos,recieveuser}=this
        const {message,todos,users}=this.state
        return(
            <div>
                <Todoschildd recievemessage={recievemessage} recievetodos={recievetodos} recieveuser={recieveuser}/>
                <p>message from child componennt{message}</p>
                <p>todos from child componennt{todos.userId}-{todos.title}</p>
                <ul>
                    {users.map((user,i)=>{
                        return <li key={i}>{user.id}{user.title}{user.userId}{user.completed}</li>
                    })}
                </ul>
            </div>
        )
    }
    
}