import { Component } from "react";

export class Fchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false
        }
    }
    handlesshow=()=>{
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlesshow}>show lily flower colors</button>
                {this.state.showusers && <ul>
                    {this.props.alluser.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}