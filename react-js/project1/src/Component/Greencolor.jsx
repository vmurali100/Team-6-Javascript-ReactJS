import { Component } from "react";

export class Greencolor extends Component{   //parent-color
    constructor(props){
        super(props)
        this.state={
           showcolors:false,
        }
    }
    handlecolors=()=>{
        this.setState({showcolors:true})
    }
    render(){
       return (<div>
            <button onClick={this.handlecolors}>showcolors</button>
            {this.state.showcolors && <ul>
               
               {this.props.allcolors.map((col)=>{
                 return <li>{col}</li>
               })}  
             </ul>}
            
            </div>)
    }
}