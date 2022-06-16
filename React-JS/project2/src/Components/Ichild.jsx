import { Component } from "react";

export class Ichild extends Component{
    constructor(props){
        super(props)
        this.state={
            showuser:false
        }
    }
    handleshow=()=>{
        this.setState({showuser:true})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleshow}>show narcissus flowers colors</button>
            {this.state.showuser && <ul>
                {this.props.alluser.map((user)=>{
                    return <li>{user}</li>
                })}
            </ul>}
            </div>
        )
    }
}