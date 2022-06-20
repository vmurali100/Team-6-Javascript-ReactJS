import { Component } from "react";
import { FilltextChild3 } from "./FilltextChild3";

export class Filltext3 extends Component{
    constructor(){
        super()
        this.state={
            message:"",
            person:{},
            users:[]
        }
    }
    receivemessage=(message)=>{
        this.setState({message})
    }
    receiveperson=(person)=>{
        this.setState({person})
    }
    receiveusers=(users)=>{
        this.setState({users})
    }
    render(){
        const{receivemessage,receiveperson,receiveusers}=this
        const{message,person,users}=this.state
        return(
            <div>
                <FilltextChild3 receivemessage={receivemessage} receiveperson={receiveperson} receiveusers={receiveusers} />
                <p>{message}</p>
                <p>{person.email} </p>
               <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>{users.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}</tbody>
                </table>
               </div>
            </div>
        )
    }
}