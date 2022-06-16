import { Component } from "react";

export default class ChildComp8 extends Component{
    constructor(props){
        super(props)
        this.state={
            showMachine: false
        }
    }
    handleshowMachine = ()=>{
        this.setState({showMachine: true})
    }
    render(){
        return <div>
            <button onClick={this.handleshowMachine}>Display Machine</button>
            {this.state.showMachine && (
                <ul>{this.props.allWashingMachine.map((mach,i)=>{
                    return <li key={i}>{mach}</li>
                })}</ul>
            )}
        </div>
    }
}