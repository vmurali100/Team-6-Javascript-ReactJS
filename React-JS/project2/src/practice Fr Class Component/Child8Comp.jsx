import { Component } from "react";

export class Child8Comp extends Component{
    constructor(props){
        super(props)
        this.state={
            showuser:false
        }
    }
    handleAshowUsers = () =>{
        this.setState({showuser:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleAshowUsers}>Show Users</button>
                {this.state.showuser &&   <ul>
                    {this.props.allusers.map((user)=>{
                        return <li>{user}</li>
                    })}
                </ul>}
              
            </div>
        )
    }
}