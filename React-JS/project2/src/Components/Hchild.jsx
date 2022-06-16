import { Component } from "react";

export class Hchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false
        }
    }
    handlegold=()=>{
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlegold}>show marigold flower colors</button>
                {this.state.showusers && <ul>
                    {this.props.allgold.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}