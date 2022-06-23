import { Component } from "react";

export class ClassChild6Todos extends Component{
    constructor(props){
        super(props)
        this.state={
            SaiTodos:false
        }
    }
    RajuTodos=(()=>{
        this.setState({SaiTodos:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.RajuTodos}>ClickTodos</button>
                <table>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                   {this.state.SaiTodos &&  <tbody>
                        {this.props.allTodos.map((user,i)=>{
                            return <tr>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.completed}</td>
                            </tr>
                        })}
                    </tbody>}
                </table>
            </div>
        )
    }
}