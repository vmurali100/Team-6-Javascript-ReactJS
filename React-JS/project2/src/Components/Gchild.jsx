import { Component } from "react";

export class Gchild extends Component{
    constructor(props){
        super(props)
        this.state={
            showusers:false
        }
    }
    
    handlelotus=()=>{
        this.setState({showusers:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handlelotus}>show lotus flower colors</button>
               {this.state.showusers && <ul>
                    {this.props.alllotus.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}