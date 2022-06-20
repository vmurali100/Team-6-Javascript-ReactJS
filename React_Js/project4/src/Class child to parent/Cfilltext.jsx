import { Component } from "react";
import Cfilltextchild from "./Cfilltextchild";

export default class Cfilltext extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            person:{},
            filltext:[]
        }
    }
    receivemessage=(message)=>{
        this.setState({message})
    }
    receiveperson=(person)=>{
        this.setState({person})
    }
    receivefilltext=(filltext)=>{
        this.setState({filltext})
    }
    render(){
        const{receivemessage,receiveperson,receivefilltext}=this;
        const{message,person,filltext}=this.state
        return(
            <div>
                <Cfilltextchild receivemessage={receivemessage} receiveperson={receiveperson} receivefilltext={receivefilltext}/>
                {message && <p>message from child to parent:{message}</p>}
                {Object.keys(person).length>0 && <p>person from child to parent:{person.fname} - {person.lname}</p>}
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
                        {filltext.map((user,i)=>{
                            return <tr>
                                <th>{user.fname}</th>
                                <th>{user.lname}</th>
                                <th>{user.tel}</th>
                                <th>{user.address}</th>
                                <th>{user.city}</th>
                                <th>{user.state}</th>
                                <th>{user.zip}</th>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}