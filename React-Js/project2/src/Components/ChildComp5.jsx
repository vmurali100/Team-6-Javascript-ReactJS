import { Component } from "react";

export default class ChildComp5 extends Component{
    constructor(props){
        super(props)
        this.state = {
            showUsers: false
        }
    }
    haandleshowUsers=()=>{
        this.setState({showUsers:true})
    }
    render(){
        return <div>
            <button onClick={this.haandleshowUsers}>Display Users</button>
            {this.state.showUsers && (
                <ul>{this.props.allstudents.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}</ul>
            )}
        </div>
    }
}