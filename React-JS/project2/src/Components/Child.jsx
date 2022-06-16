import { Component } from "react";

export class Child extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false
        }
    }
    handleshowusers=()=>{
        // this.state.showusers=true
        this.setState({showusers:true})
    }
    render(){
        return (
            <div>
                <button onClick={this.handleshowusers}>show users</button>
                {this.state.showusers && <ul>
                    {this.props.alluser.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}