import { Component } from "react";

export default class ChildComp7 extends Component{
    constructor(props){
        super(props)
        this.state={
            showColours: false
        }
    }
    handleshowColours = ()=>{
        this.setState({showColours: true})
    }
    render(){
        return <div>
            <button onClick={this.handleshowColours}>Display Colours</button>
            {this.state.showColours && (
                <ul>{this.props.allColours.map((colo,i)=>{
                    return <li key={i}>{colo}</li>
                })}</ul>
            )}
        </div>
    }
}