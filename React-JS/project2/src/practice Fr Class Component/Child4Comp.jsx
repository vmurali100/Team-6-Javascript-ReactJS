import { Component } from "react";

export class Child4Comp extends Component{
    constructor (props){
        super(props)
        this.state={
            Showusers:false,
        }
    }
    handleAshowusers = ()=>{
        this.setState({Showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleAshowusers}>Show Users</button>
                {this.state.Showusers &&  <ul>
                    {this.props.allusers.map((user)=>{
                       return <li>{user}</li>
                    })}
                </ul>}
               
            </div>
        )
    }
}