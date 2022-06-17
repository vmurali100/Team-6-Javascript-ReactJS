import { Component } from "react";

export default class ChildComp extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
            showUsers:false
        }  
    }
    handleAShowUsers = ()=>{
        this.setState({showUsers:true})
    }
    render() {
        return (
            <div>
                <button onClick={this.handleAShowUsers}>Show Users</button>
                {this.state.showUsers && (
                    <ul>
                    {this.props.allUsers.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>
                )}
            </div>
        )
        
}
}