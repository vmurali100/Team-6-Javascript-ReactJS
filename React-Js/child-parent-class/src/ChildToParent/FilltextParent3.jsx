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
                <table border={1}>
                    <thead>
                        <tr>
                            <th>fname</th>
                            <th>lname</th>
                            <th>tel</th>
                            <th>address</th>
                            <th>city</th>
                            <th>state</th>
                            <th>zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i)=>{
                            return <tr key={i}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.tel}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.zip}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}