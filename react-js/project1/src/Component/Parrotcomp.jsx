import { Component } from "react";

export class Parrotcomp extends Component{//parent-Birds
    constructor(props){
        super(props)
        this.state={
           showdata:false,
        }
    }
    handleuser=()=>{
        this.setState({showdata:true})
    }
    render(){
        return (<div>
            <button onClick={this.handleuser}>showdata</button>
            {this.state.showdata &&  <ul>{this.props.allusers.map((use,i)=>{
                return <li key={i}>{use}</li>
            })}</ul> }
           
        </div>
        )
    }
}