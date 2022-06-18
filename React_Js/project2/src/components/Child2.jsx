import { Component } from "react";

export default class Child2 extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            showusers:false
        }
    }
    handleshowusers=()=>{
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleshowusers}>show users</button>
                {this.state.showusers && (
                    <ul>
                    {this.props.allusers.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>
                )}
            </div>
        )
    }
}