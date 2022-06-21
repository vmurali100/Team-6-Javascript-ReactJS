import { Component } from "react";
import FilltextChild1 from "./FilltextChild1";

export default class FilltextParent1 extends Component{
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
                <FilltextChild1 
                receiveString={receiveString} 
                receiveObject={receiveObject} 
                receiveArray={receiveArray}/>
                <hr />
                {message && <p>Message From Child Component : {message}</p>}
                {Object.keys(person).length > 0 && <p>Person Details form Child Component : {person.id}-{person.email}-{person.username}-{person.password}</p>}
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>username</th>
                            <th>email</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}