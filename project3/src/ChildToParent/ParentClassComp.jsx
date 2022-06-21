import { Component } from "react";
import { ChildClassComp } from "./ChildClassComp";

export class ParentClassComp extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            person:{},
            students:[],
        }
    }

    receivemessage=(msg)=>{
        this.setState({message:msg})
    };
    receiveperson=(person)=>{
        this.setState({person})
    };
    receivestudent=(users)=>{
        this.setState({students:users})
    };
    render(){
        const {receivemessage,receiveperson,receivestudent}=this;
        const {message,person,students}=this.state;
        return(
    
            <div><ChildClassComp 
            receivemessage={receivemessage} 
            receiveperson={receiveperson} 
            receivestudent={receivestudent}/>
            <hr />
           {message && <p>message from child component:{message}</p>}
           {Object.keys(person).length>0 &&  <p>person received from child:{person.fname}-{person.lname}</p>}
           
            <ul>
                {students.map((user)=>{
                    return <li>{user.fname}</li>
                })}
            </ul>
            </div>
        )
    }
}