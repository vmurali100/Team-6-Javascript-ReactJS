import { Component } from "react";

export class Child6Comp extends Component{
    constructor(props){
        super(props)
        this.state={
          showusers:false,
        }
    }
    handleAuserShow = ()=>{
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleAuserShow}>Show users</button>
                {this.state.showusers &&  <ul>
                    {this.props.allusers.map((user)=>{
                        return <li>{user}</li>
                    })}
                </ul>}
               
            </div>
        )
    }
}