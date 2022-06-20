import { Component } from "react";

export class Todoschild1 extends Component{
    constructor(props){
        super(props)
        this.state={
            showtodos:false
        }
    }
    distodos=(()=>{
        this.setState({showtodos:true})
    })
    render(){
        return(
            <div>
                <button onClick={this.distodos}>show Todos</button>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </tr>
                    </thead>
                    {this.state.showtodos &&
                        <tbody>
                            {this.props.alltodos.map((user,i)=>{
                                return <tr key={i}>
                                    <td>{user.userId}</td>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.completeted}</td>
                                </tr>
                            })}
                    </tbody>}
                </table>
            </div>
        )
    }
}