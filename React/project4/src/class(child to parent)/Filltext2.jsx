import { Component } from "react";
import { FilltextChild2 } from "./FilltextChild2";

export class Filltext2 extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            users:[]
        }
    }
    recievemessage=(message)=>{
        this.setState({message})
    }
    recieveperson=(person)=>{
        this.setState({person})
    }
    recieveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{recievemessage,recieveperson,recieveusers}=this;
        const{message,person,users}=this.state
        return(
            <div>
                <FilltextChild2 recievemessage={recievemessage} recieveperson={recieveperson} recieveusers={recieveusers}/>
                <p>{message}</p>
                <p>{person.fname}-{person.lname}</p>
                <ul>
                    {users.map((user,i)=>{
                      return  <li key={i}>{user.fname} {user.lname}</li>
                        
                    })}
                </ul>
            </div>
        )
    }
}