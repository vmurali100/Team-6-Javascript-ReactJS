import { Component } from "react";

export default class Todos2 extends Component{
    render(){
        return(
            <div>
             <p>{this.props.message}</p>
             <p>{this.props.todo.userId}-{this.props.todo.id}</p>
             <ul>
                {this.props.alltodos.map((user,i)=>{
                    return <li key={i}>
                        {user.userId}-{user.id}-{user.title}-{user.completed}
                    </li>
                })}
             </ul>
            </div>
        )
    }
}