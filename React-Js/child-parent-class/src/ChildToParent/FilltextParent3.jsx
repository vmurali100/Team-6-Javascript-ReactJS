import { Component } from "react";
import FilltextChild3 from "./FilltextChild3";

export default class FilltextParent3 extends Component{
    constructor(){
        super()

        this.state = {
            message: "",
            person: {},
            users:[]
        }
    }
        receiveString = (message) =>{
            this.setState({message})
        }
        receiveObject = (person) =>{
            this.setState({person})
        }
        receiveArray = (users) =>{
            this.setState({users})
        }
    render(){
        const{receiveString,receiveObject,receiveArray} = this;
        const{message,person,users} = this.state
        return(            
            <div>
                <FilltextChild3 
                receiveString={receiveString} 
                receiveObject={receiveObject} 
                receiveArray={receiveArray}/>
                <hr />
                {message && <p>Message From Child Component : {message}</p>}
                {Object.keys(person).length > 0 && <p>Person Details form Child Component : {person.fname}-{person.lname}-{person.tel}-{person.address}</p>}
                <ul>
                    {users.map((user,i)=>{
                        return <li key={i}>{user.city}</li>
                    })}
                </ul>
            </div>
        )
    }
}