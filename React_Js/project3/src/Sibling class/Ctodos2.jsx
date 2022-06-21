import { useRef } from "react";
import { Component } from "react";

export default class Ctodos2 extends Component{
    render(){
        return(
            <div>
                <p>component2</p>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {this.props.todos.map((user,i)=>{
                                return <tr>
                                    <th>{user.userId}</th>
                                    <th>{user.id}</th>
                                    <th>{user.title}</th>
                                    <th>{user.completed}</th>
                                </tr>
                            })}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}