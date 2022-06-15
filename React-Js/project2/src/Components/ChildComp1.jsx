import { Component } from "react";

export default class ChildComp1 extends Component{
    constructor(props){
        super(props)
        this.state={
            showUsers: false
        }
    }
    handleShowUsers = () =>{
        this.setState({showUsers: true})
    }
    render(){
        return <div>
            <button onClick={this.handleShowUsers}>Display Users</button>
            {this.state.showUsers && (
                <ul>{this.props.allUsers.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>
            )}
        </div>
    }
}