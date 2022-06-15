import { Component } from "react";

export default class ChildComp2 extends Component{
    constructor(props){
        super(props)
        this.state={
            showMachine : false
        }
    }
    handleshowMachine = ()=>{
        this.setState({showMachine: true})
    }
    render(){
        return <div>
            <button onClick={this.handleshowMachine}>Display Model</button>
            {this.state.showMachine && (
                <ul>{this.props.allMachine.map((model,i)=>{
                    return <li key={i}>{model}</li>
                })}</ul>
            )}
        </div>
    }
}