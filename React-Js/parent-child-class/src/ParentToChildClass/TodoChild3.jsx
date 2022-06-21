import { Component } from "react";

export default class TodoChild3 extends Component{
    constructor(props){
        super(props)

        this.state = {
            showTodos: false
        }
    }
    handleshowTodos = () => {
        this.setState({showTodos: true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleshowTodos}>Display Todos</button>    
                <table border={1}>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    {this.state.showTodos && <tbody>
                        {this.props.todoDetails.map((user,i)=>{
                            return <tr key={i}>
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