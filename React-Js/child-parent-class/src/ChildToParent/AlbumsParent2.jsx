import { Component } from "react";
import AlbumsChild2 from "./AlbumsChild2";

export default class AlbumsParent2 extends Component{
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
                <AlbumsChild2 
                receiveString={receiveString} 
                receiveObject={receiveObject} 
                receiveArray={receiveArray}/>
                <hr />
                {message && <p>Message From Child Component : {message}</p>}
                {Object.keys(person).length > 0 && <p>Person Details form Child Component : {person.userId}-{person.id}-{person.title}</p>}
                <ul>
                    {users.map((user,i)=>{
                        return <li key={i}>{user.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}