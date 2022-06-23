import { Component } from "react";

export default class Todos2 extends Component{
    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <p>{this.props.person.fname} {this.props.person.lname}</p>
                <ul>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>id</th>
                                <th>title</th>
                                <th>completed</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.AllTodos.map((user,i)=>{
                       return <tr key={i}>
                        <td>{user.userId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.completed}</td>
                       </tr>
                    })}
                        </tbody>
                    </table>
                 
                </ul>
            </div>
        )
    }
}