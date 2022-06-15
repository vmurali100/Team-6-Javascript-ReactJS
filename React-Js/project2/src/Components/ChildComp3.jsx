import { Component } from "react"

export default class ChildCompe3 extends Component{
    constructor(props){
        super(props)
        this.state ={
            showUsers: false
        }
    }
    handleShowerUsers = ()=>{
        this.setState({showUsers:true})
    }
    render(){
        return <div>
            <button onClick={this.handleShowerUsers}>Display Users</button>
            {this.state.showUsers && (
                <ul>{this.props.allUsers.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>
            )}
        </div>
    }
}