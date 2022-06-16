import { Component } from "react";

export class Jchild extends Component{
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
                <button onClick={this.handleshow}>show sunflower colors</button>
               {this.state.showuser && <ul>
                {this.props.alluser.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
               </ul>}
            </div>
        )
    }
}