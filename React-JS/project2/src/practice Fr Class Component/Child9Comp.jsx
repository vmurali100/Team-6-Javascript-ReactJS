import { Component } from "react";

export class Child9Comp extends Component{
    constructor(props){
        super(props)
        this.state={
             showusers:false
        }
    }
    HandleAShowUsers = () => {
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.HandleAShowUsers}>ShowUsers</button>
                {this.state.showusers &&  <ul>
                    {this.props.allusers.map((user)=>{
                        return <li>{user}</li>
                    })}
                </ul>}
               
            </div>
        )
    }
}