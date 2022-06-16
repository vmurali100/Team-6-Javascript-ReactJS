import { Component } from "react";

export class Childcomp extends Component{
    constructor(props){
        super(props)

        this.state={
           showusers:false,
        };
        //parent-sandhya
    }
    handleshowuser=()=>{
       this.setState({showusers:true});
    };
    render(){
        return (
            <div>
                <button onClick={this.handleshowuser}>show users</button>
                {this.state.showusers && (<ul>
                    {this.props.allUsers.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>
                )}
                </div>

        );
    }
}