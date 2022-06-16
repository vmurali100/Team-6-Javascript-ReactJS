import { Component } from "react";

export class Roseflower extends Component{
    constructor(props){
        super(props)
        this.state={
            showflowers:false,
        }
    }
    handleflowers=()=>{this.setState({showflowers:true})}
    render(){
        return (<div>
            <button onClick={this.handleflowers}>showflowers</button>
            {this.state.showflowers && <ul>
                {this.props.allflowers.map((flo,i)=>{
                    return <li key={i}>{flo}</li>
                })}
                </ul>}
        </div>)
    }
}