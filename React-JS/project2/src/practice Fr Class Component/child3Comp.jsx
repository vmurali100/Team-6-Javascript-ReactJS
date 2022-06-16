import { Component } from "react";

export class Child3Comp extends Component{
    constructor(props){
        super(props)

        this.state ={
            ShowUsers: false,
        }
    }
    handleAshowUsers = () => {
        this.setState({ShowUsers:true})
    }
    render (){
        return (
             <div>
                <button onClick={this.handleAshowUsers}>Show Users</button>
                {this.state.ShowUsers && <ul>
                    {this.props.allusers.map((user)=>{
                        return <li>{user}</li>
                    })}
                </ul> }
                
             </div>
        )
    }
}