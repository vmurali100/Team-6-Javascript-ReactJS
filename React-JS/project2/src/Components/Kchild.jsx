import { Component } from "react";

export class Kchild extends Component{
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
                <button onClick={this.handleshow}>show tulip flower colors</button>
                {this.state.showuser && <ul>
                    {this.props.alluser.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })}
                </ul>}
            </div>
        )
    }
}