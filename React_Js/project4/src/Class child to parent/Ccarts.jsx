import { Component } from "react";
import Ccartschild from "./Ccartschild";

export default class Ccarts extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            person:{},
            carts:[]
        }
    }
    receivemessage=(message)=>{
        this.setState({message})
    }
    receiveperson=(person)=>{
        this.setState({person})
    }
    receivecarts=(carts)=>{
        this.setState({carts})
    }
    render(){
        const {receivemessage,receiveperson,receivecarts}=this;
        const {message,person,carts}=this.state
        return(
            <div>
            <Ccartschild receivemessage={receivemessage} receiveperson={receiveperson} receivecarts={receivecarts}/>
            {message && <p>message from child to parent:{message}</p>}
            {Object.keys(person).length > 0 && <p> person from child to parent:{person.id} - {person.userId} </p>}

            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>userId</th>
                        <th>date</th>
                        <th>__v</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((user,i)=>{
                        return <tr>
                            <th>{user.id}</th>
                            <th>{user.userId}</th>
                            <th>{user.date}</th>
                            <th>{user.__v}</th>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
        )
    }
    
}